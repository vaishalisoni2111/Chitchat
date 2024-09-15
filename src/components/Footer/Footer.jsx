import React from"react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png"
import Insta from"../Assets/instagram_icon.png"
import pintrest from "../Assets/pintester_icon.png"
import watsapp from"../Assets/whatsapp_icon.png"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src={footerLogo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={Insta}alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={pintrest}alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={watsapp}alt="" />
                </div>
            </div>
            <div className="footer-copyright">
               <hr /> 
               <p>copyright@2024-All Right Are Reserved</p>
            </div>
        </div>
    )
}
export default Footer;