import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
const Image = dynamic(import("mui-image"), { ssr: false }); // Async API cannot be server-side rendered
const Home: NextPage = () => {
  return (
    <>
      <Grid container spacing={0} alignItems="center" justify="center">
        <Grid item xs={12} md={3}>
          <img
            src="https://raspi0124.dev/raspi0124.png"
            width="100%"
            max-height="75vh"
          />
        </Grid>
        <Grid className="center" item xs={12} md={9}>
          <Box y={2}>
            <Typography variant="h1" color="common.white">
              raspi0124
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
