import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import ModelDescription from './layout/ModelDescription';
import model3Desktop from '../images/model3Desktop.jpg';
import model3Mobile from '../images/model3Mobile.jpg';
import InfoContainer from './layout/InfoContainer';

const Model3 = (props) => {
    const mediaSection_1 = window.innerWidth > props.breakpoint ? model3Desktop : model3Mobile;
    return ( 
    <ReactFullpage
    scrollingSpeed = {1000}
    render={() => {
    return (
        <ReactFullpage.Wrapper>
        <>
            {/* Section 1 */}
            <div className="section homeSection1">
                <img className="h-100 w-100 mediaSection-1" src={mediaSection_1} alt="modely"/><InfoContainer color="text-white" headline="Model 3" /> 
                <InfoContainer color="text-white" headline="Model 3" /> 
                <ModelDescription color="text-white" technical1="3.2s" info1="From 0-60 mph" technical2="322mi" info2="Range" technical3="AWD" info3="Dual Motor" cta="ORDER NOW" />
            </div>
        </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Model3;