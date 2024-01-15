

const Progress = () => {
  
  return (
    <div className="container-fluid pt-3">
    <div className="row p-0 m-0">
                 <div className="col-12 newJSX">
                     <h5>Task In Progress</h5>
                 </div> 
             </div>
   <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3">
   <div className="card h-100">
             <div className="card-body">
                 <h6 className="animated fadeInUp">{item.title}</h6>
                 <p className="animated fadeInUp">{item.description}</p>
                 <p className="m-0 animated fadeInUp p-0">
                     <AiOutlineCalendar/> {item.createdDate}
                     <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
                     <a className="icon-nav text-danger mx-1" style={{ cursor: 'pointer' }}>
                         <AiOutlineDelete /> </a>
                                                     

                     <a className="badge float-end bg-warning text-decoration-none">demo</a>
                 </p>
             </div>
         </div>
   </div>
 </div>
  );
};

export default Progress;
