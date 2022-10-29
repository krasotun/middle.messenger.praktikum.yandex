export const checkMessage = (message: string) => {
  return message.length > 0;
};

export const validateInput = (input: HTMLInputElement) => {
  switch (input.id) {
    case "message":
      return checkMessage(input.value);
    default:
      return input.validity.valid;
  }
};

export const addInputErrorClass = (
  errorClass: string,
  element: HTMLInputElement
) => {
  if (element) {
    element.classList.add(errorClass);
  }
};
export const removeInputErrorClass = (
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
