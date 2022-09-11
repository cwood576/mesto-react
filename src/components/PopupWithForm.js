import React from 'react'
import '../index.css';

function PopupWithForm(props) {

    return (
        <div className={`popup popup_name_${props.name} ${props.isOpen ? ("popup_opened") : ("")}`}>
            <div className="popup__container">
                <button type="button" onClick={props.onClose} className={`popup__close popup__close_name_${props.name}`}> </button>
                <h2 className="popup__text">{props.title}</h2>
                <form className={`popup__form popup__form_name_${props.name}`} name="profile" method="POST">
                    {props.children}
                    <button className="popup__button" disabled type="submit">{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;