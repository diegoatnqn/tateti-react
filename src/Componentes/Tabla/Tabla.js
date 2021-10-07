import React from 'react';
import './Tabla.css';
import Celda from '../Celdas/Celda';
const Tabla = (props) => {
    
    const celdas = props.celdaValores.map((value, index) => {
        const canHighlight = props.combinacionGanadora &&
            props.combinacionGanadora.indexOf(index) >= 0
        return (
            <Celda value={value} canHighlight={canHighlight} key={index} onClick={()=>props.cellClicked(index)} />
        );
    })

    return (
        <div id="board">
            { celdas}
        </div>);
}
export default Tabla;