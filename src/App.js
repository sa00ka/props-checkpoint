import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/Profile";
import Img from "./image.png";
import  Navbars  from "./components/Navbars";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Background from "./components/Background";


AOS.init();
function App() {
  //make a table of object that contain information Profile
  var InforProf = [
    {
      FullName: "SAMI",
      Bio: "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side.",
      Proffession: "Full Stack Developper",
    },


  ];
  //a function that return alert with the name profile
  const HandleName = (name)=>{
    alert(`The Profile Name Is ${name}`);
  }
  //App return a navbar and a card for eatch object
  //Img is passed like children props, table and function are passed like props
  return (
  <>
  <div className="background">
        <Background />
      </div>
      <Navbars style={{ position:"fixed", top:"0px"}}></Navbars>
      <div data-aos="zoom-in" data-aos-duration="1000"
      className="elcartat" style={{margin:"0px 20px", textAlign:"center", display:"flex", flexWrap:"wrap", justifyContent:"center", justifyItems:"center"}}>
      <Profile InforProf={InforProf} HandleName={HandleName}>{Img}</Profile>
      </div>
      <Footer></Footer>
      </>
  );
}


export default App;
