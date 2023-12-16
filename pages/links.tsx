import type { NextPage } from "next";
import { Grid } from "@mui/material";
import { Container, Paper, Typography, List, ListItem } from "@mui/material";
import Link from "../node_modules/next/link";
const TopDisplay: NextPage = () => {
  return (
    <>
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
              href="https://eka.earth/"
              rel="friend met co-worker colleague neighbor"
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
              rel="friend met co-worker colleague neighbor"
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
              rel="friend met co-worker colleague neighbor"
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

export default TopDisplay;
