export const TURNS = { // turnos
    X: '❌',
    O: '⚪'
}

/*export const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]*/

export const generateWinnerCombos = (size = 3) => {
    const combos = []

    // Filas
    for (let row = 0; row < size; row++) {
        const combo = []
        for (let col = 0; col < size; col++) {
            combo.push(row * size + col)
        }
        combos.push(combo)
    }
    
    // Columnas
    for (let col = 0; col < size; col++) {
        const combo = []
        for (let row = 0; row < size; row++) {
            combo.push(row * size + col)
        }
        combos.push(combo)
    }

    // Diagonal principal
    const mainDiagonal = []
    for (let i = 0; i < size; i++) {
        mainDiagonal.push(i * size + i)
    }
    combos.push(mainDiagonal)

    // Diagonal secundaria
    const secondaryDiagonal = []
    for (let i = 0; i < size; i++) {
        secondaryDiagonal.push(i * size + (size - 1 - i))
    }
    combos.push(secondaryDiagonal)

    return combos
}