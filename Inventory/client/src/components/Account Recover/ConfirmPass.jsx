

const ConfirmPass = () => {
  
    return (
       
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 col-lg-6 center-screen">
                    <div className="card w-90 p-4">
                        <div className="card-body">
                            <h4 className='Loginpage'>SET NEW PASSWORD</h4>
                            <br/>
                            <label className='profileInside'>Your email address</label>
                            <input placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                            <br/>
                            <label className='profileInside'>New Password</label>
                            <input  placeholder="New Password" className="form-control animated fadeInUp" type="password"/>
                            <br/>
                            <label className='profileInside'>Confirm Password</label>
                            <input placeholder="Confirm Password" className="form-control animated fadeInUp" type="password"/>
                            <br/>
                            <button style={{fontFamily:"'Poppins', sans-serif;", fontWeight:"400", background:"#419CA6", color:"#fff"}} className="btn w-100 animated fadeInUp float-end ">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
       
    );
};
export default ConfirmPass;