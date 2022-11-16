export default `
header(template-props='header' class='template-props')
main
  .profile
    div(template-props='changeAvatarForm' class='template-props')
    .profile__form
    div(template-props='profileData' class='template-props')
    ul(template-props='profileLinks' class='template-props')
  `;
