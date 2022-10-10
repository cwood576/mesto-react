import React from "react"
import PopupWithForm from "./PopupWithForm"

function AddPlacePopup(props) {
    const name = React.useRef()
    const url = React.useRef()

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace(name.current.value, url.current.value, e)
    }
    return (
        <PopupWithForm
            name="place"
            title="Новое место"
            buttonText="Создать"
            handleSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
                type="text"
                name="name"
                ref={name}
                required
                minLength="2"
                maxLength="30"
                className="popup__field popup__field_type_name"
                placeholder="Название"
            />
            <span className="popup__error popup__error_name_name" />
            <input
                type="text"
                name="info"
                ref={url}
                required
                minLength="2"
                maxLength="200"
                className="popup__field popup__field_type_link"
                placeholder="Ссылка на картинку"
            />
            <span className="popup__error popup__error_name_info" />
        </PopupWithForm>
    )
}

export default AddPlacePopup
