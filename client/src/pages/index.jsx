import React from "react";
import OurServices from "../components/services/OurServices";
import NavigationBar from "../components/NavigationBar";
import ContactForm from "../components/contact/ContactForm";
import AboutSection from "../components/about/AboutSection";
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import TestimonialPage from "../components/Testimonial/TestimonialPage";
import Count from "../components/common/counters/Counter";
import ScrollToTop from "react-scroll-up";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <AboutSection />
      <OurServices />
      <TestimonialPage />
      <ContactForm />
      <Count />
      <Footer />
      <ScrollToTop
        showUnder={160}
        duration={300}
        topPosition={0}
        style={{
          position: "fixed",
          bottom: 50,
          right: 30,
          cursor: "pointer",
          transitionDuration: "0.2s",
          transitionTimingFunction: "linear",
          transitionDelay: "0s",
          zIndex: 2,
        }}
      >
        <KeyboardArrowUpIcon
          style={{
            color: "#fff",
            background: "red",
            padding: "3px",
            fontSize: "34px",
            borderRadius: "50px",
          }}
        />
      </ScrollToTop>
    </>
  );
};

export default HomePage;
