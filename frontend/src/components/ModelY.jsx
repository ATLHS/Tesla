import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ModelDescription from './layout/ModelDescription';
import modelYDesktop from '../images/modelYDesktop.jpg';
import modelYMobile from '../images/modelYMobile.jpg';
import InfoContainer from './layout/InfoContainer';

const ModelY = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? modelYDesktop : modelYMobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <img className="h-100 w-100 mediaSection-1" src={mediaSection_1} alt="modely"/>
                <InfoContainer color="text-white" headline="Model Y" />
                <ModelDescription color="text-white" technical1="66 cu fc" info1="Cargo Space" technical2="315mi" info2="Range (EPA est.)" technical3="AWD" info3="Dual Motor" cta="ORDER NOW" />
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default ModelY;