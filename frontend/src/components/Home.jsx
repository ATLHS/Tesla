import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring';
import '../css/home.css';
import homeDesktop from '../images/homeDesktop.jpg';
import homeMobile from '../images/homeMobile.jpg';
import Map from './Map';

const Home = (props) => {
    const [translateX, setTranslateX] = useState(0);
    const [x, setX] = useState(null);
    const [modelTitle, setModelTitle] = useState('Model 3');
    const [delay, setDelay] = useState(1000);
    const [ModelQuotes, setModelQuotes] = useState('');

    useEffect(() => {
        window.innerWidth > props.breakpoint ? setX(25) : setX(33);
    }, [x])

    const imgSpring = useSpring({
        config: {duration: 500},
        from: {marginTop: '-10%', transform: 'scale(1) translateX(0%)', transformOrigin: '50% 60%'},
        to: {transform: window.innerWidth > props.breakpoint ? `scale(2) translateX(${translateX}%)` : `scale(3.1) translateX(${translateX}%)`},
        delay: delay
    });
    const CarouselCaptionSpring = useSpring({config: {duration: 1000},from: {opacity: 0},to: {opacity: 1}, delay: 1000});

    const translate = (e) => {
        const id = e.target.id;
        switch (id) {
            case "prev":
                setDelay(0);
                translateX === -x ? setTranslateX(0) : setTranslateX(x);
                translateX === -x ? setModelTitle('Model 3') : setModelTitle('Model S');
                translateX === -x ? setModelQuotes('') : setModelQuotes('Free Unlimited Supercharging.');
                break;
            case "next":
                setDelay(0);
                translateX === x ? setTranslateX(0) : setTranslateX(-x);
                translateX === x ? setModelTitle('Model 3') : setModelTitle('Model X');
                translateX === x ? setModelQuotes('') : setModelQuotes('Free Unlimited Supercharging.');
                break;
            default:
                setTranslateX(0);
                break;
        }
    }
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
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
                <div className="carousel-inner" style={{height: window.innerHeight }}>
                    <div className="carousel-item active" >
                        <animated.img style={imgSpring} src={window.innerWidth > props.breakpoint ? homeDesktop : homeMobile } className="w-100 h-100" alt="models" />
                        <div className="carousel-caption d-md-block">
                            <animated.h2 style={CarouselCaptionSpring} className="modelsName">{modelTitle}</animated.h2> 
                            <animated.p style={CarouselCaptionSpring} className="modelsQuotes">{ModelQuotes}</animated.p>
                        </div>
                    </div>
                </div>
                <a id="prev" className="carousel-control-prev h-25 mt-auto mb-auto" href="#carouselExampleCaptions" role="button" data-slide="prev" onClick={translate}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a id="next" className="carousel-control-next h-25 mt-auto mb-auto" href="#carouselExampleCaptions" role="button" data-slide="next" onClick={translate}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-md-8 m-auto">
                    <h3 className="display-4 text-center">On the Road</h3>
                    <p className="text-center text-dark">Stop at a Supercharger while you take a quick break. Long <br/> distance travel is easy with access to the world’s fastest charging <br/> network.</p>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Map />
            </div>
        </div>
    );
}

export default Home;