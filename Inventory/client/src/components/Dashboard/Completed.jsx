
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCalendar } from "react-icons/ai";




const Completed = () => {
  
  return (
    <div className="card h-100">
    <div className="card-body">
        <h6 className="animated fadeInUp">{item.title}</h6>
        <p className="animated fadeInUp">{item.description}</p>
        <p className="m-0 animated fadeInUp p-0">
            <AiOutlineCalendar/> date
            <a  className="icon-nav text-primary mx-1"><AiOutlineEdit /></a>
            <a className="icon-nav text-danger mx-1" style={{ cursor: 'pointer' }}>
                <AiOutlineDelete /> </a>
                                            

            <a className="badge float-end bg-success text-decoration-none ">demo</a>
        </p>
    </div>
</div>
  );
};

export default Completed;
