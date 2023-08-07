import React from "react";
import Box from "@mui/material/Box";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import { Typography } from "@mui/material";

const AboutSection = () => {
  return (
    <Box bgcolor={"#214a98"}>
      <Container>
        <SectionHeading
          sx={{
            color: "#fff",
            fontSize: "50px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          About Us
        </SectionHeading>
        <Box>
          <Typography variant="p">
            At Renee Overseas Excellence, we are a team of dedicated
            professionals who are committed to providing our clients with
            exceptional services in the areas of immigration, education, and
            career advancement. With over a decade of experience, we have helped
            hundreds of individuals and families achieve their dreams of
            studying or working abroad.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
