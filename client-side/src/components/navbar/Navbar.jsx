import { ReactComponent as Logo } from './logo.svg';


function Navbar() {
    return (
      <div className="container-fluid no-gutters grid border border-dark rounded-0">
        <ul className="row justify-content-end align-self-center mt-3">
          <Logo className="col align-self-center" />
          <li className="col-2 nav-link align-self-center"><button className="btn btn-outline-dark" href="#">Home</button></li>
          <li className="col-2 nav-link align-self-center"><button className="btn btn-outline-dark" href="#">Products</button></li>
          <li className="col-2 nav-link align-self-center"><button className="btn btn-outline-dark" href="#">Pricing</button></li>
          <li className="col-2 nav-link align-self-center"><button className="btn btn-outline-dark" href="#">Contact Us</button></li>  
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  