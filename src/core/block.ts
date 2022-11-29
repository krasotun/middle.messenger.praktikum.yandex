import { EventBus } from "./event-bus";
import { IProps } from "../interfaces/props";
import { compile as compileTemplate } from "handlebars";
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
  get element(): HTMLElement {
    return this._element;
  }
  show() {
    this.element.style.display = "block";
    console.log("show");
  }
  hide() {
    this.element.style.display = "none";
    console.log("hide");
  }
  init() {
    this._element = this._createDocumentElement("div");
    this.eventBus().emit(EVENTS.FLOW_CDM);
  }
  render() {}
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
  componentRendered() {}
  private _createDocumentElement(tag: any) {
    const element = document.createElement(tag);
    return element;
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
      if (this._element.firstElementChild) {
        this._element.firstElementChild.addEventListener(
          eventName,
          events[eventName]
        );
      }
    });
  }

  private _removeEventListeners() {
    if (!this.props || !this._element) {
      return;
    }
    const { events = {} } = this.props;
    if (!events) {
      return;
    }
    Object.keys(events).forEach((eventName) => {
      if (this._element.firstElementChild) {
        this._element.firstElementChild.removeEventListener(
          eventName,
          events[eventName]
        );
      }
    });
  }
  compile(template: string, props?: any) {
    props = this.props;
    const fragment = this._createDocumentElement("template");
    fragment.innerHTML = compileTemplate(template)(props);
    if (props?.children) {
      fragment.content
        .querySelectorAll(".template-props")
        .forEach((item: any) => {
          const templateProp = item.getAttribute("template-props");
          if (props.children && templateProp) {
            // @ts-ignore
            const propForReplace = this.props.children[templateProp];
            item.replaceWith(propForReplace.element);
          }
        });
    }
    return fragment.content;
  }
  private _render() {
    const block: any = this.render();
    this._removeEventListeners();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this._addEventListeners();
    this.componentRendered();
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
