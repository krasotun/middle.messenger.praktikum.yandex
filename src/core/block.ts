import { EventBus } from "./event-bus";
import { v4 } from "uuid";
enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}
export class Block {
  private _element: HTMLElement;
  id: string = v4();
  protected readonly props: any;
  eventBus: EventBus;

  constructor(props?: {}) {
    this.eventBus = new EventBus();
    this.props = this._makePropsProxy(props);
    this._registerEvents(this.eventBus);
    this.eventBus.emit(EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  private _createResources() {
    this._element = this._createDocumentElement();
  }
  private _createDocumentElement() {
    return document.createElement("div");
  }
  init() {
    this._createResources();
    this.eventBus.emit(EVENTS.FLOW_RENDER);
  }
  private _componentDidMount() {
    console.log("_componentDidMount");
  }
  private _componentDidUpdate() {
    console.log("_componentDidUpdate");
  }
  private _render() {
    const template = document.createElement("div");
    template.innerHTML = this.render();
    this._element = template.firstElementChild as HTMLElement;
  }
  render(): string {
    return "";
  }
  get element() {
    return this._element;
  }
  private _makePropsProxy(props: any): any {
    if (props) {
      const self = this;
      return new Proxy(props, {
        get(target, prop) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set(target, prop, value) {
          target[prop] = value;
          self.eventBus.emit(EVENTS.FLOW_CDU, { ...target }, target);
          return true;
        },
        deleteProperty() {
          throw new Error("Нет доступа");
        },
      });
    }
  }
}
