import React from 'react'
import '../index.css';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }
    return (
        <>
            <div className="card ">
                <div className="card__image" onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})` }}></div>
                <button type="button " className="card__trash"></button>
                <div className="card__description ">
                    <h2 className="card__name"> {props.card.name}</h2>
                    <div className="card__like-container">
                        <button type="button " className="card__like"></button>
                        <div className="card__like-counter">{props.card.likes.length}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
