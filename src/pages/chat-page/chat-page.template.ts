export default `
header(template-props='header' class='template-props')
.chat 
	.chat-list 
		a.chat-list__profile-link(href="/profile")='Профиль >'
		.chat-list__form-container
		form(template-props='chatSearchForm' class='template-props')
		ul.chat-list__chats-list
			li(template-props='singleChat' class='template-props')
	.chat-window
		header.chat-window__header
			.chat-window__left-block 
					img.single-chat__avatar(src='https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg' alt='Krasotun')
					p.single-chat__sender-name Krasotun
			button.button.chat-window__more-button
					p иконка more	
		.chat-window__content
			ul.chat-messages-list
				li(template-props='chatMessage' class='template-props')
		footer.chat-window__footer
			p Форма отправки сообщения	

`;
