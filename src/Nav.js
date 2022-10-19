import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav nav__black">
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix-logo"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="avtar"
        />
      </div>
    </div>
  );
}

export default Nav;
