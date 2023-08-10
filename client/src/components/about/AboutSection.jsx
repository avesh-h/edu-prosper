import React from "react";
import Box from "@mui/material/Box";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import { Typography } from "@mui/material";
import aboutUsImg from "../../assets/images/about-us-2.png";
import { aboutUs } from "../../static/AboutUs";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";

const headingSx = {
  color: "#000",
  fontSize: "50px",
  fontFamily: "Montserrat, sans-serif",
  width: "50%",
  padding: "0 30px",
  borderRadius: "20px",
  color: "#fff",
};

const aboutTexts = [
  "Talk to one of our best consultant today",
  "Our experts are able to find new growth",
  "Find more information our website",
];

const AboutSection = () => {
  return (
    <Box>
      <Container>
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={4}
        >
          <Box width={"45%"}>
            <img src={aboutUsImg} width={"600px"} />
          </Box>
          <Box maxWidth={"45%"}>
            <SectionHeading
              sx={{
                ...headingSx,
                fontFamily: "Montserrat, sans-serif",
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
                  <Typography
                    fontFamily={"Poppins , sans-serif"}
                    color={"#214a98"}
                    fontWeight={600}
                  >
                    {t}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
