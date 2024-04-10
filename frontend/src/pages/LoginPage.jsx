import Login from "../components/Login";
import Header from "../components/Header";
import Signup from "../components/Signup";
import Demo from "../components/Demo";

function LoginPage(){
    return(
        <>
        <Header/>
        
        <div className="main"
            style={{marginTop:"78px"}}
         >

        <Login/>
            
        </div>
    
    
    </>
    )
}
export default LoginPage;