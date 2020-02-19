import React, {useState, useEffect} from 'react';
import {useSpring, animated, config} from 'react-spring';
import '../css/home.css';
import homeDesktop from '../images/homeDesktop.jpg';
import homeMobile from '../images/homeMobile.jpg';
// import Map from './Map';

const Home = (props) => {
    // const [translateX, setTranslateX] = useState(0);
    // const [x, setX] = useState(0);
    const [delay, setDelay] = useState(1500);
    // const modelNames = ["Model S", "Model 3", "Model X"];
    // const [n, setN] = useState(1);
    let img = window.innerWidth > props.breakpoint ? homeDesktop : homeMobile;
    let x = window.innerWidth > props.breakpoint ? 25 : 33;

    const imgSpring = useSpring({
        config: config.molasses,
        from: { transform: "scale(1)", transformOrigin: "50% 60%"},
        to: {transform: window.innerWidth > props.breakpoint ? "scale(2)" : "scale(3)"},
        delay: delay
    });

    // const CarouselCaptionSpring = useSpring({config: {duration: 1000},from: {opacity: 0},to: {opacity: 1}, delay: 1500});
   
    // const translate = (e) => {
    //     const id = e.target.id;
    //     switch (id) {
    //         case "prev":
    //             setDelay(0)
    //             translateX === -x ? setTranslateX(0) : setTranslateX(x);
    //             translateX === -x ? setN(1) : setN(0);
    //             break;
    //         case "next":
    //             setDelay(0)
    //             translateX === x ? setTranslateX(0) : setTranslateX(-x);
    //             translateX === x ? setN(1) : setN(2);
    //             break;
    //         default:
    //             setTranslateX(0);
    //             break;
    //     }
    // }
    return (
        <div>
            <div className="carousel slide" data-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                </ol>
                <div className="row position-absolute w-100 m-auto btn-row">
                    <animated.div style={CarouselCaptionSpring} className="col-md-12 p-0 text-center">
                        <button type="button" className="btn btn-light border-light btn-sm m-2 rounded-pill cta">CUSTOM ORDER</button>
                        <button type="button" className="btn btn-outline-light m-2 btn-sm rounded-pill cta">EXISTING INVENTORY</button>
                        <a className="d-block text-white visit-store" href="#">Visit a store</a>
                    </animated.div>
                </div> */}
                <div className="carousel-inner" >
                    <div className="carousel-item active" style={{height: window.innerHeight, width: window.innerWidth }}>
                    <animated.img className="models" style={imgSpring} src={img} alt="models" />
                    {/* <div className="carousel-caption d-md-block">
                        <animated.h5 className="modelsName" style={CarouselCaptionSpring}>{modelNames[n]}</animated.h5>
                        <animated.p className="modelsQuotes" style={CarouselCaptionSpring}>{translateX !== 0 && 'Free Unlimited Supercharging.'}</animated.p>
                    </div> */}
                    </div>
                </div>
                {/* <a className="carousel-control-prev mt-auto mb-auto h-25" role="button" id="prev" onClick={translate}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next mt-auto mb-auto h-25"  role="button" id="next" onClick={translate}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
            </div>
        </div>
    );

}

export default Home;