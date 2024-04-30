import React from "react";
import Icon, { ICON } from "../Icon";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-container flex justify-center">
      <div className="footer-main w-4/5 grid grid-cols-4 gap-4">
        <div className="footer__about">
          <div className="about__icon">
            <Icon source={ICON.FACEBOOK}></Icon>
          </div>
          <div className="about__slogan "></div>
          <div className="about__icon-list flex gap-4">
            <div className="icon-container">
              <Icon source={ICON.FACEBOOK}></Icon>
            </div>
            <div className="icon-container">
              <Icon source={ICON.INSTAGRAM}></Icon>
            </div>
            <div className="icon-container">
              <Icon source={ICON.SHOPPE}></Icon>
            </div>
          </div>
        </div>
        <div className="footer__help">
          <h2>HELP</h2>
        </div>
        <div className="footer__contact">
          <h2>CONTACT</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
