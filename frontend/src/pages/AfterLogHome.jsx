import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Infographic from "../components/Infographic";
import Feature from "../components/Feature";
import Demo from "../components/Demo"
import MyCarousel from "../components/MyCarousel";
import AfterLoginMyCrousel from "../components/AfterLogin/AfterLoginMyCrousel";
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
function AfterLogHome() {
    return (
        // <>
        // <Demo/>
        // </>
        <>
            <AfterLoginMyHeader/>
            
            <div className="main"
                style={{marginTop:"78px"}}
             >
                <AfterLoginMyCrousel/>
                <Hero/>
      
                <Infographic/>
            <Feature/>
       
       
                
            </div>
            <Footer/>
        
        </>
    )
}
export default AfterLogHome;