const container = document.querySelector('.container');
const gridSizer = document.querySelector('.grid-sizer')



for (x = 0; x < 256; x++) {
  let gridSquare = document.createElement('div');
  gridSquare.classList.add('grid-square');
  container.appendChild(gridSquare);

  gridSquare.addEventListener('mouseover', () => {
    gridSquare.classList.add('gridColor');
  })
}


gridSizer.addEventListener('click', () => {
  do {
    sideDimensions = prompt(`Please enter the desired amount of squares per side for the grid (max 100).`)
  } while (isNaN(sideDimensions) || sideDimensions > 100)

  if (sideDimensions === null) {
    return;
  } else {
    changeDimensions(sideDimensions);
  }
})

function changeDimensions(sides) {
  let x = sides;
  let widthAndHeight = 320 / sides;
  console.log(widthAndHeight);
  const gridSquareList = document.querySelectorAll('.grid-square');
  for (i = 0; i < gridSquareList.length; i++) {
    const gridSquare = document.querySelector('.grid-square');
    container.removeChild(gridSquare);
  }
  for (i = 0; i < (x * x); i++) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.style.width = `${widthAndHeight}px`
    gridSquare.style.height = `${widthAndHeight}px`;
    container.appendChild(gridSquare);

    gridSquare.addEventListener('mouseover', () => {
      gridSquare.classList.add('gridColor');
    })
  }
}

