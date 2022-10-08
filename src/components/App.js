import React from 'react'
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import PopupConfirm from './PopupConfirm';

import ImagePopup from '../components/ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/Api';
import { CardsContext } from '../contexts/CardsContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup';
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [isConfirmPopupOpen, setisConfirmPopupOpen] = React.useState(false);
    
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])

    const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
    
    React.useEffect(() => {
        api.getProfileInfo()
        .then(res => {
            setCurrentUser(res)
        })
        .catch(err => console.log(err))
        
        api.getInitialCards()
            .then(res => {
                setCards(res)
            })
            .catch(err => console.log(err))

    }, [])

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
    function handleUpdateUser({name, description}){    
        api.updateProfileInfo({name, description})
            .then((res) =>{
                setCurrentUser(res)
            })
        closeAllPopups()
    }
    function handleUpdateAvatar(avatar){
        api.updateAvatar(avatar)
            .then((res) =>{
                setCurrentUser(res)
            })
        closeAllPopups()
    }
    function handleCardLike(card){
        let isLiked = card.likes.some(i => i._id === currentUser._id);

        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((cards) => cards.map((c) => 
                    c._id === card._id ? newCard : c
                ))
            })
            .catch(err => console.log(err));
    }
    function handleCardDelete(card){
        api.deleteCard(card)
        .then(() => {setCards(cards.filter(item => item !== card))})
        .catch((err) => console.log(err))
    }
    function handleAddPlace(title, url){
        api.postCard({title, url})
            .then(res =>{
                setCards([res, ...cards])
            })
    }
    
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <CardsContext.Provider value={cards}>
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onCardTrashClick={handleConfirmClick} />
            </CardsContext.Provider>
            <Footer />
            <ImagePopup isOpen={isImagePopupOpen} selectedCard={selectedCard} onClose={closeAllPopups} />
            {/* <PopupWithForm name="place" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input type="text" name="name" required minLength="2" maxLength="40" className="popup__field popup__field_type_name" placeholder="Название" />
                <span className="popup__error popup__error_name_name" />
                <input type="text" name="info" required minLength="2" maxLength="200" className="popup__field popup__field_type_link" placeholder="Ссылка на картинку" />
                <span className="popup__error popup__error_name_info"></span>
            </PopupWithForm> */}
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlace} onClose={closeAllPopups} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar} onClose={closeAllPopups} />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser} onClose={closeAllPopups} />
                
            <PopupConfirm isOpen={isConfirmPopupOpen} onClose={closeAllPopups} title="Вы уверены?" buttonText="Да" />
        </CurrentUserContext.Provider>
    );
}

export default App;
