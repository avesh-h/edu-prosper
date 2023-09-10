import React, { useState, useRef, useEffect } from "react";
import { Box, styled, Typography } from "@mui/material";
import CountUp from "react-countup";
import SectionHeading from "../styled/SectionHeading";
import OverlaySection from "../styled/OverlaySection";

const CounterContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",
  backgroundColor: "rgb(240, 40, 73)",
  color: "white",
  padding: "60px 0",
});

const CounterBox = styled("div")({
  textAlign: "center",
  position: "relative",
});

const CounterValue = styled(Typography)({
  fontSize: "130px",
  fontWeight: 400,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontFamily: "Cinzel,serif",
});

const CounterLabel = styled(Typography)({
  fontSize: "32px",
  fontWeight: "bold",
  color: "black",
  zIndex: 1,
  position: "absolute",
  top: "70%",
  left: "50%",
  transform: "translate(20%, -50%)",
});

const Counter = ({ value, label, inView }) => (
  <CounterBox>
    {inView && (
      <>
        <CounterValue>
          <CountUp
            start={0}
            end={value}
            duration={2.5}
            separator=","
            delay={0}
          />
        </CounterValue>
        <CounterLabel>{label}</CounterLabel>
      </>
    )}
  </CounterBox>
);

const Count = () => {
  const [studentCount, setStudentCount] = useState(250);
  const [visitorCount, setVisitorCount] = useState(1250);
  const [inView, setInView] = useState(false);

  const observerRef = useRef();

  const handleObserver = (entries) => {
    const entry = entries[0];
    setInView(entry.isIntersecting);
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    observerRef.current.observe(document.getElementById("ourNetwork"));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <OverlaySection id="ourNetwork">
      <CounterContainer>
        <SectionHeading
          sx={{
            marginBottom: "40px",
          }}
        >
          Our networks
        </SectionHeading>
        <Box
          display="flex"
          flexDirection="row"
          width="60%"
          padding="40px 0"
          justifyContent="space-around"
          sx={{
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <Counter value={studentCount} label="Students" inView={inView} />
          <Counter value={visitorCount} label="Visitors" inView={inView} />
        </Box>
      </CounterContainer>
    </OverlaySection>
  );
};

export default Count;
