import React, { useState} from 'react';
import './Game.css';
import Tabla from './Tabla/Tabla';
import ResultadoModal from './Resultado/Modal';
import calcularGanador from '../utilidad/CalculadorGanador'
const Game = () => {

    const [celdaValores, setCellValue] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXisNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [turnosRestantes, setNumeroTurnosRestantes] = useState(9);
    const [winner, setWinner] = useState();

    const [combinacionGanadora, setCombinacionGanadora] = useState([])

    const isCellEmpty = (cellIndex) => {
        return celdaValores[cellIndex]===''
    }

    const onCellClicked = (cellIndex) => {
        if (isCellEmpty(cellIndex)) {
            const nuevoValorCelda = [...celdaValores];
            nuevoValorCelda[cellIndex] = xIsNext ? 'X' : 'O';
            let nuevoNumTurnosRestantes = turnosRestantes - 1;
            //calculo resultado
            const calcResult = calcularGanador(nuevoValorCelda, nuevoNumTurnosRestantes, cellIndex);
            console.log(calcResult);
            setCellValue(nuevoValorCelda);
            setXisNext(!xIsNext);
            setIsGameOver(calcResult.hasResult);
            setNumeroTurnosRestantes(nuevoNumTurnosRestantes);
            setWinner(calcResult.winner);
            setCombinacionGanadora(calcResult.winningCombination);
        }
    }
    const miReiniciarJuego = () => {
        setCellValue(['', '', '', '', '', '', '', '', '']);
        setXisNext(true);
        setIsGameOver(false);
        setNumeroTurnosRestantes(9);
        setWinner();
        setCombinacionGanadora([]);
    }

    return (
    <div id="game">
            <h1>TA TE TI</h1>
            <Tabla celdaValores={celdaValores} combinacionGanadora={combinacionGanadora} cellClicked={onCellClicked} />
            <ResultadoModal isGameOver={isGameOver} winner={winner} onNewGameClicked={miReiniciarJuego} />
    </div>
    );
}

export default Game;