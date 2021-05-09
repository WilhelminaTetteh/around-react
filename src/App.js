import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="page__container">
      <header className="header">
        <img
          className="logo"
          src="<%=require('./images/logo.svg')%>"
          alt="logo"
        />
      </header>
      <main className="main">
        <section className="profile">
          <div className="avatar">
            <img
              src="<%=require('./images/jaques.jpg')%>"
              alt="image of a man with a red beanie"
              className="profile__image"
            />
            <div className="avatar__overlay"></div>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">Costeau</h1>
              <button
                className="profile__edit"
                type="button"
                aria-label="edit button"
              >
                <img
                  className="profile__edit-icon"
                  src="<%=require('./images/pencil.svg')%>"
                  alt="pencil icon"
                />
              </button>
            </div>
            <p className="profile__description">Explorer</p>
          </div>
          <button className="profile__add" type="button" aria-label="add">
            <img
              className="profile__add-icon"
              src="<%=require('./images/add.svg')%>"
              alt="plus sign"
            />
          </button>
        </section>
        <section className="grid">
          <ul className="grid__container"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Around The U.S.</p>
      </footer>
      <div className="modal modal_type_edit-profile">
        <div className="modal__container">
          <button
            className="modal__button"
            type="button"
            aria-label="modal button"
          ></button>
          <form action="#" className="form" method="POST" name="profile-form">
            <h2 className="form__heading">Edit profile</h2>
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
            <button className="form__button form__button-save" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      {/* <main className="main">
        <section className="profile">
          <div className="avatar">
          <img src= "<%=require('./images/jaques.jpg')%>" alt="image of a man with a red beanie" className="profile__image"/>
          <div className="avatar__overlay">
          </div>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title"></h1>
              <button className="profile__edit" type="button" aria-label="edit button">
                <img className="profile__edit-icon" src= "<%=require('./images/pencil.svg')%>" alt="pencil icon"/>
              </button>
            </div>
            <p className="profile__description"></p>
          </div>
          <button className="profile__add" type="button" aria-label="add">
            <img className="profile__add-icon" src="<%=require('./images/add.svg')%>" alt="plus sign"/>
          </button>
        </section>
        <section className="grid">
          <ul className="grid__container"></ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Around The U.S.</p>
      </footer>
      <div className="modal modal_type_edit-profile">
        <div className="modal__container">
          <button className="modal__button" type="button" aria-label="modal button">
          </button>
          <form action="#" className="form" method="POST" name="profile-form">
            <h2 className="form__heading">Edit profile</h2>

            <label for="#" className="form__lable">
            <input id="profile-name" type="text" placeholder="Name" className="form__input form__input_type_title" name="title" required maxlength="40" minlength="2">
            <span id="profile-name-error" className="form__error"></span>
            </label>

            <label for="#" className="form__lable">
            <input id="profile-text" type="text" placeholder="About me" className="form__input form__input_type_description" name="description" required maxlength="200" minlength="2"> 
            <span id="profile-text-error" className="form__error"></span>
            </label>

            <button className="form__button form__button-save" type="submit">Save</button>
          </form>
        </div>
      </div>
      <div className="modal modal_type_add-card">
        <div className="modal__container">
          <button className="modal__button modal__add-button" type="button" aria-label="modal button">
          </button>
          <form action="#" className="form form_type_card" method="POST" name="card-form">
            <h2 className="form__heading">New place</h2>

          <label for="#" className="form__lable">
            <input id="card-title" type="text" placeholder="Title" className="form__input form__input_type_card-title" name="name" minlength="1" maxlength="30" required>
            <span id="card-title-error"  className="form__error"></span>
          </label>

          <label for="#" className="form__lable">
            <input id="card-url" type="url" placeholder="Image link" className="form__input form__input_type_url" name="link" required>
            <span id="card-url-error" className="form__error"></span> 
          </label>
            <button className="form__button"  type="submit" disabled>Create</button>
          </form>
        </div>
      </div>
  
      <div className="modal modal_type_avatar">
        <div className="modal__container">
          <button className="modal__button modal__add-button" type="button" aria-label="modal button">
          </button>
          <form action="#" className="form form_type_avatar" method="POST" name="avatar-form">
            <h2 className="form__heading-avatar">Change profile picture</h2>

          <label for="#" className="form__lable">
            <input id="avatar-url" type="url" placeholder="Image link" className="form__input form__input_type_url form__input_type_avatar-url" name="link" required>
            <span id="avatar-url-error" className="form__error"></span> 
          </label>
            <button className="form__button"  type="submit" disabled>Save</button>
          </form>
        </div>
      </div>
      

<div className="modal modal_type_delete">
  <div className="modal__container">
    <button className="modal__button modal__add-button" type="button" aria-label="modal button">
    </button>
    <form action="#" className="form form_type_card"  name="delete-confirmation">
      <h2 className="form__heading-confirmation">Are you sure?</h2>
      <button type="button" className="form__button form__delete-confirmation">Yes</button>
    </form>
  </div>
</div>


      <div className="modal modal_type_image">
        <button className="modal__button modal__button_type_popup-image" type="button" aria-label="modal button">
        </button>
        <figure className="modal__figure">
          <img className="modal__image" src="//:0" alt="#">
          <figcaption className="modal__image-caption"></figcaption>
        </figure>
      </div> */}
    </div>
  );
}

export default App;
