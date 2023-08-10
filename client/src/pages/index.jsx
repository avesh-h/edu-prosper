import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/services/NavigationBar";
import ContactForm from "../components/services/ContactForm";
import AboutSection from "../components/about/AboutSection";
// import Home from "../components/services/Home";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <AboutSection />
      <OurServices />
      <ContactForm />
    </div>
  );
};

export default HomePage;
