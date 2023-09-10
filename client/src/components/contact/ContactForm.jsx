import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  useMediaQuery,
  styled,
} from "@mui/material";
import SectionHeading from "../common/styled/SectionHeading";
import Container from "../common/styled/Container";
import ContactFormImg from "../../assets/images/contact-us.png";
import BannerImg from "../../assets/images/banner-2.webp";
import OverlaySection from "../common/styled/OverlaySection";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "select country",
    contactNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      country: "select country",
      contactNumber: "",
      message: "",
    });
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.between("sm", "md")
  );

  const getTypographyVariant = () => {
    if (isSmallScreen) {
      return "h5";
    } else {
      return "h4";
    }
  };

  return (
    <OverlaySection id="contacts" overlayColor="#292020c2" bgImage={BannerImg}>
      <Container sx={{ py: 4, position: "relative", zIndex: 1 }}>
        <Grid container spacing={2}>
          {!isTabletScreen && !isSmallScreen && (
            <Grid item xs={12} md={6} textAlign={"center"}>
              <img
                src={ContactFormImg}
                alt="Contact us"
                style={{ maxWidth: "500px", maxHeight: "500px" }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={isTabletScreen ? 12 : 6}>
            <SectionHeading
              sx={{
                backgroundImage: `linear-gradient(45deg, rgb(240, 40, 73), transparent)`,
              }}
            >
              Contact Us
            </SectionHeading>
            <form onSubmit={handleSubmit} style={{ paddingTop: "30px" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  "& .MuiTextField-root": {
                    color: "#fff",
                    border: "1px solid #fff",
                  },
                  "& .MuiFormLabel-root.MuiInputLabel-root": {
                    color: "#fff",
                  },
                }}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    fullWidth
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    fullWidth
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Contact Number"
                    fullWidth
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    type="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </OverlaySection>
  );
};

export default ContactForm;
