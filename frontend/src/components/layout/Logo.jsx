import React from 'react';

function Logo(props) {
    return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 342 35" 
        width={props.width} 
        height={props.height}>
        <path d={props.path} fill={props.fill} /> 
    </svg>
    );
}

export default Logo;

