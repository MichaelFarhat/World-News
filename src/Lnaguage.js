import React from "react";
import "./Language.css";

function Lnaguage({ name, image, text, alt }) {
  return (
    <div className="language" name={name}>
      <img src={image} alt={alt} />
      <p>{text}</p>
    </div>
  );
}

export default Lnaguage;
