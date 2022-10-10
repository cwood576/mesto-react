import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext.js"

function Card(props) {
    const user = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === user._id
    let isLiked = props.card.likes.some((card) => card._id === user._id)
    function handleClick() {
        props.onCardClick(props.card)
    }
    function handleLikeClick() {
        props.onLikeClick(props.card)
    }
    function handleDeleteClick() {
        props.onCardTrashClick(props.card)
    }
    return (
        <div className="card ">
            <div
                className="card__image"
                onClick={handleClick}
                style={{ backgroundImage: `url(${props.card.link})` }}
            />
            {isOwn ? (
                <button
                    type="button "
                    className="card__trash"
                    onClick={handleDeleteClick}
                />
            ) : (
                ""
            )}
            <div className="card__description ">
                <h2 className="card__name"> {props.card.name}</h2>
                <div className="card__like-container">
                    <button
                        type="button"
                        onClick={handleLikeClick}
                        className={`card__like ${
                            isLiked ? "card__like_active" : ""
                        }`}
                    />
                    <div className="card__like-counter">
                        {props.card.likes.length}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
