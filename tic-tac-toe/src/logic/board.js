//import { WINNER_COMBOS } from '../constants.js'
import { generateWinnerCombos } from '../constants.js'

/*export const checkWinnerFrom = (boardToCheck) => {
  // revisamos todas las combinaciones ganadoras
  // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    // si no hay ganador
    return null
}*/

export const checkWinnerFrom = (boardToCheck) => {
    const winnerCombos = generateWinnerCombos()

    for (const combo of winnerCombos) {
        const [first, ...rest] = combo
        if (
            boardToCheck[first] &&
            rest.every(index => boardToCheck[index] === boardToCheck[first])
        ) {
            return boardToCheck[first]
        }
    }

    return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si hay un empate
  // si no hay más espacios vacíos
  // en el tablero
    return newBoard.every((square) => square !== null)
}