import React from 'react';
import { Link } from "react-router-dom";
import {useSpring, animated} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../css/mobileNavbar.css';

const MobileNavbar = (props) => {
    const mobilMenuSpring = useSpring({transform: 'translateX(35%)', from: {zIndex: 1500, transform: 'translateX(100%)'}});
    return (
        <animated.nav className="navbar navbar-expand-lg navbar-light bg-white shadow w-75 h-100 position-fixed mobileNav" style={props.mobileNavStatut && mobilMenuSpring}>
            <div className="collapse navbar-collapse d-flex justify-content-left w-100 h-100 flex-column">
                <ul className="navbar-nav w-100 h-75 h-75 d-flex justify-content-between">
                    <li className="nav-item text-right">
                        <span onClick={props.enableMobileMenu} className="mobile-link"><FontAwesomeIcon icon={faTimes} size="lg" /></span>
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
        </animated.nav>
    );
}

export default MobileNavbar;