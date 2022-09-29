import React from "react";

function Header() {
  return (
    <header>
      <div className="row">
        <div>
          <img
            src="https://schertzanimalhospital.com/wp-content/uploads/2018/01/Schertz_iStock-657331484-1024x629.jpg"
            alt="kitten"
          />
        </div>
        <h1 className="title">CATS-LAND</h1>
      </div>
      <div>
        <p id="alert-msg">Some Alert</p>
      </div>
    </header>
  );
}

export default Header;
