export default `
.chat-window
  if activeChat===0
    h2.chat-window__title Выберите чат в меню слева или создайте новый
  else
    header.chat-window__header
     .chat-window__left-block
        img.single-chat__avatar(src='https://oir.mobi/uploads/posts/2021-03/thumbs/1616429741_57-p-kartinki-goluboi-fon-62.jpg' alt='Krasotun')
        p.single-chat__title Название чата
     .chat-window__right-block
      form(template-props='userAddForm' class='template-props')
    .chat-window__content
      ul.chat-messages-list
        li.chat-message__container
          p.chat-message__text Текст сообщения
          p.chat-message__date='05:10'
    footer.chat-window__footer
      form(template-props='sendMessageForm' class='template-props')
    `;
