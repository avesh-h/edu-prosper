import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
  border: '1px solid white',
  height: '200px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  fontSize: '0.875rem',
}));

const Icon = styled('span')(({ theme }) => ({
  marginRight: theme.spacing(1),
  fontSize: '1.1rem',
}));

const AddressContactCard = () => {
  return (
    <StyledCard className="footer-card">
      <CardContent>
        <CardTitle>Reservations Office</CardTitle>
        <ContactInfo>
          <Icon>
            <LocationOnIcon />
          </Icon>
          <Typography>123 Main St, Cityville, Country</Typography>
        </ContactInfo>
        <ContactInfo>
          <Icon>
            <PhoneIcon />
          </Icon>
          <Typography>(123) 456-7890</Typography>
        </ContactInfo>
        <ContactInfo>
          <Icon>
            <EmailIcon />
          </Icon>
          <Typography>info@example.com</Typography>
        </ContactInfo>
      </CardContent>
    </StyledCard>
  );
};

export default AddressContactCard;
