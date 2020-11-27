let scontainer = document.querySelector('.temp-wrap');

function createStone() {
  let wrap = document.createElement('div');
  wrap.innerHTML = 'Test stone';
  wrap.style.background = "red";
  wrap.style.width = '3rem';
  wrap.style.height = '3rem';
  scontainer.appendChild(wrap);
}

/* function onDragStart(event) {

  event.dataTransfer.setData('text/plain', event.target.id);

  event
    .currentTarget
    .style
    .background = 'yellow';
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData('text');
  
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
} */

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function colourFunction(id, color) {
  var myselect = document.getElementById("select1");
  let stone = document.getElementById(id)
/*   colour = myselect.options[myselect.selectedIndex].className;
  stone.classList.toggle(colour); */
  stone.style.background = color;
  myselect.blur(); 
  //This just unselects the select list without having to click somewhere else on the page
}

function shapeFunction() {
  
}