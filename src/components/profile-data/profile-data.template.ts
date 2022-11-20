export default `
.profile__avatar
	img.profile__avatar-image(src='https://ya-praktikum.tech/api/v2/resources'+avatar alt=display_name)
	p.profile__user-name #{display_name}
	p.profile__user-name Id:#{id}
	.profile__data
	.profile__container
		.span.profile__label Почта
		.span.profile__value #{email}
	.profile__container
		.span.profile__label Логин
		.span.profile__value #{login}
	.profile__container
		.span.profile__label Имя
		.span.profile__value #{first_name}
	.profile__container
		.span.profile__label Фамилия
		.span.profile__value #{second_name}
	.profile__container
		.span.profile__label Телефон
		.span.profile__value #{phone}
	`;
