import React from "react";
import { Grid, styled, Box } from "@mui/material";
import "./style.css";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    "& .MuiGrid-item": {
      width: "100%",
    },
  },
}));

export default function Clients() {
  return (
    <>
      <div>
        <div className="spon">SPONSORED BY:</div>
        <StyledGrid
          container
          bgcolor="#FFFFFF"
          my={5}
          p={5}
          sx={{ marginTop: "-20px" }}
        >
          <Grid item xs={6} sm={3}>
            <Box className="image1" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image2" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image3" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image4" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image5" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image6" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image7" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image8" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image9" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image10" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image11" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Box className="image12" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image13" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={2.4}>
            <Box className="image14" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={3} sm={2.4}>
            <Box className="image15" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={3} sm={2}>
            <Box className="image16" my={5} p={5}></Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="image17" my={5} p={6}></Box>
          </Grid>

          <Grid item xs={3}>
            <Box className="image18" my={5} p={5}></Box>
          </Grid>
          <Grid item xs={3}>
            <Box className="image19" my={5} p={5}></Box>
          </Grid>
          <Grid item  >
            <Box className="image20 padding"   ></Box>
          </Grid>
          <Grid item xs={2}>
            <Box className="image21" my={5} p={5}></Box>
          </Grid>
        </StyledGrid>
      </div>
    </>
  );
}
