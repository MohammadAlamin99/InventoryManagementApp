

const SendOTP = () => {

   
    return (
     

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90  p-4">
                        <div className="card-body">
                            <h4 className='Loginpage'>EMAIL ADDRESS</h4>
                            <br/>
                            <label className='profileInside'>Your email address</label>
                            <input placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                            <br/>
                            <button style={{fontFamily:"'Poppins', sans-serif;", fontWeight:"400", background:"#419CA6", color:"#fff"}} onClick={verifyEmail} className="btn w-100 animated fadeInUp float-end">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      
    );
};

export default SendOTP;