import "./App.scss";
import { useState, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutProject from "../AboutProject/AboutProject";
import AboutTeam from "../AboutTeam/AboutTeam";
import Footer from "../Footer/Footer";

function App() {
  const location = useLocation();
  const [fullScreen, setFullScreen] = useState(false);
  const inputRef = useRef(null);
  const inputFocus = () => inputRef.current.focus();

  return (
    <div className={`page ${fullScreen ? "page_fullScreened" : ""}`}>
      <Header setFullScreen={setFullScreen} inputRef={inputRef} />
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route
          path="/about-project"
          element={<AboutProject inputFocus={inputFocus} />}
        ></Route>
        <Route path="/about-team" element={<AboutTeam />}></Route>
      </Routes>
      {location.pathname !== "/about-team" && <Footer />}
    </div>
  );
}

export default App;
