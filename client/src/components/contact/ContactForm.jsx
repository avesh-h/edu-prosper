import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import SectionHeading from "../common/styled/SectionHeading";
import Container from "../common/styled/Container";
import ContactFormImg from "../../assets/images/Contact-us.jpg";

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
    <div id="contacts">
      <Container sx={{ py: 4 }}>
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
                backgroundImage: `linear-gradient(45deg, #214a98, transparent)`,
              }}
            >
              Contact Us
            </SectionHeading>
            <form onSubmit={handleSubmit} style={{ paddingTop: "30px" }}>
              <Grid container spacing={2}>
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
    </div>
  );
};

export default ContactForm;
