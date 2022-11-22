export default `
.chat-window
  if activeChat===0
    h2.chat-window__title Выберите чат в меню слева или создайте новый
  else
    header.chat-window__header
     .chat-window__left-block
        img.single-chat__avatar(src='https://oir.mobi/uploads/posts/2021-03/thumbs/1616429741_57-p-kartinki-goluboi-fon-62.jpg' alt='Krasotun')
        p.single-chat__title ID чата: #{activeChat}
     .chat-window__right-block
      form(template-props='userAddForm' class='template-props')
      form(template-props='userRemoveForm' class='template-props')
    .chat-window__content
      ul.chat-messages-list
        each val in messageList
          if (!val.isMine)
            li(class="chat-message__container")
              p.chat-message__text=val.content
              p.chat-message__date=val.time
          else
            li(class="chat-message__container chat-message__container_mine")
              p.chat-message__text=val.content
              p.chat-message__date=val.time
    footer.chat-window__footer
      form(template-props='sendMessageForm' class='template-props')
    `;
