import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Body.css";
import Logo from "./Logo";
import { categories, paths } from "./someData";
import Category from "./Category";

function Body({ lang, setLang }) {
  const changeLanguage = () => {
    localStorage.removeItem("lang");
    setLang(null);
  };

  const showNav = (e) => {
    const nav = document.querySelector(".body__topNav");
    nav.classList.toggle("shown");
  };
  const makeActive = (e) => {
    const topNavOptions = document.querySelectorAll(".body__topNavOption");
    topNavOptions.forEach((element) =>
      element.classList.remove("body__topNavOption--active")
    );
    e.target.classList.add("body__topNavOption--active");

    let hide = document.querySelector(".shown");
    if (hide) {
      setTimeout(() => {
        hide.classList.remove("shown");
      }, 400);
    }
  };

  return (
    <Router>
      <div className="body">
        <Logo classname="body__logo" />
        <span className="body__topNavExpand" onClick={showNav}>
          &#9776;
        </span>
        <div className="body__topNav">
          <Link to="home" className="body__topNavLogo">
            <Logo classname="logo" />
          </Link>
          <span className="body__topNavLang" onClick={changeLanguage}>
            {lang.toUpperCase()}
          </span>
          {categories
            .filter((category) => category.language === lang)[0]
            .categories.map((category, index) => {
              let to = [...paths];
              if (lang === "ar") to = to.reverse();
              return (
                <Link
                  onClick={makeActive}
                  key={category}
                  className={`body__topNavOption${
                    index === 0 ? " body__topNavOption--active" : ""
                  }`}
                  to={`${to[index]}`}
                >
                  {category.toUpperCase()}
                </Link>
              );
            })}
        </div>
        <div className="body__categories">
          <Switch>
            <Route path="/entertainment">
              <Category lang={lang} category="entertainment" />
            </Route>
            <Route path="/technology">
              <Category lang={lang} category="technology" />
            </Route>
            <Route path="/science">
              <Category lang={lang} category="science" />
            </Route>
            <Route path="/health">
              <Category lang={lang} category="health" />
            </Route>
            <Route path="/business">
              <Category lang={lang} category="business" />
            </Route>
            <Route path="/sport">
              <Category lang={lang} category="sports" />
            </Route>
            <Route path="/home">
              <Category lang={lang} category="general" />
            </Route>
            <Route path="/">
              <Category lang={lang} category="general" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Body;
