import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

const SectionHeading = ({ children, sx, ...props }) => {
  return (
    <Heading variant="h2" sx={sx} {...props}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
