import React from "react";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const Heading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
}));

const headingSx = {
  color: "#000",
  fontSize: "50px",
  fontFamily: "Shippori Mincho, serif",
  width: "50%",
  padding: "0 30px",
  borderRadius: "20px",
  color: "#fff",
};

const SectionHeading = ({ children, sx, ...props }) => {
  return (
    <Heading variant="h2" sx={{ ...headingSx, ...sx }} {...props}>
      {children}
    </Heading>
  );
};

export default SectionHeading;
