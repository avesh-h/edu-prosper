import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
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

const OfficeHoursText = styled(Typography)(({ theme }) => ({
  fontSize: '0.9375rem', // Adjusted font size for days
  marginBottom: theme.spacing(1),
}));

const OfficeHoursCard = () => {
  return (
    <StyledCard className="footer-card">
      <CardContent>
        <CardTitle>Office Hours</CardTitle>
        <OfficeHoursText>Monday to Friday</OfficeHoursText>
        <OfficeHoursText>9:00 AM to 5:00 PM</OfficeHoursText>
        <OfficeHoursText>Saturday</OfficeHoursText>
        <OfficeHoursText>10:00 AM to 1:00 PM</OfficeHoursText>
      </CardContent>
    </StyledCard>
  );
};

export default OfficeHoursCard;
