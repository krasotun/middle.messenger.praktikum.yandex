export default `
<div class="chat-window">
  {{#unless activeChat}}
  <h2 class="chat-window__title">Выберите чат в меню слева или создайте новый</h2>
  {{/unless}}
  {{#if activeChat}}
  <header class="chat-window__header">
    <div class="chat-window__left-block">
      <img class='single-chat__avatar' src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616429741_57-p-kartinki-goluboi-fon-62.jpg"
        alt="Single chat">
      <p class="single-chat__title">ID чата: {{activeChat}}</p>
    </div>
    <div class="chat-window__right-block">
      <form class="template-props" template-props="userAddForm"></form>
      <form class="template-props" template-props="userRemoveForm"></form>
    </div>
  </header>
  <div class="chat-window__content">
     <ul class="chat-messages-list">
        {{#each messageList}}
        {{#unless this.isMine}}
        <li class="chat-message__container">
          <p class="chat-message__text">{{this.content}}</p>
          <p class="chat-message__date">{{this.time}}</p>
          {{/unless}}
          {{#if this.isMine}}
        <li class="chat-message__container_mine">
          <p class="chat-message__text">{{this.content}}</p>
          <p class="chat-message__date">{{this.time}}</p>
          {{/if}}
        </li>
        {{/each}}
      </ul>
    </div>
  <div class="chat-window__footer">
    <form class="template-props" template-props="sendMessageForm"></form>
  </div>
</div>
{{/if}}
`;
