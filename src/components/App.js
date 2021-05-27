import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  // State variable and setters
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //handlers for opening modals
  function handleEditAvatarClick() {
    // console.log("The Avatar was clicked.");
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    // console.log("The Profile was clicked.");
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    // console.log("The Place button  was clicked.");
    setIsAddPlacePopupOpen(true);
  }
  //Image Popup
  function handleCardClick({ name, link }) {
    setSelectedCard({ name, link });
    setIsImagePopupOpen(true);
  }
  //close modals
  function closeAllPopups() {
    // console.log("Popup was closed");
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }
  //Handle User Update
  function handleUpdateUser({ name, about }) {
    api
      .updateUserInfo({ name, about })
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <div className="page__container">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />

          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          {/* <PopupWithForm
            name={`edit-profile`}
            title={`Edit profile`}
            buttonText={`Save`}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__lable">
              <input
                id="profile-name"
                type="text"
                placeholder="Name"
                className="form__input form__input_type_title"
                name="title"
              />
              <span id="profile-name-error" className="form__error"></span>
            </label>
            <label className="form__lable">
              <input
                id="profile-text"
                type="text"
                placeholder="About me"
                className="form__input form__input_type_description"
                name="description"
              />
              <span id="profile-text-error" className="form__error"></span>
            </label>
          </PopupWithForm> */}

          <PopupWithForm
            name={`add-card`}
            title={`New place`}
            buttonText={`Create`}
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__lable">
              <input
                id="card-title"
                type="text"
                placeholder="Title"
                className="form__input form__input_type_card-title"
                name="name"
              />
              <span id="card-title-error" className="form__error"></span>
            </label>

            <label className="form__lable">
              <input
                id="card-url"
                type="url"
                placeholder="Image link"
                className="form__input form__input_type_url"
                name="link"
              />
              <span id="card-url-error" className="form__error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            name={`avatar`}
            title={`Change profile picture`}
            buttonText={`Save`}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="form__lable">
              <input
                id="avatar-url"
                type="url"
                placeholder="Image link"
                className="form__input form__input_type_url form__input_type_avatar-url"
                name="link"
              />
              <span id="avatar-url-error" className="form__error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm name={`delete`} title={`Are you sure?`}>
            <button
              type="button"
              className="form__button form__delete-confirmation"
            >
              Yes
            </button>
          </PopupWithForm>

          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            isOpen={isImagePopupOpen}
          />
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
