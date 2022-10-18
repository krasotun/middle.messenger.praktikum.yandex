import { EventBus } from "../event-bus/event-bus";
import { v4 } from "uuid";
import { IMeta } from "../../interfaces/meta";
enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}
export class Block {
  private _element: HTMLElement;
  public id: string = v4();
  private _meta: IMeta;
  protected readonly props: any;
  public eventBus: EventBus;

  constructor(tagName: string, props?: any) {
    this.eventBus = new EventBus();
    this._meta = { tagName, props };
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
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }
  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
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
    console.log("_render");
  }

  private _makePropsProxy(props: any) {
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
