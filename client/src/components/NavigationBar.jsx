import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Slide,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CanadaFlag from "../assets/images/canada waving flag/Waving flag/for a white background/Canada-xs.gif";
import UKFlag from "../assets/images/united-kingdom waving flag/Waving flag/for a white background/United-Kingdom-xs.gif";
import USAFlag from "../assets/images/united-states waving flag/Waving flag/for a white background/United-States-xs.gif";
import { Link } from "react-scroll";
import CanadaIcon from "../assets/images/canada-icon-website.png";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? "#214a98d1" : "#fff",
  width: "100%",
  transition: "background-color 0.7s ease-in-out",
  boxShadow: "none",
  [theme.breakpoints.up("sm")]: {
    marginLeft: 240,
  },
}));

const ScrollableLinkBtn = styled(Button)({
  cursor: "pointer",
  color: "#fff",
  height: "60px",
  transition: "all .1s ease-in-out",
  background: "transparent",
  "&:hover": {
    borderBottom: "2px solid #fff",
    borderRadius: "0",
    transition: "all .1s ease-in-out",
  },
});

const LogoTxt = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: { xs: "center", sm: "left" },
  fontFamily: "Arial, sans-serif",
  position: "relative",
  paddingLeft: "50px",
  "&::before": {
    content: "''",
    backgroundImage: `url(${CanadaIcon})`,
    width: "40px",
    height: "40px",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundPosition: "left center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
}));

const countries = [
  { name: "Canada", gifUrl: CanadaFlag },
  { name: "United Kingdom", gifUrl: UKFlag },
  { name: "USA", gifUrl: USAFlag },
];

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: 240,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 240,
    transition: "width 1s ease-in-out",
  },
}));

const ResponsiveNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );
  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Toolbar>
          {(isSmallScreen || isTabletScreen) && (
            <IconButton
              edge="start"
              color="error"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          )}
          <LogoTxt
            variant="h6"
            sx={{
              color: scrolled ? "#fff" : "#000",
            }}
          >
            PROSPER
          </LogoTxt>
          {!isSmallScreen && !isTabletScreen && (
            <div style={{ display: "flex", alignItems: "center" }}>
              {countries.map((country) => (
                <div
                  key={country.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "5px",
                  }}
                >
                  <img
                    src={country.gifUrl}
                    alt={country.name}
                    style={{ width: "30px", height: "20px", margin: "2px" }}
                  />
                  <Button style={{ color: scrolled ? "white" : "black" }}>
                    {country.name}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </Toolbar>
      </StyledAppBar>
      <div style={{ marginTop: "64px" }}>
        {!isSmallScreen && !isTabletScreen && (
          <Toolbar
            variant="dense"
            sx={{
              backgroundColor: "#d00014",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
              <ScrollableLinkBtn>Home</ScrollableLinkBtn>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <ScrollableLinkBtn>About</ScrollableLinkBtn>
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <ScrollableLinkBtn>Services</ScrollableLinkBtn>
            </Link>
            <Link
              to="contacts"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <ScrollableLinkBtn>Contacts</ScrollableLinkBtn>
            </Link>
          </Toolbar>
        )}
      </div>
      {isSmallScreen && (
        <StyledDrawer
          variant="temporary"
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </StyledDrawer>
      )}
    </div>
  );
};

export default ResponsiveNavBar;
