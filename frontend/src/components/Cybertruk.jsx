import React from 'react';
import cybertruckDesktop from '../images/cybertruckDesktop.jpg';
import cybertruckMobile from '../images/cybertruckMobile.jpg';
import cybertruckSvg from '../images/cybertruck.svg';
import '../css/cybertruck.css';

const Cybertruck = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
                <img className="w-100 h-100 mediaSection-1" src={window.innerWidth > props.breakpoint ? cybertruckDesktop : cybertruckMobile } alt="cybertruck"/>
            </div>
            <div className="row w-100 position-absolute m-auto infoContainer">
                <div className="col-md-12 text-center">
                    <img className="d-block m-auto cybertruckSvg" src={cybertruckSvg} alt="cybertruck"/>
                </div>
            </div>
            <div className="row w-100 position-absolute m-auto cybertruckInfo">
                <div className="col-md-12 text-center">
                    <p className="text-center text-white">BETTER UTILITY THAN A TRUCK {window.innerWidth > props.breakpoint && "\n"} WITH MORE PERFORMANCE THAN {window.innerWidth > props.breakpoint && "\n"} A SPORTS CAR</p>
                </div>
                <div className="col-sm-5 col-md-2 d-flex justify-content-center align-items-center pr-4 pl-4 m-auto">
                    <button className="w-100 rounded-0 bg-transparent border border-white pl-5 pr-5 mb-5 pt-1 pb-1 text-white cybertruckCta">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Cybertruck;