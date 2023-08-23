import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, styled } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { heroBanner } from "../../static/Hero";

const BannerSlider = styled(Slider)({
  height: 700,
});

const arrowStyle = {
  display: "block",
  background: "white",
  height: "40px",
  width: "80px",
  zIndex: 1,
  cursor: "pointer",
  position: "absolute",
  border: "2px solid #fff",
  background: "transparent",
  "&::before": { display: "none" },
  "&:hover": { background: "#214a9863" },
};

const arrowIconSx = {
  color: "red",
  fontSize: "30px",
  transform: "translate(-50%,-50%)",
};

function SampleNextArrow({ className, onClick }) {
  return (
    <Box
      className={className}
      sx={{
        ...arrowStyle,
        right: "3%",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon
        sx={{
          ...arrowIconSx,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    </Box>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <Box
      className={className}
      sx={{ ...arrowStyle, left: "3%" }}
      onClick={onClick}
    >
      <ArrowBackIosIcon
        sx={{
          ...arrowIconSx,
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    </Box>
  );
}

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box
      sx={{
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "lightgray",
      }}
    >
      <BannerSlider {...settings}>
        {heroBanner.map((banner, ind) => {
          return (
            <Box
              sx={{
                backgroundImage: `url(${banner.img})`,
                height: "700px",
                backgroundSize: "cover",
                position: "relative",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  height: "100%",
                  backgroundColor: "#ffffff36",
                  height: "700px",
                  width: "100%",
                  zIndex: 1,
                },
              }}
            ></Box>
          );
        })}
      </BannerSlider>
    </Box>
  );
};

export default Home;
