export default `
<form class="form sign-form">
  <div class="sign-form__container">
    <div class="sign-form__top-container">
      <h2 class="sign-form__title">
      {{formTitle}}
      </h2>
        <div class="sign-form__input-container">
          <input class="template-props" template-props="login"/>
        </div>
        <div class="sign-form__input-container">
          <input class="template-props" template-props="password"/>
        </div>
      <div class="sign-form__bottom-container">
        <button class="template-props" template-props="submitButton"></button><span class="sign-form__auth-error"></span>
        <a class="sign-form__link" href={{linkHref}}>{{linkText}}</a>
      </div>
    </div>
  </div>
</form>
`;
