import { store, StoreType } from "../../store/Store";
import { Http } from "../../shared/utils/Http";
import { scrollDown } from "../../shared/utils/scroll";

export default class WS {
  private socket: WebSocket;

  private baseURL = "ya-praktikum.tech";

  private chatId?: number;

  private userId?: number;

  private timerId?: any;

  private isConnectionOK: boolean;

  private onOpenConnection() {
    this.isConnectionOK = true;
    console.log("Соединение установлено");

    this.getLastMessages();

    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.socket.send(
          JSON.stringify({
            type: "ping",
          })
        );
      }, 5000);
    }
  }

  private onCloseConnection(event: CloseEvent) {
    console.log(
      event.wasClean ? "Соединение закрыто чисто" : "Обрыв соединения"
    );
    this.isConnectionOK = false;

    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }
  }

  private onReceiveMessage(event: MessageEvent) {
    console.log("Получены данные", event.data);
    const data = JSON.parse(event.data);

    if (Array.isArray(data)) {
      const oldMessages = data
        .map((item) => ({
          isMyMessage: this.userId === item.user_id,
          messageText: item.content,
        }))
        .reverse();
      store.set("messageList", oldMessages);
      scrollDown();
    } else if (data.type === "message") {
      const messages =
        (store.getState() as unknown as StoreType).messageList || [];
      messages.push({
        isMyMessage: this.userId === data.user_id,
        messageText: data.content,
      });
      store.set("messageList", messages);
    }
  }

  private onError(event: ErrorEvent) {
    console.log("Ошибка", event.message);
  }

  sendMessage(message: string) {
    console.log(this.isConnectionOK);
    if (this.isConnectionOK) {
      this.socket.send(
        JSON.stringify({
          content: message,
          type: "message",
        })
      );
    }
  }

  private getLastMessages() {
    this.socket.send(
      JSON.stringify({
        content: "0",
        type: "get old",
      })
    );
  }

  connect() {
    const chatId = store.getState()?.currentChatId;
    const userId = (store.getState() as unknown as StoreType)?.currentUser?.id;

    if (!chatId || !userId) {
      return console.log("Неверный айди чата или пользователя");
    }

    if (chatId === this.chatId && userId === this.userId) {
      return;
    }

    const http = new Http();
    http
      .post<{ token: string }>(`/chats/token/${chatId}`, {
        mode: "cors",
        credentials: "include",
      })
      .then((data) => {
        if (this.chatId !== undefined) {
          this.socket.removeEventListener(
            "open",
            this.onOpenConnection.bind(this)
          );
          this.socket.removeEventListener(
            "close",
            this.onCloseConnection.bind(this)
          );
          this.socket.removeEventListener(
            "message",
            this.onReceiveMessage.bind(this)
          );
          this.socket.removeEventListener("error", this.onError.bind(this));
          this.socket.close(
            1000,
            `Прерыдущее соеденение с чатом ${this.chatId} закрыто`
          );
        }

        this.socket = new WebSocket(
          `wss://${this.baseURL}/ws/chats/${userId}/${chatId}/${data.token}`
        );

        this.socket.addEventListener("open", this.onOpenConnection.bind(this));
        this.socket.addEventListener(
          "close",
          this.onCloseConnection.bind(this)
        );
        this.socket.addEventListener(
          "message",
          this.onReceiveMessage.bind(this)
        );
        this.socket.addEventListener("error", this.onError.bind(this));
        this.chatId = chatId as number;
        this.userId = userId;
      })
      .catch((e: any) => console.log("Ошибка установки соединения", e));
  }
}
