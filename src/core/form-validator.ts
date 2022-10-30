export const checkMessage = (message: string) => {
  return message.length > 0;
};
const checkLogin = (name: string) => {
  return /^[a-zA-Z][a-zА-ЯA-Z0-9-_\.]{1,20}$/.test(name);
};
const checkPassword = (password: string) => {
  return /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d).*$/.test(password);
};
export const validateInput = (input: HTMLInputElement) => {
  switch (input.id) {
    case "message":
      return checkMessage(input.value);
    case "login":
      return checkLogin(input.value);
    case "password":
      return checkPassword(input.value);
    default:
      return input.validity.valid;
  }
};

const addInputErrorClass = (errorClass: string, element: HTMLInputElement) => {
  if (element) {
    element.classList.add(errorClass);
  }
};
const removeInputErrorClass = (
  errorClass: string,
  element: HTMLInputElement
) => {
  if (element) {
    element.classList.remove(errorClass);
  }
};

export const handleInputValidation = (event: FocusEvent) => {
  if (!validateInput(event.target as HTMLInputElement)) {
    addInputErrorClass("input-error", event.target);
  } else removeInputErrorClass("input-error", event.target);
};

export const formValidator = (validatedForm: HTMLFormElement) => {
  const inputs = Array.from(validatedForm.querySelectorAll("input"));
  const inputsStatus: boolean[] = [];
  inputs.forEach((input) => {
    inputsStatus.push(validateInput(input));
  });
  return !inputsStatus.includes(false);
};
