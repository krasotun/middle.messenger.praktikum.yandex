export default `
header.header
  nav.header__navigation
    ul.header__links-list
      li.header__list-item
        a.header__link(href='/')='Главная'
      li.header__list-item
        a.header__link(href='/sign-up')='Регистрация'
      li.header__list-item
        a.header__link(href='/profile')='Профиль'
      li.header__list-item
        a.header__link(href='/edit-profile')='Редактировать профиль'
      li.header__list-item
        a.header__link(href='/change-password')='Сменить пароль'
      li.header__list-item
        a.header__link(href='/chat')='Чаты'
      li.header__list-item
        a.header__link(href='/404')='Страница 404'
      li.header__list-item
        a.header__link(href='/500')='Страница 500'
`;
