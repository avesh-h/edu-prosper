import React from "react";
import Card from "../common/Card";
import { OurServices as content } from "../../static/OurServices";
import Container from "../common/styled/Container";
import SectionHeading from "../common/styled/SectionHeading";
import useTheme from "@mui/material/styles/useTheme";
import BlueButton from "../common/BlueButton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const OurServices = () => {
  return (
    <Box sx={{ backgroundColor: "#e6f3ff" }}>
      <Container>
        <SectionHeading>{content.heading}</SectionHeading>
        <Grid container rowGap={5} pt={5}>
          {content.services.map((data) => {
            return (
              <Grid item xs={3}>
                <Card data={data} />
                <Box
                  sx={{
                    textAlign: "center",
                    mt: 3,
                    mr: 2,
                  }}
                >
                  {/* <BlueButton sx={{ borderRadius: "15px" }}>
                    Read More
                  </BlueButton> */}
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;
