import React from 'react';
import ModelDescription from './layout/ModelDescription';
import modelSDesktop from '../images/modelSDesktop.jpg';
import modelSMobile from '../images/modelSMobile.jpg';
import InfoContainer from './layout/InfoContainer';

const ModelS = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
            <img className="w-100 h-100 models" src={window.innerWidth > props.breakpoint ? modelSDesktop : modelSMobile } alt="models"/>
            </div>
            <InfoContainer color="text-dark" headline="Model S" /> 
            <ModelDescription color="text-dark" hrColor="border-dark" technical1="2.4s" info1={"From 0-60 \n mph"} technical2="28 cu ft" info2="Best in class Storage" technical3="373mi" info3="Range
(EPA)" cta="ORDER NOW" />
        </div>
    );
}

export default ModelS;