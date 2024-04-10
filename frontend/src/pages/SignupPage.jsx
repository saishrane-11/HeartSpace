import Signup from "../components/Signup";
import Header from "../components/Header";

function SignupPage(){
    return(
        <>
        <Header/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >
           
            <Signup/>
            
        </div>
    
    
    </>
    )
}
export default SignupPage;