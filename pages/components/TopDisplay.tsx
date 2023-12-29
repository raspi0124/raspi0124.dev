import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../../node_modules/next/link";
import Image from "next/image";
import raspi0124png from "../../public/raspi0124.png";

const TopDisplay = () => (
  <>
    <div className="homeContainer">
      <Grid container spacing={0}>
        <Grid item xs={12} md={3}>
          <Image
            className="unselectable"
            loader={({ src }) => src}
            src={raspi0124png}
            alt="raspi0124のアイコン デフォルメされたかわいい熊がすまし顔で青い鞄を持っている"
            layout="responsive"
            width={1000}
            height={1000}
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
            準備中
          </Typography>
        </Grid>
        <Grid item className="center" xs={12} md={3}>
          <Typography
            sx={{ typography: { md: "h3", xs: "h4" } }}
            color="common.white"
          >
            準備中
          </Typography>
        </Grid>
        <Grid item className="center" xs={12} md={3}>
          <Typography
            sx={{ typography: { md: "h3", xs: "h4" } }}
            color="common.white"
          >
            準備中
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

export default TopDisplay;
