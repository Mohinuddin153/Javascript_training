//  const level=document.getElementById('level')
const grid = document.querySelector('.grid')
const flagsLeft = document.querySelector('#flags-left')
const result = document.querySelector('#result')
let width=10;
let bombAmount=15;
let flags = 0
let squares = []
let isGameOver = false

// function init(d){
//   switch (d) {
//     case 'Easy':
//       width = 8
//       bombAmount = 10
//       break;
//     case 'Medium':
//       width = 10
//       bombAmount = 15
//       grid.style.height=`(${width}*40)px`
//       grid.style.width=`(${width}*40)px`
//       break;
//     case 'Hard':
//       width = 14
//       bombAmount = 20
//       break;
//       default:
//         width = 10
//       bombAmount = 15
//   }
//   grid.style.setProperty('--setWidth',width*40 +'px')
//   createBoard()

// }
// level.addEventListener('click', function (e) {
//     grid.innerHTML=''

//   init(e.currentTarget.value)
// })
// init()


//create Board
function createBoard() {
  flagsLeft.innerHTML = bombAmount

  //get shuffled game array with random bombs
  const bombsArray = Array(bombAmount).fill('bomb')
  const emptyArray = Array(width * width - bombAmount).fill('valid')
  const gameArray = emptyArray.concat(bombsArray)
  const shuffledArray = gameArray.sort(() => Math.random() - 0.5)


  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    square.setAttribute('id', i)
    square.classList.add(shuffledArray[i])
    grid.appendChild(square)
    squares.push(square)

    //normal click
    square.addEventListener('click', function (e) {
      click(square)
    })

    //cntrl and left click
    square.oncontextmenu = function (e) {
      e.preventDefault()
      addFlag(square)
    }
  }

  //add numbers
  for (let i = 0; i < squares.length; i++) {
    let total = 0
    const isLeftEdge = (i % width === 0)
    const isRightEdge = (i % width === width - 1)

    if (squares[i].classList.contains('valid')) {
      if (!isLeftEdge && squares[i - 1].classList.contains('bomb')) total++
      if ((i > width-1) && !isRightEdge && squares[i + 1 - width].classList.contains('bomb')) total++
      if ((i > width-1) && squares[i - width].classList.contains('bomb')) total++
      if ((i > width) && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total++
      if (!isRightEdge && squares[i + 1].classList.contains('bomb')) total++
      if ((i < width*width - width) && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total++
      if ((i <( width*width )- width-1) && !isRightEdge && squares[i + 1 + width].classList.contains('bomb')) total++
      if ((i < width*width - width) && squares[i + width].classList.contains('bomb')) total++
      squares[i].setAttribute('data', total)
    }
  }
}

createBoard()

//add Flag with right click
function addFlag(square) {
  if (isGameOver) return
  if (!square.classList.contains('checked') && (flags < bombAmount)) {
    if (!square.classList.contains('flag')) {
      square.classList.add('flag')
      square.innerHTML = ' 🚩'
      flags++
      flagsLeft.innerHTML = bombAmount - flags
      checkForWin()
    } else {
      square.classList.remove('flag')
      square.innerHTML = ''
      flags--
      flagsLeft.innerHTML = bombAmount - flags
    }
  }
}


//click on square actions
function click(square) {
  let currentId = square.id
  if (isGameOver) return
  if (square.classList.contains('checked') || square.classList.contains('flag')) return
  if (square.classList.contains('bomb')) {
    gameOver(square)
  } else {
    let total = square.getAttribute('data')
    if (total != 0) {
      square.classList.add('checked')
      if (total == 1) square.classList.add('one')
      if (total == 2) square.classList.add('two')
      if (total == 3) square.classList.add('three')
      if (total == 4) square.classList.add('four')
      square.innerHTML = total
      return
    }
    checkSquare(square, currentId)
  }
  square.classList.add('checked')
}


//check neighboring squares once square is clicked
function checkSquare(square, currentId) {
  const isLeftEdge = (currentId % width === 0)
  const isRightEdge = (currentId % width === width - 1)

  setTimeout(() => {
    if (!isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 9 && !isRightEdge) {
      const newId = squares[parseInt(currentId) + 1 - width].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 9) {
      const newId = squares[parseInt(currentId - width)].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId > 10 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1 - width].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (!isRightEdge) {
      const newId = squares[parseInt(currentId) + 1].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 90 && !isLeftEdge) {
      const newId = squares[parseInt(currentId) - 1 + width].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 89 && !isRightEdge) {
      const newId = squares[parseInt(currentId) + 1 + width].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
    if (currentId < 90) {
      const newId = squares[parseInt(currentId) + width].id
      const newSquare = document.getElementById(newId)
      click(newSquare)
    }
  }, 10)
}

//game over
function gameOver(square) {
  result.innerHTML = 'BOOM! Game Over!'
  isGameOver = true

  //show ALL the bombs
  squares.forEach(square => {
    if (square.classList.contains('bomb')) {
      square.innerHTML = '💣'
      square.classList.remove('bomb')
      square.classList.add('checked')
    }
  })
}

//check for win
function checkForWin() {
  ///simplified win argument
  let matches = 0

  for (let i = 0; i < squares.length; i++) {
    if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
      matches++
    }
    if (matches === bombAmount) {
      result.innerHTML = 'YOU WIN!'
      isGameOver = true
    }
  }
}
