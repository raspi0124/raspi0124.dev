import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { Container, Paper, Typography, List, ListItem } from "@mui/material";
import Link from "../node_modules/next/link";
import Head from "next/head";
import ExternalLink from "./components/ExternalLink";
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
        <ExternalLink href="https://210o.net/" name="210on (ぱうろ)" />
        <ExternalLink href="https://eka.earth/" name="Ekasilicon" />
        <ExternalLink
          href="https://www.eniehack.net/~eniehack/"
          name="Eniehack"
        />
        <ExternalLink href="https://lai-lai.info/" name="らいらい" />
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
