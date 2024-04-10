import About from "../components/About";
import Connecting from "../components/Connecting";
import Header from "../components/Header";
import AfterLogHome from "./AfterLogHome";
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
import Footer from "../components/Footer";
function ConnectingPage(){
    return(
        <>
        <AfterLoginMyHeader/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <Connecting/>
        <Footer/>  
        </div>
    
    
    </>
    )

}
export default ConnectingPage;