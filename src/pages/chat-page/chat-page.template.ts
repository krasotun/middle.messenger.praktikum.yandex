export default `
header(template-props='header' class='template-props')
main
  .chat
    .chat-list
      .chat-list__form-container
      form(template-props='chatSearchForm' class='template-props')
      form(template-props='chatAddForm' class='template-props')
      ul(template-props='chatsList' class='template-props')
    div(template-props='chatWindow' class='template-props')
    // .chat-window
      // h2.chat-window__title Выберите чат в меню слева или создайте новый
      // header.chat-window__header
      //   .chat-window__left-block
      //     img.single-chat__avatar(src='https://avatarko.ru/img/kartinka/33/muzhchina_kapyushon_33779.jpg' alt='Krasotun')
      //     p.single-chat__sender-name Krasotun
      // .chat-window__content
      //     ul.chat-messages-list
      //       li(template-props='chatMessage' class='template-props')
      // footer.chat-window__footer
        `;
