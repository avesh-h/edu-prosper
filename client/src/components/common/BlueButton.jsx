import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

const MainButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.mainColors.skyblue.dark,
  color: "#fff",
  "&:hover": {
    backgroundColor: theme.palette.mainColors.skyblue.dark,
    color: "#fff",
    transform: "scale(1.1)",
    transition: "all .3s ease-in-out",
  },
}));

const BlueButton = ({ children, sx, ...props }) => {
  return (
    <MainButton sx={{ px: 2, py: 1, ...sx }} {...props}>
      {children}
    </MainButton>
  );
};

export default BlueButton;
