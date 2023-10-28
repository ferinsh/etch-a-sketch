const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');
const colorButton = document.getElementById('change-color');
const titleName = document.getElementById('title')
var hoverColor = "red";
var random_MAX = 255
var random_MIN = 0

// Function to create a new grid
function createGrid(size) {
    gridContainer.innerHTML = '';
    gridContainer.style.setProperty('--grid-size', size);
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
    }
}

//function to change title color
function titleColorChange(randomColor){
    const titleRandom = 'color: ' + randomColor + ';'
    titleName.setAttribute('style', titleRandom)
}


//function to reset and change grid size - USED IN resetButton
function resetButtonFunc(){
  const newSize = prompt("Enter the number of squares per side for the new grid: ");
  do{
    newSize = prompt('Enter the number of squares per side for the new grid (up to 100):');
    newSize = parseInt(newSize);
  }while(isNaN(newSize) || newSize <= 0 || newSize > 100)
  
  createGrid(newSize)
}


//change title color
titleColorChange('cyan')


// Initial grid creation
createGrid(16);

// Handle button click to change grid size
resetButton.addEventListener('click', () => {
    resetButtonFunc();
});

// Handle button click to change hover color
colorButton.addEventListener('click', () => {
    

    do{
        random_MIN = prompt('Enter the min range : ');
        random_MIN = parseInt(random_MIN);
        random_MAX = prompt('Enter the max range (up to 255): ');
        random_MAX = parseInt(random_MAX);
      }while(isNaN(random_MAX) || random_MAX < 0 || random_MAX > 255 || random_MIN > random_MAX)
    

});

// Add hover effect
gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        
        const randomRed =  Math.floor(Math.random() * random_MAX) + random_MIN;
        const randomGreen =  Math.floor(Math.random() * random_MAX) + random_MIN;
        const randomBlue =  Math.floor(Math.random() * random_MAX) + random_MIN;
        hoverColor = 'rgb(' + randomRed + ',' + randomGreen + ',' + randomBlue + ')'
        

        e.target.style.backgroundColor = hoverColor
    }
    titleColorChange(hoverColor)
});

gridContainer.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = '';
    }
});
