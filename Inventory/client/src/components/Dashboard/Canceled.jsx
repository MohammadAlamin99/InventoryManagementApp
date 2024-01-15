
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCalendar } from "react-icons/ai";




const Canceled = () => {
 

  return (
    <div className="card h-100">
    <div className="card-body">
        <h6 className="animated fadeInUp">demo</h6>
        <p className="animated fadeInUp">demo</p>
        <p className="m-0 animated fadeInUp p-0">
            <AiOutlineCalendar/> {item.createdDate}
            <a className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
            <a className="icon-nav text-danger mx-1" style={{ cursor: 'pointer' }}>
                <AiOutlineDelete /> </a>
                                            

            <a className="badge float-end bg-danger text-decoration-none">{item.status}</a>
        </p>
    </div>
</div>
  );
};

export default Canceled;
