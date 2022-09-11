
import React from 'react'
import '../index.css';
// import App from './App';
import { api } from '../utils/Api.js'
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = React.useState(false)
    const [userDescription, setUserDescription] = React.useState(false)
    const [userAvatar, setUserAvatar] = React.useState(false)
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getProfileInfo()
            .then(res => {
                setUserName(res.name)
                setUserDescription(res.about)
                setUserAvatar(res.avatar)
            })
        api.getInitialCards()
            .then(res => {
                console.log(res)
                setCards(res)
            })
    }, [])

    return (
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__leftside">
                        <div className="profile__image" style={{ backgroundImage: `url(${userAvatar})` }} onClick={props.onEditAvatar}></div>
                        <div className="profile__info">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit" onClick={props.onEditProfile}></button>
                            <p className="profile__status ">{userDescription}</p>
                        </div>
                    </div>
                    <button type="button" className="profile__add" onClick={props.onAddPlace} ></button>
                </section>
                <section className="cards ">
                    {cards.map(card => {
                        return (
                            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                        )
                    })}
                </section>
            </main >
        </>
    );
}

export default Main;
