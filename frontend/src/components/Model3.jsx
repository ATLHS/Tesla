import React from 'react';
import ModelDescription from './layout/ModelDescription';
import model3Desktop from '../images/model3Desktop.jpg';
import model3Mobile from '../images/model3Mobile.jpg';
import InfoContainer from './layout/InfoContainer';
import '../css/energy.css';

const Model3 = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
                <img className="w-100 h-100 models" src={window.innerWidth > props.breakpoint ? model3Desktop : model3Mobile } alt="model3"/>
            </div>
            <InfoContainer color="text-white" headline="Model 3" /> 
            <ModelDescription color="text-white" technical1="3.2s" info1="From 0-60 mph" technical2="322mi" info2="Range" technical3="AWD" info3="Dual Motor" cta="ORDER NOW" />
        </div>
    );
}

export default Model3;