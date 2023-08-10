import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/services/NavigationBar";
import ContactForm from "../components/services/ContactForm";
import Home from "../components/services/Home";

const HomePage = () => {

  return (
    <div>
      <NavigationBar />
      <Home/>
      <OurServices />
      <ContactForm />
    </div>
  );
};

export default HomePage;
