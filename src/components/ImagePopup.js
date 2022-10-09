import React from "react"

function ImagePopup(props) {
    return (
        <div
            className={`popup popup_name_image ${
                props.isOpen ? "popup_opened" : ""
            }`}
        >
            <figure className="popup__img-container">
                <button
                    type="button"
                    className="popup__close popup__close_name_image"
                    onClick={props.onClose}
                />
                <img
                    className="popup__img"
                    src={`${props.selectedCard.link}`}
                    alt="Здесь могла быть картинка"
                />
                <figcaption className="popup__caption">
                    {props.selectedCard.name}
                </figcaption>
            </figure>
        </div>
    )
}

export default ImagePopup
