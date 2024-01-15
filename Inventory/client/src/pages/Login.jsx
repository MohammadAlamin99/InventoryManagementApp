import React, { Fragment, useRef} from "react";
import { Link } from "react-router-dom";
import { IsEmpty, errorTost, successTost} from "../Helper/FormHelper"
import { setToken, setUserDetails } from "../Helper/SessionHelper";
import { UserLoginRequiest } from "../apiRequiest/apiRequiest";


const Login = () => {
    const emailRef = useRef(); 
    const passRef = useRef();

    const onLogin = async()=>{
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        if (IsEmpty(email)) {
            errorTost("Invalid email address !");
          } else if (IsEmpty(pass)) {
            errorTost("Password Required !");
          }    
          else{
            const res = await UserLoginRequiest(email, pass);
            console.log(res)
            if (res.data.status === "success") {
                successTost("Login successful");
                setToken(res.data['token']);
                setUserDetails(res.data['data']);
                window.location.href = "/";
              }
              else if(res.data.status==="unauthorized"){
                errorTost("Email or Password Wrong !")
              }
              else{
                errorTost("Something Went Wrong")
              }
          }
    }



  return (
    <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className="Loginpage">SIGN IN</h4>
                                <br/>
                                <input ref={emailRef} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={passRef} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={onLogin} style={{fontFamily:"'Poppins', sans-serif;", fontWeight:"400", background:"#419CA6", color:"#fff"}} className="btn w-100 animated fadeInUp float-end">Next</button>
                                <hr/>
                                <div className="float-end mt-3 forgoteBtn">

                                    <span>
                                        <Link style={{textDecoration:"none"}} className="text-center ms-3 h6 animated fadeInUp" to="/register">Sign Up </Link>
                                        <span className="ms-2">|</span>
                                        <Link style={{textDecoration:"none"}} className="text-center ms-3 h6 animated fadeInUp" to="/emailVerify">Forget Password</Link>
                                    </span>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
  );
};

export default Login;
