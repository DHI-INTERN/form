import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
// import DoctorRegistration from './Doctorregistration';

function Main() {
  return (
    <>
      <main>
        {/* <DoctorRegistration/> */}
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}
export default Main;
