import React from 'react';
import '../../css/video.css';


 
function Video(props){
  return <source src={props.src} type="video/mp4"/>
};

export default Video;