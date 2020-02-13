import React from 'react';
import ModelDescription from './layout/ModelDescription';
import energyDesktop from '../images/energyDesktop.jpg';
import energyMobile from '../images/energyMobile.jpg';
import InfoContainer from './layout/InfoContainer';
import '../css/energy.css';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSolarPanel as solarPanel, faChargingStation as chargingStation  } from '@fortawesome/free-solid-svg-icons';


const Energy = (props) => {
    return (
        <div className="row m-0" style={{height: window.innerHeight }}>
            <div className="col-md-12 h-100 p-0" >
                <img className="w-100 h-100 models" src={window.innerWidth > props.breakpoint ? energyDesktop : energyMobile } alt="energy"/>
            </div>
            <InfoContainer color="text-white" headline="Power Everything" /> 
            <ModelDescription color="text-white" technical1={<FontAwesomeIcon className="text-white" icon={chargingStation} size="sm" />} info1="Convert Sunlight into Energy" technical2={<FontAwesomeIcon className="text-white mt-2 mb-2" icon={solarPanel} size="sm" />} info2="Store Energy with Powerwall" technical3="24/7" info3="Access Backup Power Anytime" cta="EXISTING INVENTORY" />
        </div>
    );
}

export default Energy;