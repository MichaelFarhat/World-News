import React from "react";
import LanguageIcon from "@material-ui/icons/Language";

function Logo({ classname }) {
  return (
    <div className={classname}>
      <LanguageIcon />
      <p>WORLD NEWS</p>
    </div>
  );
}

export default Logo;
