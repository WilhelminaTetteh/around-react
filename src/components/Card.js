function Card(props) {
  // console.log(name);
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <div className="grid__template">
      <li className="grid__item">
        <button
          type="button"
          aria-label="modal button"
          className="grid__delete-icon"
        ></button>
        <div
          className="grid__image"
          style={{ backgroundImage: `url(${props.card.link})` }}
          onClick={ handleClick}
        ></div>
        <div className="grid__caption">
          <p className="grid__text">{props.card.name}</p>
          <div className="grid__like-column">
            <button
              className="grid__icon"
              aria-label="grid icon"
              type="button"
            ></button>
            <p className="grid__likes">{props.card.likes}</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Card;

// pass it on to the Card component through the Main component — in the form of onCardClick props
