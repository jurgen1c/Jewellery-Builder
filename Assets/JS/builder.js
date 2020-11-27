let scontainer = document.querySelector('.temp-wrap');
let tWrap = document.querySelector('.build-wrap');

function createStone() {
  let wrap = document.createElement('div');
  wrap.innerHTML = 'Test stone';
  wrap.style.background = "red";
  wrap.style.width = '3rem';
  wrap.style.height = '3rem';
  scontainer.appendChild(wrap);
}

function createTemplate(tvalue) {
  let count = 0;
  if(tvalue == 'one-p') {
    while (tWrap.firstChild) {
      tWrap.firstChild.remove();
    }
    let stone = document.createElement('div');
    stone.setAttribute('class', 'stone-wrap1');
    stone.setAttribute('ondrop', 'drop(event)');
    stone.setAttribute('ondragover', 'allowDrop(event)');
    tWrap.appendChild(stone);
  } else if(tvalue == 'three-p'){
    while (tWrap.firstChild) {
      tWrap.firstChild.remove();
    }
    count = 3;
    for(let i = 1; i <= count; i++){
      let stone = document.createElement('div');
      stone.setAttribute('class', `stone-wrap${i}`);
      stone.setAttribute('ondrop', 'drop(event)');
      stone.setAttribute('ondragover', 'allowDrop(event)');
      tWrap.appendChild(stone);
    }
  }else if(tvalue == 'seven-p'){
    while (tWrap.firstChild) {
      tWrap.firstChild.remove();
    }
    count = 7;
    for(let i = 1; i <= count; i++){
      let stone = document.createElement('div');
      stone.setAttribute('class', `stone-wrap${i}`);
      stone.setAttribute('ondrop', 'drop(event)');
      stone.setAttribute('ondragover', 'allowDrop(event)');
      tWrap.appendChild(stone);
    }
  }
  localStorage.setItem('tWrap', JSON.stringify(tWrap));
  //const saveW = JSON.parse(localStorage.getItem('tWrap'));
}

function selectBase(svalue){

  tWrap.style.backgroundImage = `url(./Assets/Images/${svalue}.png)`;
  /* if(svalue == 'pearls'){
    webpacker import
    css loader
    tWrap.style.background = "url('../Images/pearls.png')";
  }else if(svalue == 'silver'){
    tWrap.style.background = "url('../Images/silver.png')";
  }else if(svalue == 'gold'){
    tWrap.style.background = "url('../Images/gold.png')";
  } */
}

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