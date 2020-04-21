import React from 'react';

export const Form = () => {
  return (
    <section className="registration">
      <h2 className="registration__header">Register to get a work</h2>
      <p className="registration__description">
          Attention! After successful registration and
          alert, update the list of users in the block from the top
      </p>
      <form action="POST" className="form">
        <label
          htmlFor="name"
          className="form__label"
        >
          Name
          <input
            className="form__input"
            type="text"
            name="name"
            placeholder="Your name"
          />
        </label>
        <label
          htmlFor="email"
          className="form__label"
        >
          Email
          <input
            className="form__input"
            type="text"
            name="email"
            placeholder="Your email"
          />
        </label>
        <label
          htmlFor="phone"
          className="form__label"
        >
          Phone number
          <input
            className="form__input"
            type="text"
            name="phone"
            placeholder="+380 XX XXX XX XX"
          />
          <span className="form__span">Еnter phone number in open format</span>
        </label>
        <p className="form__p">Choose your position</p>
        <label htmlFor="front" className="form__radio">
          <input
            type="radio"
            id="front"
            name="position"
            value="front"
          />
          Frontend developer
          <span className="form__checkmark" />
        </label>
        <label htmlFor="back" className="form__radio">
          <input
            type="radio"
            id="back"
            name="position"
            value="back"
          />
          Backend developer
          <span className="form__checkmark" />
        </label>
        <label htmlFor="designer" className="form__radio">
          <input
            type="radio"
            id="designer"
            name="position"
            value="designer"
          />
          Designer
          <span className="form__checkmark" />
        </label>

        <label htmlFor="qa" className="form__radio">
          <input
            type="radio"
            id="qa"
            name="position"
            value="qa"
          />
          QA
          <span className="form__checkmark" />
        </label>
        <label htmlFor="photo" className="form__label">
            Photo
          <input type="file" className="form__input-photo" />
        </label>

      </form>
    </section>
  );
};
