import React from "react";
import Box from "@mui/material/Box";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import { Typography } from "@mui/material";
import aboutUsImg from "../../assets/images/about-us-2.png";
import { aboutUs } from "../../static/AboutUs";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import styled from "@mui/material/styles/styled";

const aboutTexts = [
  "Talk to one of our best consultant today",
  "Our experts are able to find new growth",
  "Find more information our website",
];

const MainSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  py: 4,
}));

const AboutItem = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins , sans-serif",
  color: theme.palette.mainColors.darkblue,
  fontWeight: 600,
}));

const AboutSection = () => {
  return (
    <div id="about">
      <Container>
        <MainSection>
          <Box width={"45%"}>
            <img src={aboutUsImg} width={"600px"} />
          </Box>
          <Box maxWidth={"45%"}>
            <SectionHeading
              sx={{
                backgroundImage: `linear-gradient(45deg, #214a98, transparent)`,
              }}
            >
              {aboutUs.title}
            </SectionHeading>
            <Typography sx={{ fontSize: "30px", color: "#777" }} pt={1}>
              Canada PR Immigration Consultant
            </Typography>
            <Typography
              variantMapping="p"
              pt={3}
              sx={{ fontFamily: "Montserrat, sans-serif", color: "#000000c4" }}
            >
              {aboutUs.description}
            </Typography>
            {aboutTexts.map((t, ind) => {
              return (
                <Box display={"flex"} pt={4} gap={2} key={`${ind}-${t}`}>
                  <CheckBoxOutlinedIcon color={"error"} />
                  <AboutItem>{t}</AboutItem>
                </Box>
              );
            })}
          </Box>
        </MainSection>
      </Container>
    </div>
  );
};

export default AboutSection;
