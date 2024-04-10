
import Grow from "../components/Grow";
import Header from "../components/Header";
import AfterLogHome from "./AfterLogHome";
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
import Footer from "../components/Footer";
function GrowPage(){
    return(
        <>
        <AfterLoginMyHeader/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <Grow/>
        <Footer/>
            
        </div>
    
    
    </>
    )

}
export default GrowPage;