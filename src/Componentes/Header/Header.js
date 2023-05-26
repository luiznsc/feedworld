import './Header.css'
import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Header() {    
  const [showMenu, setShowMenu] = useState(false);
  const itemmenu1 = "Dúvidas?";
  const itemmenu3 = "Notícias";

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }


  return (
    <header>
      <Link to={"/"}><img id="logo" src="./img/FeedWorld.png" alt="img logo"></img></Link>
      
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li><Link to={"/user"}>{itemmenu1}</Link></li>
        <li><Link to={"/"}>{itemmenu3}</Link></li>
      </ul>
    </header>
  );
}