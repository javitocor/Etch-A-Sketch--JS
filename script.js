const container = document.createElement('div');
container.id = 'container';
container.className = 'mx-auto my-2';

document.body.appendChild(container);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  container.style.border = '3px solid #0000FF'
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", paint);
  };
};

const color = document.getElementById('favcolor');

function paint(e) {
  let chooseColor = color.value;
  e.target.style.backgroundColor= chooseColor;
}

let size = 0;
const start = document.getElementById('start');
start.addEventListener('click', function(){
  size = prompt('Please enter the side of the grid(max 64):');
    if(size <= 64){
      container.innerHTML = '';
      makeRows(size, size);
    } else if (size > 64) {
      alert('You exceeded the limits. Please Try Again:');
    } 
});

const reset = document.getElementById('reset');
reset.addEventListener('click', function(){
  container.innerHTML = '';
  makeRows(size, size);
});

document.addEventListener("keypress", function stopPaint(event){
  let x = event.keyCode;
  const grid = document.getElementsByClassName('grid-item');
  if(x !== 32) {
    Array.from(grid).forEach((el) => {
      el.removeEventListener("mouseover", paint);  
    });
  } else {
    Array.from(grid).forEach((el) => {
      el.addEventListener("mouseover", paint);
    })
  };
});




