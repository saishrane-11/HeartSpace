import About from "../components/About";
import { useState,useEffect } from "react";
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
import Footer from "../components/Footer";
// import JsonData from "../data/data.json";

function AboutPage(){

  
    return(
        <>
        <AfterLoginMyHeader/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <About />
        <Footer/>
            
        </div>
    
    
    </>
    )

}
export default AboutPage;