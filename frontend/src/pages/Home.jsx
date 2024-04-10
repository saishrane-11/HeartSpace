import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Infographic from "../components/Infographic";
import Feature from "../components/Feature";
import Demo from "../components/Demo"
import MyCarousel from "../components/MyCarousel";
function Home() {
    return (
        // <>
        // <Demo/>
        // </>
        <>
            <Header/>
            
            <div className="main"
                style={{marginTop:"78px"}}
             >
                <MyCarousel/>
                <Hero/>
      
                <Infographic/>
            <Feature/>
       
       
                
            </div>
            <Footer/>
        
        </>
    )
}
export default Home;