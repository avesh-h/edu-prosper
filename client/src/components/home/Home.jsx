import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { heroBanner } from "../../static/Hero";

const BannerSlider = styled(Slider)({
  height: 600,
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
  transform: "translate(-50%, -50%)",
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
  const [showArrows, setShowArrows] = useState(false);
  const sliderRef = React.createRef();

  const settings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <Box
      sx={{
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "lightgray",
        position: "relative",
      }}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      <BannerSlider {...settings}>
        {heroBanner.map((banner, ind) => (
          <Box
            key={ind}
            sx={{
              backgroundImage: `url(${banner.img})`,
              height: "600px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundSize: "cover",
              position: "relative",
              "&::before": {
                content: "''",
                position: "absolute",
                height: "100%",
                backgroundColor: "#ffffff36",
                height: "600px",
                width: "100%",
                zIndex: 1,
              },
              "&:hover": {
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 150, 150, 0.06)) , url(${banner.img})`,
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                paddingLeft: "10%",
                paddingTop: "13%",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={"20px"}
                fontWeight={600}
                color={"#fff"}
                fontFamily={"Archivo, sans-serif"}
                sx={{
                  textDecoration: "underline",
                }}
                letterSpacing={1}
              >
                {banner.title}
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={"42px"}
                fontWeight={400}
                width={"35%"}
                sx={{
                  marginTop: "10px",
                }}
              >
                {banner.data}
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  fontSize={"28px"}
                  sx={{
                    padding: "10px 20px",
                    backgroundColor:"#d00014",
                    marginTop: "15px",
                  }}
                >
                  Check Eligibility
                </Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1 }} />
          </Box>
        ))}
      </BannerSlider>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "2%",
          transform: `translateY(-50%) ${showArrows ? "scale(1)" : "scale(0.8)"}`,
          opacity: showArrows ? 1 : 0,
          transition: "opacity 0.3s, transform 0.3s",
        }}
        onClick={goToPrevSlide}
      >
        <SamplePrevArrow />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: "1.5%",
          transform: `translateY(-50%) ${showArrows ? "scale(1)" : "scale(0.8)"}`,
          opacity: showArrows ? 1 : 0,
          transition: "opacity 0.3s, transform 0.3s",
        }}
        onClick={goToNextSlide}
      >
        <SampleNextArrow />
      </Box>
    </Box>
  );
};

export default Home;
