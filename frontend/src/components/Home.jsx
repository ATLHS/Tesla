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
import '../css/home.css';

const Home = (props) => { 
    const [translateX, setTranslateX] = useState(0);
    const [x, setX] = useState(0);
    const [delay, setDelay] = useState(1500);
    const modelNames = ["Model S", "Model 3", "Model X"];
    const [i, setI] = useState(1);
    
    const mediaSection_1 = window.innerWidth > props.breakpoint ? homeDesktop : homeMobile;
    const mediaSection_2 = window.innerWidth > props.breakpoint ? energyDesktop : energyMobile;
    const mediaSection_3 = window.innerWidth > props.breakpoint ? AccessoriesDesktop : AccessoriesMobile;
    
    let scale = window.innerWidth > props.breakpoint ? 2 : 3;
    let transformO = window.innerWidth > props.breakpoint ? 65 : 58;
   
    useEffect(() => {
        window.innerWidth > props.breakpoint ? setX(25) : setX(33);  
    },[x])

    // React-spring animation
    const imgSpring = useSpring({
        config: config.molasses,
        from: { transform: `scale(1) translateX(0%)`, transformOrigin: `50% ${transformO}%`},
        to: {transform: `scale(${scale}) translateX(${translateX}%)`},
        delay: delay
    });
    const CarouselCaptionSpring = useSpring({config: {duration: 1000},from: {opacity: 0},to: {opacity: 1}, delay: 1500});
   

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
                                <a className="d-block text-white visit-store" href="#">Visit a store</a>
                            </div>
                        </div>
                        <a className="carousel-control-prev mt-auto mb-auto h-50" role="button" id="prev" onClick={translate}></a>
                        <a className="carousel-control-next mt-auto mb-auto h-50"  role="button" id="next" onClick={translate}></a>
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
                                <a className="d-block text-white visit-store" href="#">Learn more</a>
                            </div>
                        </div>
                   </div>
                   <div className="section homeSection3">
                       <video className="h-100 w-100 mediaSection-3" loop data-autoplay muted playsInline>
                           <Video src={mediaSection_3} alt="Accessories-video" />
                        </video>
                        <div className="carousel-caption d-md-block">
                            <h5 className="modelsName">Tesla Accessories</h5>
                        </div>
                        <div className="row position-absolute w-100 m-auto btn-row pt-2">
                            <div className="col-md-12 text-center">
                                <button type="button" className="btn btn-light btn-sm m-2 rounded-pill cta">SHOP NOW</button>
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