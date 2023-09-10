import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  useScrollTrigger,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  // backgroundImage: scrolled
  // ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), linear-gradient(#f02849, #f02849)"
  // : "transparent",
  backgroundColor: scrolled ? "#b2112b7d" : "transparent",
  transition: "background-color 0.3s ease",
  boxShadow: "none",
  border: "none",
  // "&:hover": {
  //   backgroundColor:"#f02849"
  // },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  // fontFamily: "'Amatic SC', cursive",
  fontFamily: "'Phudu', cursive;",
  color: "#fff",
  // fontSize: "24px",
  fontSize: "18PX",
  fontWeight: 400,
  textDecoration: "none",
  transition: "font-size 0.2s ease, text-decoration 0.2s ease",
  "&:hover": {
    textDecoration: "underline",
    // fontSize: "26px",
    fontSize: "20px",
  },
}));

const AnimatedTitle = styled(Typography)(({ theme, animate }) => ({
  // fontFamily: "'Amatic SC', cursive",
  fontFamily: "'Phudu', cursive;",
  // fontSize: animate ? "48px" : "0"
  paddingLeft: "20px",
  fontSize: animate ? "36px" : "0",
  opacity: animate ? 1 : 0,
  transform: animate ? "translateY(0)" : "translateY(-20px)",
  transition: "font-size 0.5s ease, opacity 0.5s ease, transform 0.5s ease",
  "&:hover": {
    fontSize: "38px",
  },
}));

const DrawerAppBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    setScrolled(trigger);

    const timeout = setTimeout(() => {
      setAnimateTitle(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [trigger]);

  return (
    <Box>
      <StyledAppBar position="fixed" sx={{ color: "#fff" }} scrolled={scrolled}>
        <Toolbar>
          <AnimatedTitle
            animate={animateTitle}
            variant="h2"
            fontWeight={500}
            // sx={{ fontSize: "48px", fontFamily: "'Amatic SC', cursive", cursor: 'pointer' }}
            sx={{
              fontSize: "34px",
              fontFamily: "'Phudu', cursive;",
              cursor: "pointer",
            }}
          >
            PROSPER
          </AnimatedTitle>
          <Box flexGrow={1} />
          <CustomButton>Home</CustomButton>
          <CustomButton>About</CustomButton>
          <CustomButton>Services</CustomButton>
          <CustomButton>Contact</CustomButton>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default DrawerAppBar;
