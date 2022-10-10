import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext"
import PopupWithForm from "./PopupWithForm"

function EditProfilePopup(props) {
    const [name, setName] = React.useState("")
    const [description, setDescription] = React.useState("")

    const currentUser = React.useContext(CurrentUserContext)
    React.useEffect(() => {
        setName(currentUser.name)
        setDescription(currentUser.about)
    }, [currentUser])

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()

        props.onUpdateUser({ name, description })
    }

    return (
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            handleSubmit={handleSubmit}
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <input
                type="text"
                name="name"
                required
                minLength="2"
                defaultValue={name}
                maxLength="30"
                className="popup__field popup__field_type_name"
                onChange={handleNameChange}
                placeholder="Имя"
            />
            <span className="popup__error popup__error_name_name" />
            <input
                type="text"
                name="info"
                required
                minLength="2"
                defaultValue={description}
                maxLength="200"
                className="popup__field popup__field_type_status"
                onChange={handleDescriptionChange}
                placeholder="О себе"
            />
            <span className="popup__error popup__error_name_info" />
        </PopupWithForm>
    )
}

export default EditProfilePopup
