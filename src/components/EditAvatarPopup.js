import React from "react"
import PopupWithForm from "./PopupWithForm"

function EditAvatarPopup(props) {
    const avatar = React.useRef()

    function handleSubmit(e) {
        e.preventDefault()
        props.onUpdateAvatar(avatar.current.value, e)
    }

    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            handleSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
                type="text"
                name="info"
                required
                minLength="2"
                maxLength="200"
                ref={avatar}
                className="popup__field popup__field_type_url"
                placeholder={"Ссылка на картинку"}
            />
            <span className="popup__error popup__error_name_info" />
        </PopupWithForm>
    )
}

export default EditAvatarPopup
