import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
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

const SocialMediaContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

const SocialIconBox = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  color:"white",
  alignItems: 'center',
  border: '1px solid white',
  borderRadius: '50%',
  padding: '4px',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
}));

const TagUsButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: 'transparent',
  border: '1px solid white',
  borderRadius: '50px',
  color: 'white',
  transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
}));

const SocialMediaCard = () => {
  return (
    <StyledCard className="footer-card">
      <CardContent>
        <CardTitle>Get Social</CardTitle>
        <SocialMediaContainer>
          <SocialIconBox className="social-icon">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook style={{ fontSize: '1.3rem', color: 'white' }} />
            </a>
          </SocialIconBox>
          <SocialIconBox className="social-icon">
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter style={{ fontSize: '1.3rem', color: 'white' }} />
            </a>
          </SocialIconBox>
          <SocialIconBox className="social-icon">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram style={{ fontSize: '1.3rem', color: 'white' }} />
            </a>
          </SocialIconBox>
        </SocialMediaContainer>
        <TagUsButton>Tag Us in your photos</TagUsButton>
      </CardContent>
    </StyledCard>
  );
};

export default SocialMediaCard;
