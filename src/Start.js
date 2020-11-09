import React from "react";
import "./Start.css";
import LanguageIcon from "@material-ui/icons/Language";
import Language from "./Lnaguage";
import Logo from "./Logo";

function Start({ lang, setLang }) {
  const chooseLang = (event) => {
    event.target.parentNode.classList.contains("language")
      ? setLang(event.target.parentNode.getAttribute("name"))
      : setLang(event.target.getAttribute("name"));
    localStorage.setItem(
      "lang",
      event.target.getAttribute("name") ||
        event.target.parentNode.getAttribute("name")
    );
  };

  const showDescription = () => {
    const description = document.querySelector(".start__info");
    description.classList.toggle("active");
  };

  return (
    <div className="start">
      <Logo classname="logo" />
      <span className="start__describtion" onClick={showDescription}>
        ?
      </span>
      <h2>Pick A Language</h2>
      <div className="start__languages" onClick={chooseLang}>
        <Language
          name="de"
          alt="Deutsch"
          text="Detsch"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
        />
        <Language
          name="en"
          alt="English"
          text="English"
          image="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/383px-Flag_of_the_United_Kingdom.svg.png"
        />
        <Language
          name="ar"
          alt="العربية"
          text="العربية"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1024px-Flag_of_Syria.svg.png"
        />
      </div>
      <div className="start__info">
        <p>
          <span className="start__infoWarning">When</span> you pick a language,
          we will display all the content for you in that language. The content
          in one language will be different from the one in another language. We
          get our resources from different places in the world. Every single
          recourse provides its content in one specific language. We are working
          on a system that provides most of the spoken languages today. But at
          this moment, only the languages shown above are included.
        </p>
      </div>
    </div>
  );
}

export default Start;
