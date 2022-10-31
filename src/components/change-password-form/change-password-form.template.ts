export default `
form.form.profile-form
	div.profile-form__input-container
		input(template-props='password' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='newPassword' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='againPassword' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-containere-form__error-text_hidden
	button(template-props='submitButton' class='template-props')
	`;
