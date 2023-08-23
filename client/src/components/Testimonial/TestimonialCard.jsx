import React from "react";
import { Card, CardContent, Typography, styled } from "@mui/material";

const TestimonialContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:"70%",
});

const TestimonialCardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap:"20px",
  padding:"20px",
  width:"fit-content",
  margin: "40px", 
  border:"1px solid red",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const TestimonialCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
});

const TestimonialText = styled(Typography)({
  fontStyle: "italic",
  fontSize: "16px",
  textAlign: "center",
  marginBottom: "10px",
});

const TestimonialName = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
});

const TestimonialImage = styled("img")({
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "50%",
  marginBottom: "15px",
});

const TestimonialCard = ({ text, name, image }) => {
  return (
    <TestimonialContainer>
      <TestimonialCardContainer>
        <TestimonialImage src={image} alt={name} />
        <TestimonialCardContent>
          <TestimonialText>"{text}"</TestimonialText>
          <TestimonialName>{name}</TestimonialName>
        </TestimonialCardContent>
      </TestimonialCardContainer>
    </TestimonialContainer>
  );
};

export default TestimonialCard;
