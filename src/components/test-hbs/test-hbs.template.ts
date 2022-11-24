export default `
<h1>{{title}}</h1>
{{#each list}}
  <h2>{{this.number}} {{this.name}}</h2>
{{/each}}
<h1 template-props='newTest' class='template-props')></h1>
`;
