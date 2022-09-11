import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import PopupConfirm from './PopupConfirm';

import ImagePopup from '../components/ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false);

    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen)
    }
    function handleImageClick() {
        setIsImagePopupOpen(!isImagePopupOpen)
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen)
    }
    function handleConfirmClick() {
        setisConfirmPopupOpen(!isConfirmPopupOpen)
    }
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsImagePopupOpen(false)
        setisConfirmPopupOpen(false)
        setSelectedCard({ name: '', link: '' })
    }
    function handleCardClick(card) {
        setSelectedCard(card)
        handleImageClick()
    }
    return (
        <>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardTrashClick={handleConfirmClick} />
            <Footer />
            <ImagePopup isOpen={isImagePopupOpen} selectedCard={selectedCard} onClose={closeAllPopups} />
            <PopupWithForm name="place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" name="name" required minLength="2" maxLength="40" className="popup__field popup__field_type_name" placeholder="Название" />
                <span className="popup__error popup__error_name_name" />
                <input type="text" name="info" required minLength="2" maxLength="200" className="popup__field popup__field_type_link" placeholder="Ссылка на картинку" />
                <span className="popup__error popup__error_name_info"></span>
            </PopupWithForm>
            <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input type="text" name="info" required minLength="2" maxLength="200" className="popup__field popup__field_type_url" placeholder={"Ссылка на картинку"} />
                <span className="popup__error popup__error_name_info"></span>
            </PopupWithForm>
            <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input type="text" name="name" required minLength="2" maxLength="40" className="popup__field popup__field_type_name" placeholder="Имя" />
                <span className="popup__error popup__error_name_name" />
                <input type="text" name="info" required minLength="2" maxLength="200" className="popup__field popup__field_type_status" placeholder="О себе" />
                <span className="popup__error popup__error_name_info"></span>
            </PopupWithForm>
            <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} title="Вы уверены?" buttonText="Да" />
        </>
    );
}

export default App;
