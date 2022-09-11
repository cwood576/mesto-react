import React from 'react'
import '../index.css';

function PopupWithForm(props) {

    return (
        <>
            <div className={`popup popup_name_${props.name} ${props.isOpen ? ("popup_opened") : ("")}`}>
                <div className="popup__container">
                    <button type="button" onClick={props.onClose} className={`popup__close popup__close_name_${props.name}`}> </button>

                    <h2 className="popup__text">{
                        props.name === "profile" ? "Редактировать профиль" : props.name == "avatar" ? "Обновить аватар" : "Новое место"
                    }</h2>

                    <form className={`popup__form popup__form_name_${props.name}`} name="profile" method="POST" noValidate>
                        {props.name === "avatar" ? "" : (
                            <>
                                <input type="text" name="name" required minLength="2" maxLength="40" className="popup__field popup__field_type_name" placeholder={
                                    props.name === "profile" ? "Имя" : "Название"
                                } />
                                <span className="popup__error popup__error_name_name" />
                            </>
                        )
                        }

                        <input type="text" name="info" required minLength="2" maxLength="200" className="popup__field popup__field_type_info" placeholder="О себе" />
                        <span className="popup__error popup__error_name_info"></span>
                        <button className="popup__button" disabled type="submit">Сохранить</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopupWithForm;