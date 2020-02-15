import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../css/mobileNavbar.css';

const MobileNavbar = (props) => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white w-75 h-100 position-absolute" style={{zIndex: 1500, marginLeft: props.mobileNavStatut ? '25%' : '100%'}}>
            <div className="collapse navbar-collapse d-flex justify-content-left w-100 h-100 flex-column">
                <ul className="navbar-nav w-100 h-75 h-75 d-flex justify-content-between">
                    <li className="nav-item d-flex justify-content-between align-items-center">
                        <Link className="nav-link" to="/" onClick={props.whiteNavItem}>
                            <Logo width="100" height="24" fill={props.linkColor} path="M0 .1a9.7 9.7 0 007 6.93h10.93l.56.22v27.58h6.82V7.29l.62-.22h10.94a9.82 9.82 0 007-6.93V.07H0V.1zM238.61.06h-6.8v34.85h31.14a9.68 9.68 0 005.94-6.86h-30.3l.02-27.99zm-52.33 6.86c3.62-1 6.66-3.82 7.39-6.88l-38.1.06v20.55h31.17v7.23h-24.46a13.6 13.6 0 00-8.71 7h39.89V13.81H162.3V6.92h23.98zm116.17 27.97h6.76V20.87h24.58v14.02h6.75V13.87l-38.09-.04zM85.35 7h26a9.57 9.57 0 007.05-7H78.3a9.61 9.61 0 007.05 7zm0 13.77h26a9.59 9.59 0 007.05-7H78.3a9.63 9.63 0 007.05 7zm0 14.14h26a9.59 9.59 0 007.05-7H78.3a9.62 9.62 0 007.05 7zM308.46 7.02h26a9.58 9.58 0 007.06-7h-40.11a9.59 9.59 0 007.05 7z"/>
                        </Link>
                        <span onClick={props.enableMobileMenu}><FontAwesomeIcon icon={faTimes} size="lg" /></span>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/models">MODEL S</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/model3">MODEL 3</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/modelx">MODEL X</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/modely">MODEL Y</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/cybertruk">CYBERTRUCK</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.blackNavItem} className="nav-link mobile-link text-dark" to="/roadster">ROADSTER</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                    <Link style={{color: props.linkColor }} onClick={props.whiteNavItem} className="nav-link mobile-link text-dark" to="/energy">ENERGY</Link>
                    </li>
                    <li onClick={props.enableMobileMenu} className="nav-item nav-li pt-0">
                        <Link style={{color: props.linkColor }} onClick={props.blackNavItem} className="nav-link mobile-link text-dark" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavbar;