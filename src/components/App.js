import React from 'react'
import '../index.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
    const [isImagePopupOpen, setImagePopupState] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState("");
    function handleEditAvatarClick() {
        setEditAvatarPopupState(!isEditAvatarPopupOpen)
    }
    function handleEditProfileClick() {
        setEditProfilePopupState(!isEditProfilePopupOpen)
    }
    function handleImageClick() {
        setImagePopupState(!isImagePopupOpen)
    }
    function handleAddPlaceClick() {
        setAddPlacePopupState(!isAddPlacePopupOpen)
    }
    function closeAllPopups() {
        setEditProfilePopupState(false)
        setAddPlacePopupState(false)
        setEditAvatarPopupState(false)
        setImagePopupState(false)
    }
    function handleCardClick(card) {
        setSelectedCard(card)
        handleImageClick(true)
    }
    return (
        <>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
            <Footer />
            <ImagePopup isOpen={isImagePopupOpen} selectedCard={selectedCard} onClose={closeAllPopups} />
            <PopupWithForm name="place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
            <PopupWithForm name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
            <PopupWithForm name="profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
            <div className="popup popup_name_confirm ">
                <div className="popup__container">
                    <button type="button" className="popup__close popup__close_name_confirm"> </button>
                    <h2 className="popup__text">Вы уверены?</h2>
                    <button className="popup__button popup__button_active" type="submit">Да</button>
                </div>
            </div>
        </>
    );
}

export default App;
