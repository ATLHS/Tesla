import React, {useState, useEffect} from 'react';
import {useSpring, animated, config} from 'react-spring';
import ReactFullpage from '@fullpage/react-fullpage';
import homeDesktop from '../images/homeDesktop.jpg';
import homeMobile from '../images/homeMobile.jpg';
import energyDesktop from '../images/energyDesktop.jpg';
import energyMobile from '../images/energyMobile.jpg';
import AccessoriesDesktop from '../videos/AccessoriesDesktop.mp4';
import AccessoriesMobile from '../videos/AccessoriesMobile.mp4';
import Video from './layout/Video';
import Map from './Map';
import superchargers from '../data/superchargers-location.json';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import {faMapMarker, faTimes} from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';

const MapSidebar = (props) => {
    return (
        <div className="alert alert-light m-0 sidebar" role="alert">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-left align-items-center">
                    <FontAwesomeIcon className="text-dark" style={{fontSize:"20px"}} icon={faMapMarker} size="sm" />
                    <h5 className="alert-heading mb-0 ml-3">{props.n_enseigne}</h5>
                </div>
                <FontAwesomeIcon onClick={props.onClick} className="text-dark" style={{fontSize:"20px", height: "20px", width: "20px"}} icon={faTimes} size="sm" />
            </div>
            <hr className="text-light w-100 mapSidebarHr"/>
            <p className="display-4 text-dark text-left map-heading text-left">{props.n_station}</p>
            <p className="mb-0 text-left">{props.ad_station}</p>
            <p className="mb-2 text-left">{props.accessibilite}</p>
            <p className="mb-2 text-left">{props.observations}</p>
            <p className="mb-2 text-dark text-left">France</p>
        </div>
    );
}

const Home = (props) => { 
    const [translateX, setTranslateX] = useState(0);
    const [x, setX] = useState(0);
    const [delay, setDelay] = useState(1500);
    const modelNames = ["Model S", "Model 3", "Model X"];
    const [i, setI] = useState(1);
    const [mapData, setMapData] = useState();
    const [displayMapSidebar, setDisplayMapSidebar] = useState(false);
    
    const mediaSection_1 = window.innerWidth > props.breakpoint ? homeDesktop : homeMobile;
    const mediaSection_2 = window.innerWidth > props.breakpoint ? energyDesktop : energyMobile;
    const mediaSection_3 = window.innerWidth > props.breakpoint ? AccessoriesDesktop : AccessoriesMobile;
    
    let scale = window.innerWidth > props.breakpoint ? 2 : 3;
    let transformO = window.innerWidth > props.breakpoint ? 65 : 58;
   
    useEffect(() => {
        window.innerWidth > props.breakpoint ? setX(25) : setX(33);
    },[props.breakpoint])

    // React-spring animation
    const imgSpring = useSpring({
        config: config.molasses,
        from: { transform: `scale(1) translateX(0%)`, transformOrigin: `50% ${transformO}%`},
        to: {transform: `scale(${scale}) translateX(${translateX}%)`},
        delay: delay
    });
    // const CarouselCaptionSpring = useSpring({config: {duration: 1000},from: {opacity: 0},to: {opacity: 1}});
   
    const translate = (e) => {
        const id = e.target.id;
        switch (id) {
            case "prev":
                setDelay(0)
                translateX === -x ? setTranslateX(0) : setTranslateX(x);
                translateX === -x ? setI(1) : setI(0);
                break;
            case "next":
                setDelay(0)
                translateX === x ? setTranslateX(0) : setTranslateX(-x);
                translateX === x ? setI(1) : setI(2);
                break;
            default:
                setTranslateX(0);
                break;
        }
    }
    
    return ( 
        <ReactFullpage
        scrollingSpeed = {1000}
        navigation
        normalScrollElements = {".homeSection4"}
        render={() => {
        return (
            <ReactFullpage.Wrapper>
                <>
                   <div className="section homeSection1">
                        <animated.img className="h-100 w-100 mediaSection-1" style={imgSpring} src={mediaSection_1} alt="Tesla-models"/>
                        <div className="carousel-caption d-md-block">
                            <h5 className="modelsName">{modelNames[i]}</h5>
                            <p className="modelsQuotes">{translateX !== 0 && 'Free Unlimited Supercharging.'}</p>
                        </div>
                        <div className="row position-absolute w-100 m-auto btn-row">
                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-light border-light btn-sm m-2 rounded-pill cta">CUSTOM ORDER</button>
                                <button type="button" className="btn btn-outline-light btn-sm m-2 rounded-pill cta">EXISTING INVENTORY</button>
                                <span className="d-block text-white visit-store">Visit a store</span>
                            </div>
                        </div>
                        <span className="carousel-control-prev mt-auto mb-auto h-50" role="button" id="prev" onClick={translate}></span>
                        <span className="carousel-control-next mt-auto mb-auto h-50"  role="button" id="next" onClick={translate}></span>
                   </div>
                   <div className="section homeSection2">
                        <img className="h-100 w-100 mediaSection-2" src={mediaSection_2} alt="Energy"/>
                        <div className="carousel-caption d-md-block">
                            <h5 className="modelsName">Power Everything</h5>
                            <p className="modelsQuotes d-block">Solar and Powerwall</p>
                        </div>
                        <div className="row position-absolute w-100 m-auto btn-row pt-4">
                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-outline-light btn-sm m-2 rounded-pill cta">ORDER SOLAR PANELS</button>
                                <button type="button" className="btn btn-outline-light btn-sm m-2 rounded-pill cta">ORDER SOLAR ROOF</button>
                                <span className="d-block text-white visit-store">Learn more</span>
                            </div>
                        </div>
                   </div>
                   <div className="section homeSection3">
                       <div className="h-100 w-100 mediaSection-3">
                       <video className="h-100 w-100" loop data-autoplay muted playsInline>
                           <Video src={mediaSection_3} alt="Accessories-video" />
                        </video>
                       </div>
                        <div className="carousel-caption d-md-block">
                            <h5 className="modelsName">Tesla Accessories</h5>
                        </div>
                        <div className="row position-absolute w-100 m-auto btn-row pt-1">
                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-light border-light btn-sm m-2 rounded-pill cta">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    <div className="section homeSection4">
                        <Map items={superchargers} widthVw="100vw" heightVh="100vh" log={(data) => (setMapData(data), setDisplayMapSidebar(true))}/>
                        <div className="position-relative ">
                        <div className={`row position-absolute ${window.innerWidth > props.breakpoint &&  "w-25"} btn-map`}>
                            <div className="col-sm-12 text-center sideBarContainer">
                                {/* <button type="button" className="btn btn-light border-light btn-sm m-0 rounded-pill cta w-100">SHOP NOW</button> */}
                                { displayMapSidebar &&  <MapSidebar className="map" onClick={() => setDisplayMapSidebar(false)} {...mapData}/>}
                            </div>
                        </div>
                        </div>
                    </div>
                </>
            </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}


export default Home; 