


const Profile = () => {
 
  return (
    <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="container-fluid">
              <div className="row profileInside">   
              <img style={{ width:"148px"}} ref={photoRef} className="icon-nav-img-lg" src="demo photo" alt=""/>              
                <hr />
                <div className="col-4 p-2">
                <label>Profile Picture</label>
                 <input placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                </div>
                <div className="col-4 p-2">
                  <label>Email Address</label>
                  <input placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                </div>
                <div className="col-4 p-2">
                  <label>First Name</label>
                  <input placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                </div>
                <div className="col-4 p-2">
                  <label>Last Name</label>
                  <input  key={Date.now()} ref={lastNameRef} defaultValue={data.lastName} placeholder="Last Name" className="form-control animated fadeInUp" type="text" />
                </div>
                <div className="col-4 p-2">
                  <label>Mobile</label>
                  <input placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                </div>
                <div className="col-4 p-2">
                  <label>Password</label>
                  <input placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                </div>
                <div className="col-4 p-2 ProfileUpdateBtn">
                  <button className="w-100 float-end animated fadeInUp rounded">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;
