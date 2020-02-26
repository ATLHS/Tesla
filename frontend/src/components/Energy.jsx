import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ModelDescription from './layout/ModelDescription';
import energyDesktop from '../images/energyDesktop.jpg';
import energyMobile from '../images/energyMobile.jpg';
import InfoContainer from './layout/InfoContainer';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faSolarPanel as solarPanel, faChargingStation as chargingStation  } from '@fortawesome/free-solid-svg-icons';


const Energy = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? energyDesktop : energyMobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <img className="h-100 w-100 mediaSection-1" src={mediaSection_1} alt="Energy"/>
                <InfoContainer color="text-white" headline="Power Everything" /> 
                <ModelDescription color="text-white" technical1={<FontAwesomeIcon className="text-white" icon={chargingStation} size="sm" />} info1="Convert Sunlight into Energy" technical2={<FontAwesomeIcon className="text-white mt-2 mb-2" icon={solarPanel} size="sm" />} info2="Store Energy with Powerwall" technical3="24/7" info3="Access Backup Power Anytime" cta="EXISTING INVENTORY" />
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Energy;