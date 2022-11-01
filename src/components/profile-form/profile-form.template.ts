export default `
form.form.profile-form
	div.profile-form__input-container
		input(template-props='email' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='login' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='firstName' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='lastName' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='displayName' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	div.profile-form__input-container
		input(template-props='phone' class='template-props')
		span.profile-form__error
		p.profile-form__error-text.profile-form__error-text_hidden
	button(template-props='submitButton' class='template-props')
	`;
