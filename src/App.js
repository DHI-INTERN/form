import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Res from './components/res';
import PatientRegistration from './components/Patientregister';
import Doctorregistration from './components/Doctorregistration';
import TermsC from './components/Terms';
import {
  BrowserRouter as Router,
  Routes,
  Route
  // Routes,
  // Redirect
  
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      {/* <Home/> */}
      {/* <Doctorregistration/> */}
      {/* <Navbar />
      <Header />
      <Main />
      <Footer />  */}

      <Routes>
        {/* <Route path="/" element={<PatientRegistration />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/preg" element={<PatientRegistration />} />
        <Route path="/docreg" element={<Doctorregistration />} />
        <Route path="/res" element={<Res />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/terms" element={<TermsC />} />


        
      </Routes>
    </Router>
  </>

  );
}

export default App;
