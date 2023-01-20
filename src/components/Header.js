import { Link } from "react-router-dom";

// import { a } from "react-router-dom";
function Header() {
  return (
    <header>
      {/* <video src="./video.mp4" loop autoPlay muted></video> */}
      <h2>Better Doctors , Clinics & Labs. We'll help you find it</h2>
      <div className="row">
       <Link to={'/docreg'}>
       {/* <a href="/docreg"> */}
        <button className="btn btn-primary" style={{ cursor: "pointer" }}>
          Doctor Regitration
          {/* </Link> */}
        </button>
        </Link>
        <br/>
        <br/>
        {/* </a> */}
        <a href='/preg'>
        <button className="btn btn-primary" style={{ cursor: "pointer" }}>
          User Registration
        </button>
        </a>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
