import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import reactLogo from "../assets/react.svg";
import { useState } from "react";
import { useTheme } from "@mui/styles";

const TitleBar = () => {
  let hoverState = { hovered: false, id: null, text: "" };
  const [hovered, setHovered] = useState(hoverState);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      sx={
        !matches
          ? {
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5rem",
            }
          : {}
      }
    >
      <Grid
        item
        xs={matches ? 6 : 4.5}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {hovered.id === "home" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //01. {"<Home/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "home" })}
          >
            //01. {"<Home/>"}
          </Typography>
        )}
        {hovered.id === "portfolio" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //02. {"<Portfolio/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "portfolio" })}
          >
            //02. {"<Portfolio/>"}
          </Typography>
        )}
      </Grid>
      {!matches && (
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={reactLogo} />
          </Box>
        </Grid>
      )}

      <Grid
        item
        xs={matches ? 6 : 4.5}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        {hovered.id === "press" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //03. {"<Press/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "press" })}
          >
            //03. {"<About/>"}
          </Typography>
        )}
        {hovered.id === "contact" ? (
          <Button
            className="scale-in-center"
            variant="outlined"
            sx={{ borderRadius: "0px !important", maxWidth: "fit-content" }}
            onMouseLeave={() => setHovered({ ...hoverState, id: null })}
          >
            <Typography variant={matches ? "subtitle1" : "h6"}>
              //04. {"<Contact/>"}
            </Typography>
          </Button>
        ) : (
          <Typography
            variant={matches ? "subtitle1" : "h6"}
            sx={{ cursor: "pointer", paddingTop: "1rem" }}
            onMouseEnter={() => setHovered({ ...hoverState, id: "contact" })}
          >
            //04. {"<Contact/>"}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default TitleBar;
