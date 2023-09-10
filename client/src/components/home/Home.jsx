// import React, { useState, useEffect } from 'react';
// import DrawerAppBar from '../NavigationBar';
// import { Container, Typography, Button } from '@mui/material';
// import { styled } from '@mui/system';
// import backgroundVideo from "../../assets/images/Untitled.mp4";
// import backgroundImage from "../../assets/images/Untitled.png";

// const HeroContainer = styled(Container)(({ theme }) => ({
//   textAlign: 'center',
//   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   position: 'relative',
//   overflow: 'hidden',
// }));

// const TextOverlay = styled('div')({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   alignItems: 'center',
//   color: 'white',
//   animation: 'fadeIn 1s ease',
// });

// const GradientOverlay = styled('div')({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
// });

// const fadeInAnimation = `
//   @keyframes fadeIn {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

// const textTransition = `
//   @keyframes textAnimation {
//     from {
//       font-size: 0;
//       opacity: 0;
//       transform: translateY(-20px);
//     }
//     to {
//       font-size: 24px;
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
// `;

// const HeroSection = () => {
//   const [videoEnded, setVideoEnded] = useState(false);

//   useEffect(() => {
//     const videoElement = document.getElementById('background-video');

//     if (videoElement) {
//       const handleVideoEnded = () => {
//         setVideoEnded(true);
//       };

//       videoElement.addEventListener('ended', handleVideoEnded);

//       return () => {
//         videoElement.removeEventListener('ended', handleVideoEnded);
//       };
//     }
//   }, []);

//   return (
//     <div>
//       <HeroContainer maxWidth="100%">
//         <DrawerAppBar />
//         {videoEnded ? (
//           <>
//             <img
//               src={backgroundImage}
//               alt="Background"
//               style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
//             />
//             <GradientOverlay />
//           </>
//         ) : (
//           <>
//             <video
//               autoPlay
//               muted
//               playsInline
//               style={{
//                 position: 'absolute',
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover', // Add this line to set object-fit to 'cover'
//               }}
//               id="background-video"
//             >
//               <source src={backgroundVideo} type="video/mp4" />
//             </video>
//             <GradientOverlay />
//           </>
//         )}
//         <TextOverlay>
//           <style>{fadeInAnimation}</style>
//           <style>{textTransition}</style>
//           <Typography
//             sx={{
//               fontFamily:"'Courgette', cursive",
//               ...fadeInAnimation,
//               animationFillMode: 'forwards',
//               animationDelay: '0.5s',
//             }}
//             variant="h3"
//             component="div"
//             gutterBottom
//           >
//             Welcome to Your Website
//           </Typography>
//           <Typography
//             sx={{
//               fontFamily: "'Stylish', sans-serif;",
//               fontSize: '24px',
//               ...fadeInAnimation,
//               animationFillMode: 'forwards',
//             }}
//             variant="subtitle1"
//             paragraph
//           >
//             Your compelling tagline or subheadline goes here.
//           </Typography>
//           <Button
//             sx={{
//               fontFamily: "'Stylish', sans-serif;",
//               background: 'rgba(0, 0, 0, 0.5)',
//               color: 'white',
//               ...fadeInAnimation,
//               animationFillMode: 'forwards',
//               "&:hover": {
//                 background: 'rgba(0, 0, 0, 0.7)',
//               },
//             }}
//             variant="contained"
//             size="large"
//           >
//             Get Started
//           </Button>
//         </TextOverlay>
//       </HeroContainer>
//     </div>
//   );
// };

// export default HeroSection;

import { Box, Button, Typography, styled } from "@mui/material";
import DrawerAppBar from "../NavigationBar";
import React, { useState } from "react";
import Slider from "react-slick";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { heroBanner } from "../../static/Hero";

const SocialMediaIconsContainer = styled("div")({
  position: "absolute",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  zIndex: 1,
});

const SocialMediaIcon = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "trasnperant",
  boxShadow: "transparenat",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const BannerSlider = styled(Slider)({
  height: "100vh",
  ".slick-dots": {
    position: "absolute",
    bottom: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  ".slick-dots li": {
    listStyle: "none",
    margin: "0 10px",
  },
  ".slick-dots li button": {
    width: "10px",
    height: "10px",
    backgroundColor: "white",
    listStyle: "none",
    borderRadius: "50%",
    border: "2px solid #fff",
    opacity: 0.7,
    zIndex: 1,
    transition: "opacity 0.3s",
  },
  ".slick-dots li.slick-active button": {
    opacity: 1,
  },
});

const iconStyle = {
  fontSize: "30px",
  color: "#fff",
};

const Home = () => {
  const sliderRef = React.createRef();
  const [isHovered, setIsHovered] = useState(false);

  const settings = {
    ref: sliderRef,
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "lightgray",
        position: "relative",
      }}
    >
      <DrawerAppBar />
      <BannerSlider {...settings}>
        {heroBanner.map((banner, ind) => (
          <Box
            key={ind}
            sx={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),url(${banner.img})`,
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                // textAlign: "center",
                top: "50%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                width: "35%",
                transition: "all 0.5s",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                fontSize={"20px"}
                fontWeight={600}
                color={"#fff"}
                fontFamily={"Archivo, sans-serif"}
                sx={{
                  textDecoration: "underline",
                }}
                letterSpacing={2}
              >
                {banner.title}
              </Typography>
              <Typography
                variant="body2"
                color={"#fff"}
                fontSize={"42px"}
                letterSpacing={3}
                fontFamily={"'Phudu', cursive;"}
                fontWeight={500}
                width={"100%"}
                sx={{
                  marginTop: "10px",
                }}
              >
                {banner.data}
              </Typography>
              <Box
                sx={{
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  fontSize={"28px"}
                  sx={{
                    padding: "10px 20px",
                    backgroundImage: isHovered
                      ? "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), linear-gradient(#d00014, #d00014)"
                      : "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), linear-gradient(#f02849, #f02849)",
                    marginTop: "15px",
                    color: "#fff",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),linear-gradient(#d00014, #d00014)",
                    },
                  }}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleMouseLeave}
                >
                  Check Eligibility
                </Button>
              </Box>
            </div>
          </Box>
        ))}
      </BannerSlider>

      <SocialMediaIconsContainer>
        <SocialMediaIcon
          href="https://www.facebook.com/profile.php?id=100095439190652&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF style={iconStyle} />
        </SocialMediaIcon>
        <SocialMediaIcon
          href="https://www.linkedin.com/company/prosper-educare-canada-inc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn style={iconStyle} />
        </SocialMediaIcon>
        <SocialMediaIcon
          href="https://instagram.com/prosper.educare?igshid=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={iconStyle} />
        </SocialMediaIcon>
      </SocialMediaIconsContainer>
    </Box>
  );
};

export default Home;
