import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">HIRemedy</h1>
                <p className="footer-text">
                HIRemedy is a unique platform where you can get all your health related services under one site. We provide several services for both users and doctors.
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > Home </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                  <a href='/terms'>Terms</a>
                  </li>
                  <li>
                  <a href='/privacy'>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <a href="mailto:info@hiremedy.com" >info@hiremedy.com</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9538477,77.3507442,10z/data=!3m1!4b1!4m5!3m4!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627" >Bangalore</a>
                  </li>
                  
                </ul>
              </div>
             
              <div className="col-md-3">
                <p className="footer-title">Address</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer"  >#433, 1st Floor, 17th Cross, J.P Nagar 6th Phase<br/>Bangalore-560078</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
