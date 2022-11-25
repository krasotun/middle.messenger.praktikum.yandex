export default `
<header template-props='header' class='template-props')></header>
<h1>{{title}}</h1>
{{#each list}}
  <h2>{{this.number}} {{this.name}}</h2>
{{/each}}
<h1 template-props='newTest' class='template-props')></h1>
`;
