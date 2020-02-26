import React from 'react';
import '../../css/infoContainer.css';

const InfoContainer = (props) => {
   return (
    <div className="row w-100 position-absolute m-auto infoContainer">
        <div className="col-md-12 text-center">
            <h2 className={`${props.color} display-4 brand`}>Tesla</h2>
            <h1 className={`${props.color}`}>{props.headline}</h1>
        </div>
    </div>
   );
}

export default InfoContainer;