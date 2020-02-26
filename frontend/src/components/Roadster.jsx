import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ModelDescription from './layout/ModelDescription';
import roadsterDesktop from '../images/roadsterDesktop.jpg';
import roadsterMobile from '../images/roadsterMobile.jpg';
import InfoContainer from './layout/InfoContainer';
import '../css/roadster.css';

const Roadster = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? roadsterDesktop : roadsterMobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <img className="h-100 w-100 mediaSection-1" src={mediaSection_1} alt="roadster"/>
                <InfoContainer color="text-dark" headline="Roadster" /> 
                <div className="row w-100 position-absolute m-auto roadsterInfo">
                    <div className="col-md-4 m-auto">
                        <p className="text-white text-center">​The quickest car in the world, with record-setting acceleration, range and performance.</p>
                    </div>
                </div>
                <ModelDescription color="text-white" technical1="1.9s" info1="0-60 mph" technical2="+250mph" info2="Top Speed" technical3="620mi" info3="Range" cta="RESERVE NOW" />
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Roadster;