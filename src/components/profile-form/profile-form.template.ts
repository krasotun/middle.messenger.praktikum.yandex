export default `
.profile
	.profile__form
		form.form.profile-form
			each val in inputList
				div.profile-form__input-container
					label.profile-form__label(for=val.labelFor)=val.label
					input.profile-form__input(type=val.type disabled = val.disabled required=val.required id=val.id name=val.name placeholder=val.placeholder)
					span.profile-form__error
					p.profile-form__error-text.profile-form__error-text_hidden
			button(template-props='submitButton' class='template-props')
			ul.profile__links-list
				each val in linkList
					li.profille__list-item
						a.profile__link(href=val.link)=val.text
`;
