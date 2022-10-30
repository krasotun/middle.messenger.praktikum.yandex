const checkMessage = (message: string) => {
  return message.length > 0;
};
const checkLogin = (login: string) => {
  return /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(login);
};
const checkName = (name: string) => {
  return /^[a-zа-яA-ZА-Я][a-zа-яA-ZА-Я0-9-_\.]{1,20}$/.test(name);
};
const checkEmail = (email: string) => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
};
const checkPhone = (phone: string) => {
  return /^\+?[1-9][0-9]{10,15}$/.test(phone);
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
    case "email":
      return checkEmail(input.value);
    case "first-name":
      return checkName(input.value);
    case "second-name":
      return checkName(input.value);
    case "password":
      return checkPassword(input.value);
    case "password-again":
      return checkPassword(input.value);
    case "phone":
      return checkPhone(input.value);
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
