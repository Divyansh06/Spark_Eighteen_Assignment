import React from "react";
import { Card, Grid, Button } from "@material-ui/core";

function Header() {
  return (
    <Card>
      <Grid container justify={"center"}>
        <Grid item md={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h3 style={{ color: "#a4508b", marginLeft: -100 }}>LOGO</h3>
          </div>
        </Grid>
        <Grid item md={4} style={{ color: "#4b0082", padding: 5 }}>
          <Button color={"inherit"} style={{ margin: 10 }}>
            Home
          </Button>
          <Button color={"inherit"} style={{ margin: 10 }}>
            My Portfolio
          </Button>
          <Button color={"inherit"} style={{ margin: 10 }}>
            Clients
          </Button>
          <Button color={"inherit"} style={{ margin: 10 }} variant={"outlined"}>
            Get in Touch
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Header;
