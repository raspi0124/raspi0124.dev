import React from "react";
import Typography from "@mui/material/Typography";

interface ExternalLinkProps {
  href: string;
  name: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, name }) => (
  <div style={{ padding: "2rem" }}>
    <Typography variant="h4" color="common.white">
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener friend met co-worker colleague neighbor"
        style={{ textDecoration: "underline" }}
      >
        {name}
      </a>
    </Typography>
  </div>
);

export default ExternalLink;
