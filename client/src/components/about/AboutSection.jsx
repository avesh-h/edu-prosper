import React from "react";
import Box from "@mui/material/Box";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import { Typography } from "@mui/material";
import aboutUsImg from "../../assets/images/About-Us.png";
import { aboutUs } from "../../static/AboutUs";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import styled from "@mui/material/styles/styled";
import BannerImg from "../../assets/images/University_of_Michigan_Law_School-scaled.jpg";
import OverlaySection from "../common/styled/OverlaySection";

const aboutTexts = [
  "Talk to one of our best consultant today",
  "Our experts are able to find new growth",
  "Find more information our website",
];

const ContentSection = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  py: 4,
}));

const AboutItem = styled(Typography)(({ theme }) => ({
  fontFamily: "Shippori Mincho, serif",
  color: "#fff",
  fontWeight: 600,
}));

const AboutSection = () => {
  return (
    <OverlaySection id="about" overlayColor="#00000075" bgImage={BannerImg}>
      <Container sx={{ py: 8 }}>
        <ContentSection>
          <Box width={"45%"} zIndex={2}>
            <img
              src={aboutUsImg}
              width={"700px"}
              style={{ position: "absolute", bottom: 0 }}
            />
          </Box>
          <Box maxWidth={"45%"} zIndex={2}>
            <SectionHeading
              sx={{
                backgroundImage: `linear-gradient(45deg, rgb(240, 40, 73), transparent)`,
                fontSize: "60px",
              }}
            >
              {aboutUs.title}
            </SectionHeading>
            <Typography sx={{ fontSize: "30px", color: "#fff" }} pt={1}>
              Canada PR Immigration Consultant
            </Typography>
            <Typography
              variantMapping="p"
              pt={3}
              sx={{ fontFamily: "Poppins , sans-serif", color: "#fff" }}
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
        </ContentSection>
      </Container>
    </OverlaySection>
  );
};

export default AboutSection;
