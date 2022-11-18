export default `
ul.chat-list__chats-list
    each val in chats
      li.single-chat__container
        .single-chat__left-block
            img.single-chat__avatar(src=val.avatar alt=val.title)
        .single-chat__message-data
            p.single-chat__title=val.title
            p.single-chat__sender-name=val.last_message.user.first_name
            p.single-chat__message-text=val.last_message.content
        .single-chat__right-block
          p.single-chat__message-time=val.last_message.time
          span.single-chat__unread-messages=val.unread_count
`;
