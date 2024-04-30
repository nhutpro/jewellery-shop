import React from "react";
import NavItem from "./NavItem/NabItem";
import "./Header.scss";
import SearchBar from "./SearchBar";
import FunctionalIcons from "./FunctionalIcons/FunctionalIcons";

function Header() {
  return (
    <header>
      {/* <div className="header__logo">
        <Icon source="logo--light.svg" title="logo" />
      </div> */}
      <div className="mx-auto w-4/5 flex">
        <nav className="header__nav">
          <NavItem path="/Shop" title="Shop" />
          <NavItem path="/OnSale" title="OnSale" />
          <NavItem path="/NewArival" title="New arrivals" />
        </nav>
        <div className="header__search-bar">
          <SearchBar />
        </div>
        <div className="header__functional-icons">
          <FunctionalIcons />
        </div>
      </div>
    </header>
  );
}

export default Header;
