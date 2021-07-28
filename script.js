//Basic function works...now need to add random color button and be able to switch between black and white and random colors. Also want to update/improve the design of the page

const grid = document.querySelector('.mainGrid')
const resetBtn = document.querySelector('.resetBtn')
const bw = document.querySelector('.bwColors')
const randomColors = document.querySelector('.randomColors')
let cell;
function createGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', columns)
    for (i = 0; i < (rows * columns); i++) {
        cell = document.createElement('div')
        cell.classList.add('cell') 
        grid.appendChild(cell);
        cell.addEventListener('mouseover', (e) => {
            e.target.classList.add('drawColor')
        })
    }
}
createGrid(16, 16)

resetBtn.addEventListener('click', () => {
    grid.textContent = '';
    let resetColor = document.querySelectorAll('.drawColor')
    resetColor.forEach((square) => {
        square.style.backgroundColor = '';
        square.classList.remove('drawColor')
    })
    rows = prompt('How many rows would you like for your sketch?')
    columns = prompt('How many columns would you like for your sketch?')
    createGrid(rows, columns)
})

/*

bw.addEventListener('click', () => {
    cell.classList.add('drawColor')
})
function randomColor() {
    let letters = '0123456789abcdef'
    let colors = '#'
    for (let i = 0; i < 6; i++){
        colors += letters[Math.floor(Math.random() * 16)]
    }
    return colors
}
randomColors.addEventListener('click', () => {
    cell.addEventListener('mouseover', () => {
        randomColor();
    })
})
*/