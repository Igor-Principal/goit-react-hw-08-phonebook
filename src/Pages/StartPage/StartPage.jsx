import React from 'react';
import css from './startPage.module.css';

function StartPage() {
  return (
    <div className={`'container' ${css.hero}`}>
      <h1 className={css.title}>
        Welcome! <br />
        Our site can help you with contacts! <br />
        We remember everything you need!
        <br />
      </h1>
      
    </div>
  );
}

export default StartPage;
