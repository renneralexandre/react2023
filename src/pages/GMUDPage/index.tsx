import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CardBasic from "components/CardBasic";
import BasicCard from "components/Cards/BasicCard";
import React from "react";

const GMUDPage = () => {
  return (
    <div>
      <p>Gestão de Mudanças</p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardBasic></CardBasic>
        </Grid>
        <Grid item xs={6}>
          <BasicCard
            title="Teste"
            details="O texto deste card é muito bonito de verdade. Meu Deus que card legal. Precisa de outra fonte. ..."
          ></BasicCard>
        </Grid>
        <Grid item xs={6}>
          <CardBasic></CardBasic>
        </Grid>
      </Grid>
    </div>
  );
};

export default GMUDPage;
