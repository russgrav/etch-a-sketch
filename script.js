const container = document.querySelector('.container');
const gridSizer = document.querySelector('.grid-sizer')
const rainbowButton = document.querySelector('.rainbow-button');
const defaultButton = document.querySelector('.default-button');
const eraserButton = document.querySelector('.eraser');
const clearButton = document.querySelector('.clear');

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

defaultButton.addEventListener('click', () => {
  const gridSquareList = document.querySelectorAll('.grid-square');
  gridSquareList.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = '#333333';
    });
  })
})

rainbowButton.addEventListener('click', () => {
  const gridSquareList = document.querySelectorAll('.grid-square');
  gridSquareList.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = getRandomRGB();
    });
  })
})

eraserButton.addEventListener('click', () => {
  const gridSquareList = document.querySelectorAll('.grid-square');
  gridSquareList.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'white';
    });
  })
})

clearButton.addEventListener('click', () => {
  const gridSquareList = document.querySelectorAll('.grid-square');
  gridSquareList.forEach((square) => {
    square.style.backgroundColor = 'white';
  })
})

function getRandomRGB() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * 
  (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function changeDimensions(sides) {
  let x = sides;
  let widthAndHeight = 400 / sides;
  console.log(widthAndHeight);
  const gridSquareList = document.querySelectorAll('.grid-square');
  gridSquareList.forEach((square) => {
    let gridSquare = document.querySelector('.grid-square');
    container.removeChild(gridSquare);
  })
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

