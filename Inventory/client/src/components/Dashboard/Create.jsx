
const Create = () => {
 
  return (
    <div className="container-fluid pt-3">
      <div
        className="bg-body p-5 rounded mx-auto mt-5"
        style={{ maxWidth: "50rem" }}
      >
        <h3 className="CreateJSX">Create Task</h3>
        <form className="row g-3">
          <div className="col-12">
            <input
              type="text"
              className="form-control focus-ring custom"
              placeholder="Task Name"
           
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control focus-ring custom"
              cols="30"
              rows="5"
              placeholder="Task Description"
             
            ></textarea>
          </div>

          <div className="col-12 createBtn">
            <button
              type="submit"
              className="btn text-white"
              style={{ background: "#419CA6" }}
         
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
