import './Footer.css';

function Footer() {
    return (
        <div>

            <div className="grid footer-comp">
                <div className="row">
                    <div className="col-6 about-company-Footer">
                        <h3>About Company</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo sed veritatis in. Aspernatur distinctio corporis aliquam cupiditate non molestiae eveniet! Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        </p>
                    </div>


                    <div className="col quick-links-Footer">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>Home</li>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>
                    </div>


                    <div className="col contact-us-Footer">
                        <h3>Contact Us</h3>
                        <a href="mailto:">info@company.com</a>
                        <br />
                        <a href="tel:">+91 079 00900800</a>
                        <div className="icon-div-Footer">
                            <a href="#">
                                <img className="img-icon-Footer" src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"/>
                            </a>
                            <a href="#">
                                <img className="img-icon-Footer" src="https://img.icons8.com/ios-filled/50/000000/twitter.png"/>
                            </a>
                            <a href="#">
                                <img className="img-icon-Footer" src="https://img.icons8.com/ios/50/000000/google-plus.png"/>
                            </a>
                        </div>
                    </div>
                </div>




            </div>
            <div className="row copyright-footer">
                <p>Copyright &copy; 2018 &bull; Code and Design &bull; All Rights Reserved</p>
            </div>
        
        </div>
    );
}


export default Footer;