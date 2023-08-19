import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AddressContactCard from './AddressContactCard';
import OfficeHoursCard from './OfficeHoursCard';
import SocialMediaCard from './SocialMediaCard';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: 'black',
  color: 'white',
}));

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: '40px 0',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  fontFamily: 'Alegreya SC, serif',
}));

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Alegreya+SC:wght@500&family=Anek+Kannada&family=Dancing+Script:wght@500&family=Fredoka&family=My+Soul&family=Style+Script&family=Stylish&display=swap');
          `}
        </style>
        <Title variant="h4" gutterBottom>
          OUR OFFICES
        </Title>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <AddressContactCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OfficeHoursCard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SocialMediaCard />
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
