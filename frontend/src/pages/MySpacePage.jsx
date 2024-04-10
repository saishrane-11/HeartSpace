
import AfterLoginMyHeader from "../components/AfterLogin/AfterLoginMyHeader";
import Grow from "../components/Grow";
import Header from "../components/Header";
import MySpace from "../components/MySpace";
import AfterLogHome from "./AfterLogHome";
function MySpacePage(){
    return(
        <>
        <AfterLoginMyHeader/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <MySpace/>
            
        </div>
    
    
    </>
    )

}
export default MySpacePage;