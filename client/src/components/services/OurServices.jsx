import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { OurServices as content } from "../../static/OurServices";
import Card from "../common/Card";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material";
import BannerImg from "../../assets/images/banner-1.webp";
import OverlaySection from "../common/styled/OverlaySection";

const ServiceSlider = styled(Slider)(({ theme }) => ({
  "& .slick-track": {
    display: "flex",
    gap: "20px",
  },
}));

const OurServices = () => {
  const theme = useTheme();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: false,
    arrows: false,
  };
  return (
    <OverlaySection id="services" overlayColor="#00000069" bgImage={BannerImg}>
      <Container sx={{ py: 4, position: "relative", zIndex: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SectionHeading
            sx={{
              backgroundImage: `linear-gradient(45deg, ${theme.palette.mainColors.red}, transparent)`,
            }}
          >
            {content.heading}
          </SectionHeading>
        </Box>
        <Box textAlign={"center"} pt={2}>
          <Typography
            sx={{
              color: theme.palette.mainColors.red,
              fontWeight: 600,
            }}
          >
            CHOOSE YOUR CATOGARY VISA
          </Typography>
          <Typography sx={{ fontSize: "35px", color: "#fff" }} pt={1}>
            With Migrate Immigration Visa
          </Typography>
          <Typography variant="h4" fontWeight={600} color={"#fff"}>
            Service We Provide.
          </Typography>
        </Box>
        <Box width={"100%"} display={"flex"} justifyContent={"center"} py={4}>
          <Typography
            variantMapping={"p"}
            align="center"
            maxWidth={"60%"}
            sx={{ color: "#fff", fontFamily: "Montserrat, sans-serif" }}
          >
            {content.description}
          </Typography>
        </Box>
        <Box>
          <ServiceSlider {...settings}>
            {content.services.map((data) => {
              return <Card data={data} />;
            })}
          </ServiceSlider>
        </Box>
      </Container>
    </OverlaySection>
  );
};

export default OurServices;
