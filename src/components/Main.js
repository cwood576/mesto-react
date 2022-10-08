
import React from 'react'
import { CardsContext } from '../contexts/CardsContext.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js'
import Card from './Card';

function Main(props) {
    const [cards, setCards] = React.useState([])
    const userInfo = React.useContext(CurrentUserContext)
    const cardsList = React.useContext(CardsContext)

    
    React.useEffect(() => {
        setCards(cardsList)
    }, [cardsList])

    function handleCardLike(card) {        
        props.onCardLike(card)
    } 
    
    function handleCardDelete(card){
        props.onCardDelete(card)
    }
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__leftside">
                    <div className="profile__image" style={{backgroundImage: `url(${userInfo.avatar})`}} onClick={props.onEditAvatar}></div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
                        <p className="profile__status ">{userInfo.about}</p>
                    </div>
                </div>  
                <button type="button" className="profile__add" onClick={props.onAddPlace} ></button>
            </section>
            <section className="cards ">
                {cards.map(card => {
                    return (
                        <Card card={card} key={card._id} onLikeClick={handleCardLike} onCardDelete={handleCardDelete} onCardClick={props.onCardClick} onCardTrashClick={handleCardDelete} />
                    )
                })}
            </section>
        </main >
    );
}

export default Main;
