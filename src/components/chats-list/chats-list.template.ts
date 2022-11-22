export default `
ul.chat-list__chats-list
    each val in chats
      li(class="single-chat__container" id=val.id)
        .single-chat__left-block
          if val.avatar !==null
            img.single-chat__avatar(src=val.avatar alt=val.title)
          else
            img.single-chat__avatar(src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616429741_57-p-kartinki-goluboi-fon-62.jpg" alt=val.title)
        .single-chat__message-data
            p.single-chat__title=val.title
            if val.last_message !==null
              p.single-chat__sender-name=val.last_message.user.first_name
              p.single-chat__message-text=val.last_message.content
            else
              p.single-chat__sender-name=''
              p.single-chat__message-text='Нет непрочитанных сообщений'
        .single-chat__right-block
          // if val.last_message !==null
            p.single-chat__message-time=val.last_message.time
          // else
            p.single-chat__message-time=' '
          if val.unread_count !== 0
            span.single-chat__unread-messages=val.unread_count
          button(class='button single-chat__delete-button' id=val.id) Удалить
`;
