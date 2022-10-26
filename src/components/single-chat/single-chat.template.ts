export default `
li.single-chat
	article.single-chat__container
		.single-chat__left-block
			img.single-chat__avatar(src=avatarLink alt=senderName)
			.single-chat__message-data
				p.single-chat__sender-name=senderName
				p.single-chat__message-text=messageText
			.single-chat__right-block
				p.single-chat__message-time=messageTime
				span.single-chat__unread-messages=unreadMessages
`;
