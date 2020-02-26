import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ModelDescription from './layout/ModelDescription';
import modelSDesktop from '../images/modelSDesktop.jpg';
import modelSMobile from '../images/modelSMobile.jpg';
import InfoContainer from './layout/InfoContainer';

const ModelS = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? modelSDesktop : modelSMobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <img className="h-100 w-100 mediaSection-1" src={mediaSection_1} alt="Model S"/>
                <InfoContainer color="text-dark" headline="Model S" /> 
                <ModelDescription color="text-dark" hrColor="border-dark" technical1="2.4s" info1={"From 0-60 \n mph"} technical2="28 cu ft" info2="Best in class Storage" technical3="373mi" info3="Range (EPA)" cta="ORDER NOW" />
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default ModelS;