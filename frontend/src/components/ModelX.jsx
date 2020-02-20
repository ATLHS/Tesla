import React from 'react';
import ModelDescription from './layout/ModelDescription';
import modelXDesktop from '../videos/modelXDesktop.mp4';
import modelXMobile from '../videos/modelXMobile.mp4';
import InfoContainer from './layout/InfoContainer';
import Video from './layout/Video';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../css/modelx.css';

const stars = <div className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon className="star mb-3 mt-3" icon={faStar} size="sm" />
                  <FontAwesomeIcon className="star mb-3 mt-3" icon={faStar} size="sm" />
                  <FontAwesomeIcon className="star mb-3 mt-3" icon={faStar} size="sm" />
                  <FontAwesomeIcon className="star mb-3 mt-3" icon={faStar} size="sm" />
                  <FontAwesomeIcon className="star mb-3 mt-3" icon={faStar} size="sm" />
              </div>;

const ModelX = (props) => {
        return (
            <div className="row m-0" style={{height: window.innerHeight }}>
                <div className="col-md-12 h-100 p-0" >
                <video className="w-100 h-100 models" autoPlay={true} playsInline>
                    <Video src={window.innerWidth > props.breakpoint ? modelXDesktop : modelXMobile } alt="modelX"/>
                </video>
                </div>
                <InfoContainer color="text-white" headline="Model X" /> 
                <ModelDescription color="text-white" technical1={stars} info1="5-Star Safety" technical2={<img className="mb-1" src="https://www.tesla.com/sites/tesla/files/curatedmedia/MX_room-for-7-white.svg" alt="room-for-7" />} technical2Bis="7" info2="Room for Seven" technical3="328mi" info3="Range" cta="ORDER NOW" />
            </div>
        );
}

export default ModelX;