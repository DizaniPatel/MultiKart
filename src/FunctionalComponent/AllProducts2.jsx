import React from "react";
import { Box } from "@mui/system";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Card } from "@mui/material";

export default function AllProducts2() {
  return (
    <Box sx={{ pt: 10, width: "100%", pb: 10 }}>
      <Grid container className="imageGrid" spacing={2}>
        <Grid
          xs={12}
          sm={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            p: 1,
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
