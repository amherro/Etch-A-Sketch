const grid = document.querySelector('.mainGrid')
const resetBtn = document.querySelector('.resetBtn')
const black = document.querySelector('.bwColors')
const random = document.querySelector('.randomColors')
const eraser = document.querySelector('.eraser');
let resizeModal = document.querySelector('.resizeModal')
let gridSlider = document.getElementById('gridSlider')
let gridNumber = document.querySelector('.gridNumber')
let submitResize = document.querySelector('.submitResize')
let cell;

function createGrid(rows, columns) {
    grid.style.setProperty('--grid-rows', rows)
    grid.style.setProperty('--grid-cols', columns)
    for (i = 0; i < (rows * columns); i++) {
        cell = document.createElement('div')
        cell.classList.add('cell') 
        grid.appendChild(cell);
        cell.addEventListener('mouseover', (e) => {
            if (cell.classList.contains('random')) {
                let randomColorSelection = Math.floor(Math.random() * 16777215);
                e.target.style.backgroundColor = `#${randomColorSelection}` 
            } else if (cell.classList.contains('black')) {
                e.target.style.backgroundColor = '#000'
            } else if (cell.classList.contains('eraser')) {
                e.target.style.backgroundColor = '#fff'
            } else {
                e.target.style.backgroundColor = '#000'
            }
        })
    }
}

random.addEventListener('click', () => {
    cell.classList.add('random');
    cell.classList.remove('black');
})

black.addEventListener('click', () => {
    cell.classList.add('black')
    cell.classList.remove('random')
})
eraser.addEventListener('click', () => {
    cell.classList.add('eraser');
    cell.classList.remove('random')
    cell.classList.remove('black')
})

createGrid(16, 16)

let createNewGrid = (newRows, newColumns) => {
    newRows = submitRows.addEventListener('click', () => {
        return rowsInput.value
    })
    newColumns = submitColumns.addEventListener('click', () => {
        return columnsInput.value
    })
    createGrid(newRows, newColumns)
}

resetBtn.addEventListener('click', () => {
    resizeModal.style.display = 'block'
    let resetColor = document.querySelectorAll('.drawColor')
    resetColor.forEach((square) => {
        square.style.backgroundColor = '';
        square.classList.remove('drawColor')
    })
    submitResize.addEventListener('click', () => {
        rows = gridSlider.value
        columns = gridSlider.value
        gridNumber.textContent =`${gridSlider.value} x ${gridSlider.value}`
        grid.textContent = '';
        createGrid(rows, columns)
    })
})

