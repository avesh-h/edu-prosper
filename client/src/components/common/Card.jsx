import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import DummyImage from "../../assets/images/office-g1dbe7bcce_1280.jpg";

const cardSx = {
  maxWidth: 345,
  boxShadow: "0 0 10px 4px rgba(0, 4, 84, 0.08)",
  borderRadius: 4,
  transition: "all .3s ease-in-out",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "all .3s ease-in-out",
  },
};

export default function ServiceCard({ data }) {
  return (
    <Card sx={cardSx}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={DummyImage}
          alt="green iguana"
        />
        <CardContent sx={{ bgcolor: "#fff" }}>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
