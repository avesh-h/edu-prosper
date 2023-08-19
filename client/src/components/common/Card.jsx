import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";

const cardSx = {
  border: "2px solid #fff",
  boxShadow: "0 0 10px 4px rgba(0, 4, 84, 0.08)",
  borderRadius: 4,
  backgroundColor: "transparent",
  "& .MuiCardMedia-root.MuiCardMedia-media": {
    transition: "all .3s ease-in-out",
  },
  "& .arrow": {
    width: "100%",
    textAlign: "end",
    transform: "translateX(-10px)",
    transition: "all .3s ease-in-out",
    color: "#fff",
  },
  "& .MuiTypography-root.MuiTypography-h5": {
    color: "#fff",
  },
  "&:hover": {
    "& .arrow": {
      transition: "all .3s ease-in-out",
      transform: "translateX(0px)",
      color: "#fff",
    },
    "& .MuiCardMedia-root.MuiCardMedia-media": {
      transform: "scale(1.1)",
      transition: "all .3s ease-in-out",
    },
    "& .MuiCardContent-root": {
      backgroundColor: "#b9040442",
      color: "#fff",
    },
    "& .MuiTypography-root.MuiTypography-h5": {
      color: "#fff",
    },
    border: "2px solid #fff",
  },
};

export default function ServiceCard({ data }) {
  return (
    <Card sx={cardSx}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={"22px"}
            fontWeight={600}
            fontFamily={"Archivo, sans-serif"}
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color={"#fff"}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <div className="arrow">
            <ArrowForwardIcon
              sx={{
                marginTop: "20px",
                height: "30px",
                width: "30px",
              }}
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
