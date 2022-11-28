export default `
<ul class="chat-list__chats-list">
  {{#each chats}}
  <li class="single-chat__container" id={{this.id}}>
    <div class="single-chat__left-block">
      {{#if this.avatar}}
      <img class="single-chat__avatar" src="https://ya-praktikum.tech/api/v2/resources{{this.avatar}}"
        alt={{this.titile}}>
      {{/if}}
      {{#unless this.avatar}}
      <img class="single-chat__avatar"
        src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616429741_57-p-kartinki-goluboi-fon-62.jpg"
        alt={{this.titile}}>
      {{/unless}}
      <div class="single-chat__message-data">
        <p class="single-chat__title">{{this.title}}</p>
        {{#if this.last_message}}
        <p class="single-chat__sender-name">{{this.last_message.user.first_name}}</p>
        <p class="single-chat__message-text">{{this.last_message.content}}</p>
        {{/if}}
        {{#unless this.last_message}}
        <p class="single-chat__sender-name"></p>
        <p class="single-chat__message-text">Нет непрочитанных сообщений</p>
        {{/unless}}
      </div>
    </div>
    <div class="single-chat__right-block">
      {{#unless this.last_message}}
      <p class="single-chat__message-time"></p>
      {{/unless}}
      {{#if this.unread_count}}
      <span class="single-chat__unread-messages">{{this.unread_count}}</span>
      {{/if}}
      <button class="button single-chat__delete-button" id={{this.id}}>Удалить</button>
      {{/each}}
    </div>
  </li>
</ul>
`;
