import React from "react"
import { CurrentUserContext } from "../contexts/CurrentUserContext.js"
import Card from "./Card"

function Main(props) {
    const userInfo = React.useContext(CurrentUserContext)

    function handleCardLike(card) {
        props.onCardLike(card)
    }

    function handleCardDelete(card) {
        props.onCardDelete(card)
    }
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__leftside">
                    <div
                        className="profile__image"
                        style={{ backgroundImage: `url(${userInfo.avatar})` }}
                        onClick={props.onEditAvatar}
                    ></div>
                    <div className="profile__info">
                        <h1 className="profile__name">{userInfo.name}</h1>
                        <button
                            type="button"
                            className="profile__edit"
                            onClick={props.onEditProfile}
                        />
                        <p className="profile__status ">{userInfo.about}</p>
                    </div>
                </div>
                <button
                    type="button"
                    className="profile__add"
                    onClick={props.onAddPlace}
                />
            </section>
            <section className="cards ">
                {props.cards.map((card) => {
                    return (
                        <Card
                            card={card}
                            key={card._id}
                            onLikeClick={handleCardLike}
                            onCardDelete={handleCardDelete}
                            onCardClick={props.onCardClick}
                            onCardTrashClick={handleCardDelete}
                        />
                    )
                })}
            </section>
        </main>
    )
}

export default Main
