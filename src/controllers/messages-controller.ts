import chatApi from "../api/chat-api";
import { URLS } from "../core/constants";
import store from "../core/store";

class MessagesController {
  private _socket: WebSocket;
  private _onConnect() {
    console.log("Connected");
    console.log(this._socket);
  }
  private _omIncomingMessage(event: MessageEvent) {
    console.log("Получены данные");
    console.log(JSON.parse(event.data));
  }

  connect() {
    const activeChat = store.getState()?.activeChat;
    const userId = store.getState()?.userInfo.id;
    let chatToken;
    if (activeChat !== 0) {
      chatApi.getChatToken(activeChat).then((res) => {
        chatToken = res.json().token;
      });
      this._socket = new WebSocket(
        `${URLS.WEBSOCKET}/${userId}/${activeChat}/${chatToken}`
      );
      this._socket.addEventListener("open", this._onConnect.bind(this));
      this._socket.addEventListener(
        "message",
        this._omIncomingMessage.bind(this)
      );
    }
  }
  sendMessage(message: string) {
    if (this._socket) {
      console.log(this._socket);
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
