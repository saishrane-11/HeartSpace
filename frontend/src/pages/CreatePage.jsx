import About from "../components/About";
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
import Connecting from "../components/Connecting";
import Create from "../components/Create";
import Header from "../components/Header";
import AfterLogHome from "./AfterLogHome";
import Footer from "../components/Footer";
function CreatePage(){
    return(
        <>
        <AfterLoginMyHeader/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <Create/>
        <Footer/>
            
        </div>
    
    
    </>
    )

}
export default CreatePage;