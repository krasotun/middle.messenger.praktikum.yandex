export default `
<ul class="profile__links-list">
  {{#each linkList}}
  <li class="profile__list-item">
    <a class="profile__link" href={{this.link}}>{{this.text}}</a>
  </li>
  {{/each}}
  <li class="profile__list-item">
    <p class="profile__link_clickable">Выход</p>
  </li>
</ul>
`;
