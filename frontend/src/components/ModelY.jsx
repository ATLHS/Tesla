import React from 'react';
import ModelDescription from './layout/ModelDescription';
import modelYDesktop from '../images/modelYDesktop.jpg';
import modelYMobile from '../images/modelYMobile.jpg';
import InfoContainer from './layout/InfoContainer';

const ModelY = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
            <img className="w-100 h-100 models" src={window.innerWidth > props.breakpoint ? modelYDesktop : modelYMobile } alt="modely"/>
            </div>
            <InfoContainer color="text-white" headline="Model Y" /> 
            <ModelDescription color="text-white" technical1="66 cu fc" info1="Cargo Space" technical2="315mi" info2="Range (EPA est.)" technical3="AWD" info3="Dual Motor" cta="ORDER NOW" />
        </div>
    );
}

export default ModelY;