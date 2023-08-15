import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/NavigationBar";
import ContactForm from "../components/contact/ContactForm";
import AboutSection from "../components/about/AboutSection";
import Home from "../components/home/Home";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <AboutSection />
      <OurServices />
      <ContactForm />
    </div>
  );
};

export default HomePage;
