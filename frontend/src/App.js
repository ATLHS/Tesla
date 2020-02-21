import React, {useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DesktopNavbar from './components/layout/DesktopNavbar';
import MobileNavbar from './components/layout/MobileNavbar';
import Backdrop from './components/layout/Backdrop';
import Energy from './components/Energy';
import ModelS from './components/ModelS';
import Model3 from './components/Model3';
import ModelY from './components/ModelY';
import Cybertruk from './components/Cybertruk';
import Roadster from './components/Roadster';
import ModelX from './components/ModelX';
import Contact from './components/Contact';

function App() {  
    const [toggle, setToggle] = useState(false);
    const [navColor, setNavColor] = useState("white");
    let mobilNav;
    let backdrop;
    if(toggle){
        mobilNav = <MobileNavbar mobileNavStatut={toggle} blackNavItem={() => setNavColor("black")} whiteNavItem={() => setNavColor("white")} linkColor={navColor} enableMobileMenu={() => setToggle(!toggle)}/>
        backdrop = <Backdrop enableMobileMenu={() => setToggle(!toggle)} />
        document.body.classList.add('position-fixed');
    } else {
        document.body.classList.remove('position-fixed');
    }
    
    return (
      <div className="container-fluid p-0">
      <Router> 
        <DesktopNavbar breakpoint={750} blackNavItem={() => setNavColor("black")} whiteNavItem={() => setNavColor("white")} linkColor={navColor} enableMobileMenu={() => setToggle(!toggle)} />
        {mobilNav}
        {backdrop}
        <Switch>
          <Route path="/models">
              <ModelS breakpoint={750} />
          </Route>
          <Route path="/model3">
              <Model3 breakpoint={750} />
          </Route>
          <Route path="/modelx">
              <ModelX breakpoint={750} />
          </Route>
          <Route path="/modely">
              <ModelY breakpoint={750} />
          </Route>
          <Route path="/cybertruk">
              <Cybertruk breakpoint={750} />
          </Route>
          <Route path="/roadster">
              <Roadster breakpoint={750} />
          </Route>
          <Route path="/energy">
              <Energy breakpoint={750} />
          </Route>
          <Route path="/contact" >
              <Contact breakpoint={750} />
          </Route>
          <Route path="/">
              <Home breakpoint={750}/>
          </Route>
        </Switch>
      </Router>  
      </div>
     );
  }

export default App;


