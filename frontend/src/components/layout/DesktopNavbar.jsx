import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../../css/navbar.css';

const DesktopNavbar = (props) => { 
    // const [linkColor, setlinkColor] = useState("text-white");

    // Contact link
    const contactLink = <Link style={{color: props.linkColor  }} className={`nav-link`} to="/contact" onClick={props.blackNavItem}>CONTACT</Link>;
    // faBars fontawesome
    const faBarsLink = <FontAwesomeIcon style={{color: props.linkColor  }} className="nav-link burger" icon={faBars} size="sm" onClick={props.enableMobileMenu}/>;
    const button = window.innerWidth > props.breakpoint ? contactLink : faBarsLink;

    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent w-100">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <ul className="navbar-nav">
                   <li className="nav-item">
                        <Link to="/" onClick={props.whiteNavItem}>
                            <Logo width="100" height="24" fill={props.linkColor}  path="M0 .1a9.7 9.7 0 007 6.93h10.93l.56.22v27.58h6.82V7.29l.62-.22h10.94a9.82 9.82 0 007-6.93V.07H0V.1zM238.61.06h-6.8v34.85h31.14a9.68 9.68 0 005.94-6.86h-30.3l.02-27.99zm-52.33 6.86c3.62-1 6.66-3.82 7.39-6.88l-38.1.06v20.55h31.17v7.23h-24.46a13.6 13.6 0 00-8.71 7h39.89V13.81H162.3V6.92h23.98zm116.17 27.97h6.76V20.87h24.58v14.02h6.75V13.87l-38.09-.04zM85.35 7h26a9.57 9.57 0 007.05-7H78.3a9.61 9.61 0 007.05 7zm0 13.77h26a9.59 9.59 0 007.05-7H78.3a9.63 9.63 0 007.05 7zm0 14.14h26a9.59 9.59 0 007.05-7H78.3a9.62 9.62 0 007.05 7zM308.46 7.02h26a9.58 9.58 0 007.06-7h-40.11a9.59 9.59 0 007.05 7z"/>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav desktopNav">
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/models" onClick={props.whiteNavItem}>MODEL S</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/model3" onClick={props.whiteNavItem}>MODEL 3</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/modelx" onClick={props.whiteNavItem}>MODEL X</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/modely" onClick={props.whiteNavItem}>MODEL Y</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/cybertruk" onClick={props.whiteNavItem}>CYBERTRUCK</Link>
                    </li>
                    <li className="nav-item" >
                    <Link style={{color: props.linkColor }} className="nav-link" to="/roadster" onClick={props.blackNavItem}>ROADSTER</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color: props.linkColor }} className="nav-link" to="/energy" onClick={props.whiteNavItem}>ENERGY</Link>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* contactLink or faBarsLink L15 */}
                        {button}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default DesktopNavbar;