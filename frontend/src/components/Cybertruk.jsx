import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import cybertruckDesktop from '../images/cybertruckDesktop.jpg';
import cybertruckMobile from '../images/cybertruckMobile.jpg';
import cybertruckSvg from '../images/cybertruck.svg';
import '../css/cybertruck.css';

const Cybertruck = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? cybertruckDesktop : cybertruckMobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <div className="row w-100 position-absolute m-auto cybertruckInfo">
                    <div className="col-md-12 text-center">
                        <p className="text-center text-white">BETTER UTILITY THAN A TRUCK {window.innerWidth > props.breakpoint && "\n"} WITH MORE PERFORMANCE THAN {window.innerWidth > props.breakpoint && "\n"} A SPORTS CAR</p>
                    </div>
                    <div className="col-sm-5 col-md-2 d-flex justify-content-center align-items-center pr-4 pl-4 m-auto">
                        <button className="w-100 rounded-0 bg-transparent border border-white pl-5 pr-5 mb-5 pt-1 pb-1 text-white cybertruckCta">Order Now</button>
                    </div>
                </div>
                <img className="h-100 w-100 mediaSection-2" src={mediaSection_1} alt="Cybertruck"/>
                <div className="row w-100 position-absolute m-auto infoContainer">
                    <div className="col-md-12 text-center">
                        <img className="d-block m-auto cybertruckSvg" src={cybertruckSvg} alt="cybertruck"/>
                    </div>
                </div>
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Cybertruck;