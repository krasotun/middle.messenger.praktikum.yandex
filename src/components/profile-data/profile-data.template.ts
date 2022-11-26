export default `
<div class="profile__avatar">
  <img class="profile__avatar-image" src="https://ya-praktikum.tech/api/v2/resources{{avatar}}"
    alt={{display_name}} />
  <p class="profile__user-name">{{display_name}}</p>
  <p class="profile__user-name">Id:{{id}}</p>
  <div class="profile__data">
    <div class="profile__container">
      <span class="profile__label">Почта</span>
      <div class="profile__value">{{email}}</div>
    </div>
    <div class="profile__container">
      <span class="profile__label">Логин</span>
      <span class="profile__value">{{login}}</span>
    </div>
    <div class="profile__container">
      <span class="profile__label">Имя</span>
      <span class="profile__value">{{first_name}}</span>
    </div>
    <div class="profile__container">
      <span class="profile__label">Фамилия</span>
      <span class="profile__value">{{second_name}}</span>
    </div>
    <div class="profile__container">
      <span class="profile__label">Телефон</span>
      <span class="span profile__value">{{phone}}</span>
    </div>
  </div>
</div>
`;
