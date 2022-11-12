export const errorsHandler = (selector: string, errorText: string) => {
  const errorSpan = document.querySelector(selector);
  if (errorSpan) {
    errorSpan.textContent = errorText;
  }
};
