let container = document.getElementById('container');
let btn = document.querySelector('.btn');
let gridHover = document.querySelector('.new-grid-styles');



function makeSquares(row, col){
  for ( let i = 0; i < (row * col); i++){
    let item = document.createElement('div');
    container.appendChild(item);
    item.classList.add('item');
    let items = document.querySelectorAll('.item');
    items.forEach(item => item.addEventListener('mouseover', hover));
function clearGrid(){
    items.forEach(item => item.classList.remove('new-grid-styles'));
    items.forEach(item => item.classList.remove('item'));
  }
}
btn.addEventListener('click', clearGrid);
}


makeSquares(16, 16);
  
function reCreateGrid(){
    let noOfSquares = prompt("What dimensions would you like for your new Etch-a-Sketch grid?");
    makeSquares(noOfSquares, noOfSquares);
}

btn.addEventListener('click', reCreateGrid);


function hover(){
  this.classList.add('new-grid-styles');
}

