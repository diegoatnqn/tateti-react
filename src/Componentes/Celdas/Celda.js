import React from 'react';
import classNames from 'classnames'
import './Celda.css';

const Celda = (props) => {
    const cellClasses = classNames({
        cell: true,
        winner:props.canHighlight
    })

    const cellContentClasses = classNames({
        'cell-content': true,
        populated:props.value
    })

    return (
        <button className={cellClasses} onClick={props.onClick}>
            <span className={cellContentClasses}>{props.value}</span>
        </button>
        );
}

export default Celda;