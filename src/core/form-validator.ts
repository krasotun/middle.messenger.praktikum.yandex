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
const validateInput = (input: HTMLInputElement) => {
  switch (input.id) {
    case "message":
      return checkMessage(input.value);
    case "login":
      return checkLogin(input.value);
    case "email":
      return checkEmail(input.value);
    case "first_name":
      return checkName(input.value);
    case "second_name":
      return checkName(input.value);
    case "display_name":
      return checkName(input.value);
    case "password":
      return checkPassword(input.value);
    case "password-again":
      return checkPassword(input.value);
    case "password-new":
      return checkPassword(input.value);
    case "phone":
      return checkPhone(input.value);
    default:
      return input.validity.valid;
  }
};
const generateErrorMessage = (input: HTMLInputElement): string => {
  switch (input.id) {
    case "message":
      return "Сообщение не может быть пустым";
    case "login":
      return "Cодержит недопустимый символ";
    case "email":
      return "Не является e-mail";
    case "first_name":
      return "Cодержит недопустимый символ";
    case "second_name":
      return "Cодержит недопустимый символ";
    case "display_name":
      return "Cодержит недопустимый символ";
    case "password":
      return "Ненадежный пароль";
    case "password-again":
      return "Ненадежный пароль";
    case "password-new":
      return "Ненадежный пароль";
    case "phone":
      return "Не является номером телефона";
    default:
      return "Ошибка в поле для ввода данных";
  }
};

const addInputErrorClass = (errorClass: string, element: HTMLInputElement) => {
  if (element) {
    element.classList.add(errorClass);
  }
};

const showErrorMessage = (element: HTMLInputElement) => {
  if (element) {
    console.log(element.id);
    const span: HTMLSpanElement = element.closest("div")!.querySelector("span");
    if (span) {
      span.textContent = generateErrorMessage(element);
    }
  }
};
const hideErrorMessage = (element: HTMLInputElement) => {
  if (element) {
    const span: HTMLSpanElement = element.closest("div")!.querySelector("span");
    if (span) {
      span.textContent = "";
    }
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
  const eventTarget = event.target as HTMLInputElement;
  if (!validateInput(eventTarget)) {
    addInputErrorClass("input-error", eventTarget);
    showErrorMessage(eventTarget);
  } else {
    removeInputErrorClass("input-error", eventTarget);
    hideErrorMessage(eventTarget);
  }
  if (event.target) {
    const form = eventTarget.closest("form");
    formValidator(form as HTMLFormElement);
  }
};

export const formValidator = (validatedForm: HTMLFormElement) => {
  const inputs = Array.from(validatedForm.querySelectorAll("input"));
  const inputsStatus: boolean[] = [];
  inputs.forEach((input) => {
    inputsStatus.push(validateInput(input));
  });
  const isValid = !inputsStatus.includes(false);
  const submitButton = validatedForm.querySelector(
    ".button"
  ) as HTMLButtonElement;
  if (!isValid) {
    if (submitButton) {
      submitButton.disabled = true;
    }
  } else if (isValid) {
    if (submitButton) {
      submitButton.disabled = false;
    }
  }
  console.log(
    isValid
      ? "Валидация прошла, данные валидны"
      : "Валидация прошла, данные не валидны"
  );
  return isValid;
};
