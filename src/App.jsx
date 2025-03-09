import Footer from "./components/general/Footer";
import NavBar from "./components/general/NavBar";
import ContactUs from "./components/homePage/ContactUs";
import Description from "./components/homePage/Description";
import Hero from "./components/homePage/Hero";
import Pricing from "./components/homePage/Pricing";
import Testimonial from "./components/homePage/Testimonial";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Pricing />
      <Description />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
