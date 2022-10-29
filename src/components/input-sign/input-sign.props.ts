export interface IInputSignProps {
  labelFor: string;
  label: string;
  type: string;
  required?: boolean;
  id: string;
  name: string;
  placeholder?: string;
  onInput?: (event: InputEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onBlur: (event: FocusEvent) => void;
}
