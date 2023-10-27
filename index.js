const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset-button');

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


//function to reset and change grid size - USED IN resetButton
function resetButtonFunc(){
  const newSize = prompt("Enter the number of squares per side for the new grid: ");
  do{
    newSize = prompt('Enter the number of squares per side for the new grid (up to 100):');
    newSize = parseInt(newSize);
  }while(isNaN(newSize) || newSize <= 0 || newSize > 100)
  
  createGrid(newSize)
}


// Initial grid creation
createGrid(16);

// Handle button click to change grid size
resetButton.addEventListener('click', () => {
    resetButtonFunc();
});

// Add hover effect
gridContainer.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = 'red';
    }
});

gridContainer.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = '';
    }
});