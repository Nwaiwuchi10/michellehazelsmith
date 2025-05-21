import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navbar/Navbar";
import Testimonials from "../components/Testimony/Testimony";
import HomeWork from "../components/works/CreativeWorks";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HomeWork />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Page;
