import React from 'react';
import '../../css/video.css';


 
function Video(props){
  return (
        <video className="w-100 h-100" autoPlay={true} playsInline>
          <source src={props.src} type="video/mp4"/>
        </video>
  );
};

export default Video;