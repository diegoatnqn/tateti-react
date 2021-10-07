const winningMatrix = {
    0: [[1, 2], [3, 6], [4, 8]],
    1: [[0, 2], [4, 7]],
    2: [[0, 1], [5, 8], [4, 6]],
    3: [[0, 6], [4, 5]],
    4: [[2, 6], [3, 5], [1, 7], [0, 8]],
    5: [[3, 4], [2, 8]],
    6: [[7, 8], [0, 3], [2, 4]],
    7: [[6, 8], [1, 4]],
    8: [[6, 7], [2, 5], [0, 4]]
};

const calcularGanador = (cellValues, turnosRestantes, cellIndex) => {

    const rangoGanador = winningMatrix[cellIndex];

    for (let i = 0; i < rangoGanador.length; i++) {
        const valorActual = cellValues[cellIndex];
        const primerOpcion = cellValues[rangoGanador[i][0]];
        const segundaOpcion = cellValues[rangoGanador[i][1]];

        if (valorActual === primerOpcion && primerOpcion === segundaOpcion) {
            return {
                hasResult: true,
                winner: valorActual,
                winningCombination: [cellIndex, rangoGanador[i][0], rangoGanador[i][1]]

            }
        }

    }
    if (turnosRestantes === 0) {
        return {
            hasResult: true,
            winner: undefined,
            winningCombination: []
        }
    }
    return {
        hasResult: false,
        winner: undefined,
        winningCombination: []
    }
}

export default calcularGanador;