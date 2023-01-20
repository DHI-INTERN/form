
import about from "./img/about.png";
function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-2 text-center">
            <img alt="about" src={about} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT Hiremedy</h2>
            <p className="main-p">
            We believe that "Health is wealth" and every human being should be given best of a healthcare in an affordable price. Our dream is to connect humans to best of the health services available anywhere in the world.<br></br>
            HiRemedy offers wide range of services with the help of cutting-edge technology patients can use HiRemedy to connect with doctors, pharmacists, yoga centre and host of other services related to health care industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
