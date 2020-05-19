let cells = document.querySelectorAll('.row > div');
let counter = 0;
let shape = 'X';
let aWinner = false;
let posWins = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]]];


// putting cells in an array 0-8
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

// reset the board
function resetBoard() {
    location.reload();
}


// function to click cells & alternate X & O
function cellClicked(event) {
    if (event.target.textContent == '') {
        event.target.textContent = shape
        winCheck()
        if (shape == 'X') {
            shape = 'O'
        } else {
            shape = 'X'
        }
        // prevent cheating - reclicking an already clicked square
    } else if (event.target.textContent !== '') {
        alert('Worng Square Fool');
    }
}

// checking for a win
function winCheck() {
    counter++;
    for (let i = 0; i < posWins.length; i++) {
        let shapeCount = 0;
        for (let j = 0; j < posWins[i].length; j++) {
            if (posWins[i][j].innerHTML == shape) {
                shapeCount++;
            }
            if (shapeCount == 3) {
                aWinner = true
                alert('YOU WIN!');
                resetBoard();
            }
        }
    }
    // check for a draw
    if (counter === 9 && !aWinner) {
        setTimeout(() => { //why isnt <<<this working?
        alert('DRAW!:(');
        }, 0);
        resetBoard();
    }
}
