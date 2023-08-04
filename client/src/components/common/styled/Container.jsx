import React from "react";
import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

const MainContainer = styled(Box)(({ theme }) => ({
  padding: "0 25px",
}));

const Container = ({ children, sx, ...props }) => {
  return (
    <MainContainer sx={sx} {...props}>
      {children}
    </MainContainer>
  );
};

export default Container;
