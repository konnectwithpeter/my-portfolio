import {
  Grid,
  Typography,
  CircularProgress,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import "./App.css";
import { useTheme } from "@mui/styles";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";
import ReactTyped from "react-typed";

const LandingText = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container spacing={3} sx={{ maxWidth: "100vw" }}>
      <Grid
        item
        lg={7}
        xs={12}
        sm={12}
        md={7}
        sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}
      >
        <Typography sx={{ color: "#019e36" }}>
          <span style={{ color: "#a3a2a4" }}>{"<p>"}</span>
          <ReactTyped
            strings={["This is"]}
            typeSpeed={100}
            loop={false}
            showCursor={false}
          />
          <span style={{ color: "#a3a2a4" }}>{"</p>"}</span>
        </Typography>
        <Typography variant={matches ? "h3" : "h1"} sx={{ color: "#185b33" }}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2rem",
            }}
          >
            <span style={{ fontSize: "16px", color: "#a3a2a4" }}>{"<h1>"}</span>
            <span style={{ marginLeft: "2rem", fontStyle: "bold" }}>Peter</span>
            <span style={{ marginLeft: "2rem", fontWeight: "bold" }}>
              Njoroge
            </span>
            <span style={{ color: "#a3a2a4", fontSize: "16px" }}>
              {"</h1>"}
            </span>
          </span>
        </Typography>
        <Typography style={{ color: "#a3a2a4" }}>
          {"<h2>"}
          <span style={{ color: "#019e36" }}>Entreprenuer an Developer</span>
          {"</h2>"}
        </Typography>
      </Grid>
      <Grid
        item
        lg={5}
        xs={12}
        sm={12}
        md={5}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="outlined"
          className="rotate-scale-up"
          sx={{
            borderRadius: "50%",
            padding: "2rem",
            textTransform: "none !important",
          }}
        >
          <div>
            <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
              {"<>"}
            </Typography>
            <Typography variant="h5">
              Download
              <br /> CV
            </Typography>
            <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
              {"</>"}
            </Typography>
          </div>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingText;
