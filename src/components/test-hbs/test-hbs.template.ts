export default `
<h1>{{title}}</h1>
<button template-props='submitButton' class='template-props')></button>
{{#each list}}
  <h2>{{this.number}} {{this.name}}</h2>
  {{/each}}
`;
