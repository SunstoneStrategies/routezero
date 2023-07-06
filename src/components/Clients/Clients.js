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
          <Grid item xs={6} sm={2.8}>
            <Box className="image1" my={6} p={6}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image2" my={6} p={6}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image3" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image4" my={6} p={5}></Box>
          </Grid>

          <Grid item xs={0} sm={2.8}>
            <Box className="image5" my={6} p={4}></Box>
          </Grid>
          <Grid item xs={0} sm={3}>
            <Box className="image6" my={6} p={4}></Box>
          </Grid>
          <Grid item xs={0} sm={3}>
            <Box className="image7" my={6} p={4}></Box>
          </Grid>
          <Grid item xs={0} sm={3}>
            <Box className="image8" my={6} p={4}></Box>
          </Grid>

          <Grid item xs={6} sm={2.8}>
            <Box className="image9" my={6} p={8}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image10" my={6} p={8}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image11" my={6} p={8}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image12" my={6} p={8}></Box>
          </Grid>

          <Grid item xs={6} sm={2.8}>
            <Box className="image13" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image14" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image15" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image16" my={6} p={5}></Box>
          </Grid>

          <Grid item xs={6} sm={2.8}>
            <Box className="image17" my={6} p={5}></Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box className="image21" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image19" my={6} p={5}></Box>
          </Grid>
          {/* <Grid item xs={6} sm={3}>
            <Box className="image20 padding" my={6} p={6}></Box>
          </Grid> */}

          <Grid item xs={6} sm={3}>
            <Box className="image25" my={6} p={5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image27" my={6} p={4.5}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image23" my={6} p={6}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image24" my={6} p={6}></Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box className="image18" my={5} p={7}></Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box className="image26" my={0} p={18}></Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box className="image22" my={7} p={8}></Box>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Box className="image28" my={4} p={8}></Box>
          </Grid>

          {/* 
          
         

         





        
           */}
        </StyledGrid>
      </div>
    </>
  );
}
