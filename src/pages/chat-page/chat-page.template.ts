export default `
<header template-props='header' class='template-props'></header>
<main>
  <div class="chat">
    <div class="chat-list">
      <div class="chat-list__container">
        <form template-props='chatAddForm' class='template-props'></form>
        <ul template-props='chatsList' class='template-props'></ul>
      </div>
     </div>
  <div template-props='chatWindow' class='template-props'></div>
  </div>
</main>
`;
