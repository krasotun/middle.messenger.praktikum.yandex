// mixin sign-form (formTitle, inputList, buttontext, linkHref,linkText)

export default `
form.form.sign-form
	.sign-form__container
		div.sign-form__top-container
			h2.sign-form__title #{formTitle}
				each val in inputList
					div.sign-form__input-container
						label.sign-form__label(for=val.labelFor)=val.label
						input.sign-form__input(type=val.type required=val.required id=val.id name=val.name placeholder=val.placeholder)
						span.sign-form__error
						p.sign-form__error-text.sign-form__error-text_hidden
			div.sign-form__bottom-container
				button(template-props='submitButton' class='template-props')
				button(template-props='unSubmitButton' class='template-props')
				a.sign-form__link(href=linkHref) #{linkText}
`;
