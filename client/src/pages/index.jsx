import React from "react";
import OurServices from "../components/services/OurServices";
import AboutSection from "../components/about/AboutSection";

const HomePage = () => {
  return (
    <div>
      <AboutSection />
      <OurServices />
      <ContactForm />
    </div>
  );
};

export default HomePage;
