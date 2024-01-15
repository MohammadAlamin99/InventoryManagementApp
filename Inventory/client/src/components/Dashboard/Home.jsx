import Card from "./Card";


const Home = () => {

  

  return (
    
    <div className="container-fluid pt-3">
     <div className="row row-cols-1 row-cols-md-3 row-cols-xxl-4 g-3" >
     <div className="col">
                    <Card title="demo" count="demo" />
                  </div>
      </div>
    </div>
  );
};

export default Home;
