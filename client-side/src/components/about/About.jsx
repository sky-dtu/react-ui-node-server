import './About.css'

function About() {
    return (
      <div className="grid comp-body">
          <div className="row p-4">
              <div className="col content-elem">
                <h3 className="h3-about">ABOUT US</h3>
                <p className="p-about">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit eligendi perspiciatis distinctio, blanditiis iure unde consequuntur aliquid ducimus magnam dolorem nesciunt voluptatum voluptates nulla totam Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vero id quis, laudantium accusamus aperiam saepe dicta sapiente cupiditate exercitationem natus voluptatibus praesentium, atque consectetur.</p>                
              </div>
              
              <div className="col pic-elem">
                <img src="https://source.unsplash.com/500x300/?laptop,technology" alt="" srcset="" className="img-elem"/>
              </div>
          </div>
      </div>
    );
  }
  
  export default About;
  