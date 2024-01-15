

const VerifyOTP = () => {
   

    return (
       
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className='Loginpage'>OTP VERIFICATION </h4>
                                <p className='profileInside'>A 6 Digit verification code has been sent to your email address. </p>
                                <ReactCodeInput inputStyle={defaultInputStyle}  fields={6}/>
                                <br/>  <br/>
                                <button style={{fontFamily:"'Poppins', sans-serif;", fontWeight:"400", background:"#419CA6", color:"#fff"}} onClick={SubmitOTP} className="btn w-100 animated fadeInUp float-end">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    );
};
export default VerifyOTP;