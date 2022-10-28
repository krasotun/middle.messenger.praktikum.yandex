import { EventBus } from "./event-bus";
import { v4 } from "uuid";
import { IProps } from "../interfaces/props";
enum EVENTS {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}
export class Block {
  private _element: HTMLElement;
  props: IProps;
  eventBus: () => EventBus;

  constructor(props?: IProps) {
    const eventBus = new EventBus();
    if (props) {
      this.props! = this._makePropsProxy(props);
    }
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(EVENTS.INIT);
  }

  get class(): string {
    return this.props.class || "";
  }
  get element(): HTMLElement {
    return this._element;
  }

  init() {
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }
  render() {
    return "";
  }
  componentDidMount() {}
  componentDidUpdate() {
    return true;
  }
  setProps(newProps: IProps) {
    if (!newProps) {
      return;
    }
    Object.assign(this.props, newProps);
  }
  private _registerEvents(eventBus: EventBus) {
    eventBus.on(EVENTS.INIT, this.init.bind(this));
    eventBus.on(EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  private _addEventListeners() {
    if (!this.props) {
      return;
    }
    const { events = {} } = this.props;
    if (!events) {
      return;
    }
    Object.keys(events).forEach((eventName) => {
      console.log(eventName);
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  private _removeEventListeners() {}

  private _render() {
    const template = document.createElement("div");
    template.innerHTML = this.render();
    template.querySelectorAll(".template-props").forEach((item) => {
      const templateProp = item.getAttribute("template-props");
      if (this.props.children && templateProp) {
        // @ts-ignore
        const propForReplace = this.props.children[templateProp];
        item.replaceWith(propForReplace.element);
      }
    });
    this._element = template;
    const id = v4();
    this._element.setAttribute("id", id);
    this._addEventListeners();
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(EVENTS.FLOW_RENDER);
  }
  private _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    if (response) {
      this.eventBus().emit(EVENTS.FLOW_RENDER);
    }
  }
  private _makePropsProxy(props: IProps) {
    const self = this;
    return new Proxy(props, {
      set(target, prop, value) {
        target[prop as any] = value;
        self.eventBus().emit(EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error("Отказано в доступе");
      },
    });
  }
}
