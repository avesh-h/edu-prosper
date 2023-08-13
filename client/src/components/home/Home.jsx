import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CardContent, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({  
  cardContent: {
    textAlign: 'center',
    height: '70vh',
    [theme.breakpoints.down('sm')]: {
      height: '60vh', 
    },
  },
  cardRoot: {
    border: 'none',
    boxShadow: '0px',
  },
}));

const Home = () => {
  const classes = useStyles();

  const cardsData = [
    { title: 'Card 1', content: 'This is the content of Card 1.', backgroundImage: 'yellow' },
    { title: 'Card 2', content: 'This is the content of Card 2.', backgroundImage: 'red' },
    { title: 'Card 3', content: 'This is the content of Card 3.', backgroundImage: 'blue' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      sx={{
        margin: 'auto',
        overflow: 'hidden',
        backgroundColor: 'lightgray', 
      }}
    >
      <Slider {...settings}>
        {cardsData.map((card, index) => (
          <div key={index} className={classes.card} style={{ background: card.backgroundImage }}>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.content}
              </Typography>
            </CardContent>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Home;
