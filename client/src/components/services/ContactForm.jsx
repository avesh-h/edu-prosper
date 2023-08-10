import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  MenuItem,
  useMediaQuery,
} from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'select country',
    contactNumber: '',
    message: '',
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
      name: '',
      email: '',
      country: 'select country',
      contactNumber: '',
      message: '',
    });
  };

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTabletScreen = useMediaQuery((theme) => theme.breakpoints.between('sm', 'md'));

  const getTypographyVariant = () => {
    if (isSmallScreen) {
      return 'h5';
    } else {
      return 'h4';
    }
  };

  return (
    <Container>
      <Grid container spacing={2}>
        {!isTabletScreen && !isSmallScreen &&(
          <Grid item xs={12} md={6}>
            <img
              src="imagepath"
              alt="Contact us"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        )}
        <Grid item xs={12} md={isTabletScreen ? 12 : 6}>
          <Typography variant={getTypographyVariant()} align="center" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit}>
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
                  select
                  fullWidth
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: (value) => (value === 'select' ? '' : value),
                  }}
                >
                  <MenuItem value="select" disabled>
                    Select country
                  </MenuItem>
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                </TextField>
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
                <TextField
                  label="Message"
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactForm;
