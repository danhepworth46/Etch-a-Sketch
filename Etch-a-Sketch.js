let container = document.getElementById('container');

function makeRows (rows, cols){
container.style.setProperty('--grid-rows', rows);
container.style.setProperty('--grid-cols', cols);
for(let c = 0; c < (rows * cols); c++){
  let cell = document.createElement('div');
  cell.innerText = (c + 1);
  container.appendChild(cell).className = "grid-item";
  
};
};
makeRows(16, 16);

let gridItem = document.querySelectorAll('.grid-item');
console.log(gridItem)

function hover(){
  this.classList.add('new-grid-styles');

}

gridItem.forEach(cell => cell.addEventListener('mouseover', hover));

