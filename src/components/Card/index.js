import React from 'react';
import "./style.css";

function Card(props) {
    return (
        <div className='col-3'>
            <div className='card mb-3 border-info text-info'>
                <img
                    className='card-img-top'
                    alt={props.name}
                    src={props.image}
                    // onClick={() => props.scoreAdd(props.id)}
                    onClick={() => props.handleClick(props.id)}
                />
            </div>
        </div>
    )
}

export default Card;