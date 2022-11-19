export default `
.chat-window
  if activeChat===0
    h2.chat-window__title Выберите чат в меню слева или создайте новый
  else
    header.chat-window__header
     .chat-window__left-block
      img.single-chat__avatar(src='https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg' alt='Krasotun')
      p.single-chat__sender-name Название чата
    .chat-window__content
      ul.chat-messages-list
        li.chat-message__container
          p.chat-message__text Текст сообщения
          p.chat-message__date='05:10'
    footer.chat-window__footer
      form(template-props='sendMessageForm' class='template-props')
    `;
