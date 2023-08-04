import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mainColors: {
      skyblue: {
        dark: "#0082e6",
        light: "#48b0ff",
      },
      red: "#d00014",
    },
  },
  status: {
    danger: "#e48d8d",
    success: "#97d69d",
  },
});
