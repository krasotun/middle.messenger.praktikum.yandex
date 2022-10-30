export default `
form.form.sign-form
	.sign-form__container
		div.sign-form__top-container
			h2.sign-form__title #{formTitle}
				div.sign-form__input-container
					input(template-props='email' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='login' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='firstName' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='lastName' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='phone' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='password' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden
				div.sign-form__input-container
					input(template-props='passwordAgain' class='template-props')
					span.sign-form__error
					p.sign-form__error-text.sign-form__error-text_hidden

			div.sign-form__bottom-container
				button(template-props='submitButton' class='template-props')
				a.sign-form__link(href=linkHref) #{linkText}
`;
