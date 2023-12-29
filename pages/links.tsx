import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { Container, Paper, Typography, List, ListItem } from "@mui/material";
import Link from "../node_modules/next/link";
import Head from "next/head";
const Links: NextPage = () => {
  return (
    <>
      <Head>
        <title>Links | raspi0124.dev</title>
        <meta name="description" content="raspi0124.devの相互リンク" />
      </Head>
      <div className="linksContainer">
        <Typography
          sx={{ typography: { md: "h3", xs: "h3" } }}
          style={{ padding: "2rem" }}
          color="common.white"
        >
          相互リンク一覧 (ABC順)
        </Typography>
        <Typography style={{ padding: "2rem" }} color="common.white">
          (見た目が最悪なのでそのうち見た目をよくします)
        </Typography>
        <div style={{ padding: "2rem" }}>
          <Typography variant="h4" color="common.white">
            <a
              href="https://210o.net/"
              target="_blank"
              rel="noreferrer noopener friend met co-worker colleague neighbor"
              style={{ textDecoration: "underline" }}
            >
              210on (ぱうろさん)
            </a>
          </Typography>
        </div>
        <div style={{ padding: "2rem" }}>
          <Typography variant="h4" color="common.white">
            <a
              href="https://eka.earth/"
              target="_blank"
              rel="noreferrer noopener friend met co-worker colleague neighbor"
              style={{ textDecoration: "underline" }}
            >
              Ekasilicon
            </a>
          </Typography>
        </div>
        <div style={{ padding: "2rem" }}>
          <Typography
            variant="h4"
            color="common.white"
            style={{ textDecoration: "underline" }}
          >
            <a
              href="https://www.eniehack.net/~eniehack/"
              target="_blank"
              rel="noreferrer noopener friend met co-worker colleague neighbor"
            >
              Eniehack
            </a>
          </Typography>
        </div>
        <div style={{ padding: "2rem" }}>
          <Typography
            variant="h4"
            color="common.white"
            style={{ textDecoration: "underline" }}
          >
            <a
              href="https://lai-lai.info/"
              target="_blank"
              rel="noreferrer noopener friend met co-worker colleague neighbor"
            >
              らいらい
            </a>
          </Typography>
        </div>
        <div style={{ padding: "2rem" }}>
          <Typography
            variant="h5"
            color="common.white"
            style={{ textDecoration: "underline" }}
          >
            <Link href="/">←TOPに戻る</Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Links;
