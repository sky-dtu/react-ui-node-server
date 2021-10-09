import './Cover.css';

const coverStyle = {
    width: '800px'
}


function Cover() {
    return (
      <div className="cover-bg container-fluid grid border border-dark rounded h-100 mx-auto">
          <div className="inner-div mx-auto" style={coverStyle} align='center'>
            <h1>WE HELP YOUR BUSINESS</h1>
            <p className="p-cover">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae perferendis quo exercitationem eius qui alias nihil! Vero ipsa reprehenderit illum.</p>
            <button className="btn btn-light btn-outline-dark bg-light btn-lg" href="#">Learn More</button>
          </div>
      
      </div>
    );
}
  
export default Cover;
  