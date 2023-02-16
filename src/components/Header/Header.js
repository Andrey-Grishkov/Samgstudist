
import "./Header.scss"
import Navigation from "../Navigation/Navigation";
import { useLocation, Link } from "react-router-dom"

import HeaderNav from "../HeaderNav/HeaderNav";
import Logo from "../Logo/Logo";
import {useState} from "react";

const Header = ({ inputRef, setFullScreen, disciplins }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClickOpen () {
    setIsOpen(true)
  }

  function handleClickClose () {
    setIsOpen(false)
  }

  const location = useLocation();
  let about_team;
  location.pathname === "/about-team"
    ? (about_team = true)
    : (about_team = false);

  // const [windowSmallSize, setSmallWindowSize] = useState(window.innerWidth < 320);
  //
  // window.addEventListener('resize', () => {
  //   if (window.innerWidth < 320) {
  //     setSmallWindowSize(true);
  //   } else {
  //     setSmallWindowSize(false);
  //   }});

  return (
    <header className={`header ${about_team ? 'header__team' : ''}`}>
      <Logo flag={true}/>
      <div className='header__line'></div>

      {about_team ? (
        <h1 className="header__title">О команде</h1>
      ) : (
       <HeaderNav
         inputRef={inputRef}
         onClick={handleClickOpen}
       />
      )}
    <Navigation isOpen={isOpen} onClick={handleClickClose} inputRef={inputRef} disciplins={disciplins}/>
    </header>
  );
};

export default Header;
