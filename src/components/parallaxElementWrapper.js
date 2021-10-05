import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./header";
import {
    app,
    heroImg,
} from '../styles/parallaxElementWrapper.module.css';


const ParallaxElementWrapper = ({ element, props }) => {
    /*
    return(
        <ParallaxProvider>
            <div className={app}>
                <Header />
                <div className={ heroImg } >Content</div>
            </div>
        </ParallaxProvider>
    );
    */
   return(
       <div></div>
   );
}

export default ParallaxElementWrapper;