import React from 'react';
import './Modal.css'
import classNames from 'classnames'
const ResultadoModal = (props) => { 

    const resultadoModalClasses = classNames({
        'modal-open':props.isGameOver
    })
    const mensaje = props.winner ? 'winner is ' + props.winner : 'es un empate';
    return (
        <div id="modal-overlay" className={resultadoModalClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{mensaje}</span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id="new-game-button" onClick={props.onNewGameClicked}>Empezar de nuevo</button>
            </div>
        </div>
    </div>
    );
}

export default ResultadoModal;