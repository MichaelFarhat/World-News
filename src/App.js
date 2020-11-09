import React, { useState } from "react";
import "./App.css";
import Body from "./Body";
import Logo from "./Logo";
import Start from "./Start";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang"));
  return (
    <div className="app">
      {!lang ? (
        <Start lang={lang} setLang={setLang} />
      ) : (
        <Body lang={lang} setLang={setLang} />
      )}
    </div>
  );
}

export default App;
