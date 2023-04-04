var template = document.getElementById('sample').content;
var copyTemplate = document.importNode(template, true);
var app = document.getElementById('app');
var add = document.getElementById('addBtn');
var renderedItems = app.children;


add.addEventListener('click', e => {
  copyTemplate.querySelector('#label').textContent= "label";
  copyTemplate.querySelector('#title').textContent= "Item name";
  copyTemplate.querySelector('#desc').textContent= "This could be a bit longer description that is forwarded from textarea value.";
  app.appendChild(copyTemplate.cloneNode(true));
});


app.addEventListener('click', removeItem);

function removeItem(e) {
  renderedItems.forEach((item) => {
    if(e.target.classList.contains('material-symbols-outlined')) {
      var project = e.target.parentElement.parentElement;
      project.remove();
    };
  });
}
