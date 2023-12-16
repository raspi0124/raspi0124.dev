import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../../node_modules/next/link";
const TopDisplay: NextPage = () => {
  return (
    <>
      <div className="homeContainer">
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <img
              src="https://raspi0124.dev/raspi0124.png"
              min-height="50vh"
              width="100%"
            />
          </Grid>
          <Grid className="center" item xs={12} md={9}>
            <Box>
              <Typography
                sx={{ typography: { md: "h1", xs: "h2" } }}
                style={{ paddingBottom: "2rem" }}
                color="common.white"
              >
                raspi0124
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid className="menu" container spacing={3}>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              PROFILE (準備中)
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              WORKS (準備中)
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              CONTACT (準備中)
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              <Link href="/links">LINKS</Link>
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TopDisplay;
