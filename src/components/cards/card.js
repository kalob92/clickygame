import React from 'react';
import "./card.css";

function Card(props) {
    return (
        <div className='col-3'>
            <div className='card mb-3 text-center border-info text-info'>
                <img
                className='card-img-top'
                alt={props.name}
                src={props.image}
                onClick={
                    () => props.scoreIncrement(props.id)
                }
                />
                <div className='card-body'>
                    <p className='card-text'>
                        {props.name}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;