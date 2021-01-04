import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footerLink: {
    "&:visited": {
      color: "blueviolet",
    },
  },
});

export default function FooterContent() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container>
        <Typography align="center">
          Copyright 2021 — Zion Alliance Church. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}
