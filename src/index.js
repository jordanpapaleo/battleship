const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

function initShip(name, size) {
  return { name, size, x: null, y: null }
}

const ships = {
  battleship: initShip('battleship', 4),
  carrier: initShip('carrier', 5),
  cruiser: initShip('cruiser', 3),
  destroyer: initShip('destroyer', 2),
  submarine: initShip('submarine', 3),
}

const board = rows.reduce((map, next) => ({ ...map, [next]: new Array(rows.length - 1).fill(' ') }), {})

function placeShip(type, row, column, alignment) {
  ships[type].x = column
  ships[type].y = row

  let size = ships[type].size

  while(size) {
    if (alignment === 'H') {
        const c = column - 1 + size - 1
        if (c < 9 && c >= 0) {
          board[row][c] = 'X'
        } else {
          console.log('Column off board')
        }

    } else if (alignment === 'V') {
      const rowI = rows.indexOf(row)

      if (rowI + size === -1) {
        console.log('Not valid row')
      } else {
        board[rows[rowI + size - 1]][column - 1] = 'X'
      }
    }

    size--
  }
}


function fire(row, column) {
  if (board[row][column - 1] === 'X') {
    board[row][column - 1] = 'H'
    console.log('\x1b[31m%s\x1b[0m', `Fire ${row} x ${column}: HIT`)
  } else {
    board[row][column - 1] = 'M'
    console.log('\x1b[37m%s\x1b[0m', `Fire ${row} x ${column}: MISS`)
  }
}

function logRow(row) {
  return row.reduce((current, next, i) => `${current}[${row[i]}] `, ``)
}

function logBoard(b) {
  console.log(`
     1   2   3   4   5   6   7   8   9
  ------------------------------------
A | ${logRow(b.A)}
B | ${logRow(b.B)}
C | ${logRow(b.C)}
D | ${logRow(b.D)}
E | ${logRow(b.E)}
F | ${logRow(b.F)}
G | ${logRow(b.G)}
H | ${logRow(b.H)}
I | ${logRow(b.I)}
J | ${logRow(b.J)}
`)
}

placeShip('carrier', 'B', 2, 'V')
placeShip('battleship', 'C', 5, 'H')
placeShip('cruiser', 'F', 4, 'V')
placeShip('submarine', 'H', 6, 'V')
placeShip('destroyer', 'F', 7, 'H')

fire('A', 1)
fire('B', 2)
fire('C', 3)
fire('C', 2)
fire('C', 1)
fire('J', 9)
fire('C', 6)

logBoard(board)
