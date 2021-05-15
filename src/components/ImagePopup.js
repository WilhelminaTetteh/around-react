function ImagePopup (props){
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? "modal_open" : ""
      }`}
    >
      <button
        className="modal__button modal__button_type_popup-image"
        type="button"
        aria-label="modal button"
        onClick={props.onClose}
      ></button>
      <figure className="modal__figure">
    {/* select card prop */}
        <img className="modal__image" src={props.card.link} alt="#" />
        <figcaption className="modal__image-caption">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}
 
export default ImagePopup;