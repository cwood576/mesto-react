import React from "react"

function PopupConfirm(props) {
    return (
        <div
            className={`popup popup_name_confirm ${
                props.isOpen ? "popup_opened" : ""
            }`}
        >
            <div className="popup__container">
                <button
                    type="button"
                    onClick={props.onClose}
                    className={`popup__close popup__close_name_confirm`}
                >
                    {" "}
                </button>
                <h2 className="popup__text">{props.title}</h2>
                <button
                    className="popup__button popup__button_active"
                    type="submit"
                >
                    {props.buttonText}
                </button>
            </div>
        </div>
    )
}

export default PopupConfirm
