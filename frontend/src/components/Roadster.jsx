import React from 'react';
import ModelDescription from './layout/ModelDescription';
import roadsterDesktop from '../images/roadsterDesktop.jpg';
import roadsterMobile from '../images/roadsterMobile.jpg';
import InfoContainer from './layout/InfoContainer';
import '../css/roadster.css';

const Roadster = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
            <img className="w-100 h-100 models" src={window.innerWidth > props.breakpoint ? roadsterDesktop : roadsterMobile } alt="roadster"/>
            </div>
            <InfoContainer color="text-dark" headline="Roadster" /> 
            <div className="row w-100 position-absolute m-auto roadsterInfo">
                <div className="col-md-4 m-auto">
                    <p className="text-white text-center">​The quickest car in the world, with record-setting acceleration, range and performance.</p>
                </div>
            </div>
            <ModelDescription color="text-white" technical1="1.9s" info1="0-60 mph" technical2="+250mph" info2="Top Speed" technical3="620mi" info3="Range" cta="RESERVE NOW" />
        </div>
    );
}

export default Roadster;