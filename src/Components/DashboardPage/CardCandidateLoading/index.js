import React from "react";
import { Grid, Card } from "@material-ui/core";

import Approved from "../../../assets/approved.svg";

import { useStyles } from "./style";

export default function CardCandidateLoading() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={3} component={Card} className={classes.card}>
      <img src={Approved} width="40" className={classes.img} alt="Approved" />
      Candidaturas em andamento
    </Grid>
  );
}
