const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

// const board = rows.reduce((map, next) => {
//   map.set(next, new Array(rows.length).fill(''))
//   return map
// }, new Map())
const board = rows.reduce((map, next) => {
  // map.set(next, )
  return {
    ...map,
    [next]: new Array(rows.length - 1).fill(' ')
  }
}, {})


function fire(row, column) {
  board[row][column - 1] = 'X'
}

function logBoard(board) {
  console.log(`
     1   2   3   4   5   6   7   8   9
  ------------------------------------
A | ${board.A.reduce((current, next, i) => `${current}[${board.A[i]}] `, ``)}
B | ${board.B.reduce((current, next, i) => `${current}[${board.B[i]}] `, ``)}
C | ${board.C.reduce((current, next, i) => `${current}[${board.C[i]}] `, ``)}
D | ${board.D.reduce((current, next, i) => `${current}[${board.D[i]}] `, ``)}
E | ${board.E.reduce((current, next, i) => `${current}[${board.E[i]}] `, ``)}
F | ${board.F.reduce((current, next, i) => `${current}[${board.F[i]}] `, ``)}
G | ${board.G.reduce((current, next, i) => `${current}[${board.G[i]}] `, ``)}
H | ${board.H.reduce((current, next, i) => `${current}[${board.H[i]}] `, ``)}
I | ${board.I.reduce((current, next, i) => `${current}[${board.I[i]}] `, ``)}
J | ${board.J.reduce((current, next, i) => `${current}[${board.J[i]}] `, ``)}
`)

}

fire('A', 1)
fire('B', 2)
fire('C', 3)
fire('C', 2)
fire('C', 1)
fire('J', 9)

logBoard(board)
