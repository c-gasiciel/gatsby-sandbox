import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const ParallaxElementWrapper = ({ element, props }) => {
    return(
        <ParallaxProvider>
            { element }
        </ParallaxProvider>
    );
}

export default ParallaxElementWrapper;