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
import styles from "./styles.module.css";
import { styled } from "@mui/material";

const ServiceSlider = styled(Slider)(({ theme }) => ({
  paddingBottom: "50px",
  "& .slick-track": {
    display: "flex",
    gap: "20px",
    backgroundColor: "#f3f9ff",
  },
  "& slick-slide > div": {
    height: "400px",
  },
}));

const OurServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
    className: `center ${styles.display}`,
  };
  return (
    <Box sx={{ backgroundColor: "#f3f9ff" }}>
      <Container>
        <SectionHeading sx={{ color: "#214a98", fontSize: "50px" }}>
          {content.heading}
        </SectionHeading>
        <Box width={"100%"} display={"flex"} justifyContent={"center"} py={4}>
          <Typography
            variantMapping={"p"}
            align="center"
            maxWidth={"60%"}
            sx={{ fontFamily: "#3d3d3d" }}
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
    </Box>
  );
};

export default OurServices;
