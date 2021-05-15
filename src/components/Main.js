import pencil from "../images/pencil.svg";
import add from "../images/add.svg";
import { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  //render data with effect hook>> After receiving the response, set the received data in the corresponding state variables.
  useEffect(() => {
    api.getInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  // handle error
  }, []);

  //render initial cards
  useEffect(() => {
    api.getCardList().then((res) => {
      const cards = res.map((card) => ({
        id: card._id,
        name: card.name,
        link: card.link,
        likes: card.likes.length,
      }));
      console.log(res);
      setCards(cards);
    });
  // handle error
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="avatar" onClick={props.onEditAvatarClick}>
          <img
            src={userAvatar}
            alt="girl with an afro"
            className="profile__image"
          />
          <div className="avatar__overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__title-container">
            <h1 className="profile__title">{userName}</h1>
            <button
              onClick={props.onEditProfileClick}
              className="profile__edit"
              type="button"
              aria-label="edit button"
            >
              <img
                className="profile__edit-icon"
                src={pencil}
                alt="pencil icon"
              />
            </button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button
          className="profile__add"
          type="button"
          aria-label="add"
          onClick={props.onAddPlaceClick}
        >
          <img className="profile__add-icon" src={add} alt="plus sign" />
        </button>
      </section>
      <section className="grid">
        <ul className="grid__container">
          {cards.map((card, id) => {
            return <Card key={id} card={card} onCardClick={props.onCardClick}/>;
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
