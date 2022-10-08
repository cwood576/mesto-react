export class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
            .then(res => {
                return this._getResponseData(res)
            })
    }

    postCard({title, url}) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers, method: 'POST', body: JSON.stringify({
                name: `${title}`,
                link: `${url}`
            })
        })
            .then(res => {
                return this._getResponseData(res)
            })
    }
    deleteCard(card) {
        return fetch(`${this._baseUrl}/cards/${card._id}`, { headers: this._headers, method: 'DELETE' })
            .then(res => {
                return this._getResponseData(res)
            })
    }
    updateProfileInfo({ name, description }) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers, 'Content-Type': 'application/json', method: 'PATCH', body: JSON.stringify({
                name: `${name}`,
                about: `${description}`
            })
        })
            .then(res => {
                return this._getResponseData(res)
            })
    }

    updateAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers, 'Content-Type': 'application/json', method: 'PATCH', body: JSON.stringify({
                avatar: `${avatar}`
            })
        })
            .then(res => {
                return this._getResponseData(res)
            })
    }

    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
            .then(res => {
                return this._getResponseData(res)
            })
    }
    changeLikeCardStatus(id, isLiked){
        return fetch(`${this._baseUrl}/cards/${id}/likes`, { headers: this._headers, method: `${!isLiked? "PUT" : "DELETE"}`})
            .then((res) => {
                return this._getResponseData(res)
            })
    }
}
const serverInfo = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-48',
    headers: {
        authorization: 'dde53268-5da2-46cf-9f65-0b885266f0d8',
        'Content-Type': 'application/json'
    }
}
export const api = new Api(serverInfo);
