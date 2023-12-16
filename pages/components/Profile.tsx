import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/Image";
import Link from "next/link";
const Profile: NextPage = () => {
  return (
    <>
      <div className="homeContainer">
        <Grid container spacing={0}>
          <Grid item xs={12} md={3}>
            <Image
              src="/raspi0124.png"
              min-height="50vh"
              fill
              alt="raspi0124のアイコン デフォルメされたかわいい熊が眠そうな顔で青い鞄を持っている"
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
              Profile
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              WORKS2
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              WORKS3
            </Typography>
          </Grid>
          <Grid item className="center" xs={12} md={3}>
            <Typography
              sx={{ typography: { md: "h3", xs: "h4" } }}
              color="common.white"
            >
              WORKS4
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Profile;
