import chatApi from "../api/chat-api";
import { URLS } from "../core/constants";
import store from "../core/store";
import chatController from "./chat-controller";

class MessagesController {
  private _socket: WebSocket;
  private _currentChat: number;
  private _currentUser: number;

  private _onOpen() {
    console.log("Connected");
    this._getMessages();
  }
  private _omMessage(event: MessageEvent) {
    console.log("Получены данные");
    const data = JSON.parse(event.data);
    if (Array.isArray(data)) {
      const messages = data.reverse();
      messages.forEach((item) => {
        const formattedTime = new Date(item.time);
        item.time = formattedTime.toLocaleTimeString();
        item.isMine = this._currentUser === item.user_id;
      });
      store.setState({ messageList: messages });
    } else if (data.type === "message") {
      const messages = store.getState()?.messageList;
      const formattedTime = new Date(data.time);
      data.time = formattedTime.toLocaleTimeString();
      data.isMine = this._currentUser === data.user_id;
      messages?.push(data);
    }
    chatController.getChats();
  }
  private _onError(event: Error) {
    console.log("Произошла ошибка", event.message);
  }
  private _onClose(event: CloseEvent) {
    console.log(
      event.wasClean
        ? "Соединение закрыто корректно"
        : "Соединение разорвано неожиданно"
    );
  }
  private _getMessages() {
    this._socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  }
  private _addEventListeners() {
    this._socket.addEventListener("open", this._onOpen.bind(this));
    this._socket.addEventListener("message", this._omMessage.bind(this));
    this._socket.addEventListener("error", this._onError.bind(this));
    this._socket.addEventListener("close", this._onClose.bind(this));
  }
  private _removeEventListeners() {
    this._socket.removeEventListener("open", this._onOpen.bind(this));
    this._socket.removeEventListener("message", this._omMessage.bind(this));
    this._socket.removeEventListener("error", this._onError.bind(this));
    this._socket.removeEventListener("close", this._onClose.bind(this));
  }

  connect() {
    const activeChat = store.getState()?.activeChat;
    const userId = store.getState()?.userInfo.id;

    if (activeChat === 0) {
      console.log("Чат не выбран");
      return;
    }
    if (activeChat === this._currentChat && userId === this._currentUser) {
      console.log("Уже подключены");
      return;
    }
    if (this._currentChat !== undefined) {
      this._removeEventListeners();
      this._socket.close(1000, "Закрыли прошлое соединение");
    }
    chatApi
      .getChatToken(activeChat)
      .then((res) => {
        const chatToken = res.json().token;
        this._socket = new WebSocket(
          `${URLS.WEBSOCKET}/${userId}/${activeChat}/${chatToken}`
        );
        this._addEventListeners();
        this._currentChat = activeChat as number;
        this._currentUser = userId as number;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sendMessage(message: string) {
    if (this._socket) {
      this._socket.send(
        JSON.stringify({
          content: message,
          type: "message",
        })
      );
    }
  }
}

export default new MessagesController();
