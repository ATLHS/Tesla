import React, {useState, useEffect} from 'react';
import {useSpring, animated, config} from 'react-spring';
import ReactFullpage from '@fullpage/react-fullpage';
import '../css/home.css';
import homeDesktop from '../images/homeDesktop.jpg';
import homeMobile from '../images/homeMobile.jpg';
import energyDesktop from '../images/energyDesktop.jpg';
import energyMobile from '../images/energyMobile.jpg';
import accessoriesHeroDesktop from '../videos/accessoriesHeroDesktop.mp4';
import accessoriesHeroMobile from '../videos/accessoriesHeroMobile.mp4';
import Video from './layout/Video';
import Map from './Map';

const Home = (props) => { 
    const [translateX, setTranslateX] = useState(0);
    const [x, setX] = useState(0);
    const [delay, setDelay] = useState(1500);
    const modelNames = ["Model S", "Model 3", "Model X"];
    const [n, setN] = useState(1);
    let img = window.innerWidth > props.breakpoint ? homeDesktop : homeMobile;
    let img2 = window.innerWidth > props.breakpoint ? energyDesktop : energyMobile;
    let mp4 = window.innerWidth > props.breakpoint ? accessoriesHeroDesktop : accessoriesHeroMobile;
    let scale = window.innerWidth > props.breakpoint ? 2 : 3;
    let transformO = window.innerWidth > props.breakpoint ? 65 : 58;
   
    useEffect(() => {
        window.innerWidth > props.breakpoint ? setX(25) : setX(33);
    }, [x])

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
                translateX === -x ? setN(1) : setN(0);
                break;
            case "next":
                setDelay(0)
                translateX === x ? setTranslateX(0) : setTranslateX(-x);
                translateX === x ? setN(1) : setN(2);
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
                <div className="carousel slide section" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    </ol>
                    <div className="row position-absolute w-100 m-auto btn-row">
                        <animated.div style={CarouselCaptionSpring} className="col-md-12 p-0 text-center">
                            <button type="button" className="btn btn-light border-light btn-sm m-2 rounded-pill cta">CUSTOM ORDER</button>
                            <button type="button" className="btn btn-outline-light m-2 btn-sm rounded-pill cta">EXISTING INVENTORY</button>
                            <a className="d-block text-white visit-store" href="#">Visit a store</a>
                        </animated.div>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active" style={{height: window.innerHeight, width: window.innerWidth }}>
                            <animated.img className="models" style={imgSpring} src={img} alt="models" />
                            <div className="carousel-caption d-md-block">
                                <animated.h5 className="modelsName" style={CarouselCaptionSpring}>{modelNames[n]}</animated.h5>
                                <animated.p className="modelsQuotes" style={CarouselCaptionSpring}>{translateX !== 0 && 'Free Unlimited Supercharging.'}</animated.p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev mt-auto mb-auto h-25" role="button" id="prev" onClick={translate}></a>
                    <a className="carousel-control-next mt-auto mb-auto h-25"  role="button" id="next" onClick={translate}></a>
                </div>
                <div className="section">
                    <div className="row position-absolute w-100 m-auto section2">
                        <div className="col-md-12 d-flex flex-column">
                            <h5 className="modelsName text-center text-white m-auto">Power Everything</h5>
                            <p className="text-center m-auto text-white">Solar and Powerwall</p>
                        </div>
                    </div>
                    <div className="row position-absolute w-100 m-auto btn-row">
                        <div className="col-md-12 p-0 text-center">
                            <button type="button" className="btn btn-outline-light btn-sm m-2 rounded-pill cta">ORDER SOLAR PANELS</button>
                            <button type="button" className="btn btn-outline-light btn-sm m-2 rounded-pill cta">ORDER SOLAR ROOF</button>
                            <a className="d-block text-white visit-store" href="#">Learn more</a>
                        </div>
                    </div>
                    <img className="models" src={img2} alt="energy" />
                </div>
                <div className="section">
                    <div className="row position-absolute w-100 m-auto section2">
                        <div className="col-md-12 d-flex flex-column">
                            <h5 className="modelsName text-center text-white m-auto">Tesla Accessories</h5>
                        </div>
                    </div>
                    <div className="row position-absolute w-100 m-auto btn-row">
                        <div className="col-md-12 p-0 text-center">
                            <button type="button" className="btn btn-light border-light btn-sm m-2 rounded-pill cta">SHOP NOW</button>
                        </div>
                    </div>
                    <video className="w-100 h-100" loop data-autoplay muted>
                        <Video className="models" src={mp4} alt="accessories-hero" />
                    </video>
                </div>
            </>
        </ReactFullpage.Wrapper>
        );
    }}
    />
    );
}

export default Home; 