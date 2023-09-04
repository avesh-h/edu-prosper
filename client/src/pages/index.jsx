import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/NavigationBar";
import ContactForm from "../components/contact/ContactForm";
import AboutSection from "../components/about/AboutSection";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import TestimonialPage from "../components/Testimonial/TestimonialPage";
import Count from "../components/common/counters/Counter";


const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <AboutSection />
      <OurServices />
      <TestimonialPage/>
      <Count/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;
