export default `
header(template-props='header' class='template-props')
main
  .profile
    div(template-props='profileAvatar' class='template-props')
    .profile__form
    form(template-props='viewProfileForm' class='template-props')
    div(template-props='profileData' class='template-props')
    ul(template-props='profileLinks' class='template-props')
  `;
