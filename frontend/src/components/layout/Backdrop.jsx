import React from 'react';
import '../../css/backdrop.css';

const Backdrop = (props) => (
    <div onClick={props.enableMobileMenu} className="backdrop w-100 h-100 position-absolute"></div>
)

export default Backdrop;