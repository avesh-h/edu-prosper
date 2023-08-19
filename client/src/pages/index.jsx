import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/NavigationBar";
import ContactForm from "../components/contact/ContactForm";
import AboutSection from "../components/about/AboutSection";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <AboutSection />
      <OurServices />
      <ContactForm />
      <Footer/>
    </div>
  );
};

export default HomePage;
