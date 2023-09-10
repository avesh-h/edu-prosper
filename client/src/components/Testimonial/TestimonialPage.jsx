import React from "react";
import { Box, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";
import SectionHeading from "../common/styled/SectionHeading";

const BannerSlider = styled(Slider)(({ theme }) => ({
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const MainSection = styled("div")({
  position: "relative",
  textAlign: "center",
  padding: "50px 0",
});

const ArrowBox = styled(Box)(({ theme }) => ({
  display: "block",
  background: "white",
  height: "40px",
  width: "80px",
  zIndex: 1,
  cursor: "pointer",
  position: "absolute",
  background: "transparent",
  "&::before": { display: "none" },
  [theme.breakpoints.down("sm")]: {
    height: "25px",
    width: "40px",
  },
}));

const ArrowIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: "red",
  fontSize: "30px",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
  top: "50%",
  left: "50%",
}));

const BackArrowIcon = styled(ArrowBackIosIcon)(({ theme }) => ({
  color: "red",
  fontSize: "30px",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
  top: "50%",
  left: "50%",
}));

function SampleNextArrow({ className, onClick }) {
  return (
    <ArrowBox
      className={className}
      position={{ right: "3%" }}
      onClick={onClick}
    >
      <ArrowIcon />
    </ArrowBox>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <ArrowBox className={className} position={{ left: "3%" }} onClick={onClick}>
      <BackArrowIcon />
    </ArrowBox>
  );
}

const TestimonialPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <MainSection id="testimonials">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SectionHeading
          sx={{
            backgroundImage: `linear-gradient(45deg, rgb(240, 40, 73), transparent)`,
          }}
        >
          Testimonials
        </SectionHeading>
      </Box>
      <BannerSlider {...settings}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            image={testimonial.image}
          />
        ))}
      </BannerSlider>
    </MainSection>
  );
};

export default TestimonialPage;
