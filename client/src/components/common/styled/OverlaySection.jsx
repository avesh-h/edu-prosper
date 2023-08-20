import { styled } from "@mui/material";

const MainSection = styled("div")(({ theme, ...props }) => ({
  backgroundImage: `url(${props.bgImage})`,
  height: props.height || "auto",
  backgroundSize: "cover",
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    height: "100%",
    backgroundColor: props.overlayColor,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
}));

const OverlaySection = ({ children, style, ...props }) => {
  return (
    <MainSection style={style} {...props}>
      {children}
    </MainSection>
  );
};

export default OverlaySection;
