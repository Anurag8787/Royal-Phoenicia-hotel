import Herotext from "./Components/Herotext";
import HotelBox from "./Components/HotelBox";
import Navbar1 from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import Slider from "./Components/Slider";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
import Facilities from "./Components/Facilities";
import About from "./Components/About";
import SpaWellness from "./Components/SpaWellness";
import StayPackages from "./Components/StayPackages";
import Accommodation from "./Components/Accommodation";
function App() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Slider />
      <Herotext />
      <HotelBox />
      <Accommodation />
      <StayPackages />
      <SpaWellness />
      <About />
      <Facilities />
      <Events />
      <Footer />
    </>
  );
}

export default App;
