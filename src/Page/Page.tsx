import About from "../components/About/About";
import Certification from "../components/Certification/Certification";
import ContactMe from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/Navbar/Navbar";
import Testimonials from "../components/Testimony/Testimony";

const Page = () => {
  return (
    <div>
      <NavBar />
      <Hero />

      <About />
      <Testimonials />
      <Certification />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Page;
