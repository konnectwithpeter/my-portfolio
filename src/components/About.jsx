import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import "react-multi-carousel/lib/styles.css";

const About = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
          {"<h2>"}
        </Typography>

        <Typography variant="h2">
          About
          <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
        </Typography>
      </Box>
      <Grid container spacing={8}>
      <Grid item md={6}>
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "black",
              borderRadius: "0px",
              border: "1px solid #fff",
              padding: "1rem",
            }}
          >
            <Typography style={{ color: "#a3a2a4" }}>
              {"<h2>"}
              <span style={{ color: "#019e36" }}>
                Entreprenuer an Developer
              </span>
              {"</h2>"}
            </Typography>
            <br />
            <Divider sx={{ backgroundColor: "white" }} /> <br />
            <Typography sx={{ color: "white" }}>
              Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
              didf in the preparation of this book to ensure the accuracy of the
              information presented. However, the information contained in this
              book is sold without warranty, either express or implied. Neither
              the author, nor Packt Publishing or its dealers and distributors,
              will be held liable for any damages caused or alleged to have been
              caused directly or indirectly by this book.
            </Typography>
          </Paper>
        </Grid>   <Grid item md={6}>
          <Paper
            elevation={8}
            sx={{
              backgroundColor: "black",
              borderRadius: "0px",
              border: "1px solid #fff",
              padding: "1rem",
            }}
          >
            <Typography style={{ color: "#a3a2a4" }}>
              {"<h2>"}
              <span style={{ color: "#019e36" }}>
                Entreprenuer an Developer
              </span>
              {"</h2>"}
            </Typography>
            <br />
            <Divider sx={{ backgroundColor: "white" }} /> <br />
            <Typography sx={{ color: "white" }}>
              Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
              didf in the preparation of this book to ensure the accuracy of the
              information presented. However, the information contained in this
              book is sold without warranty, either express or implied. Neither
              the author, nor Packt Publishing or its dealers and distributors,
              will be held liable for any damages caused or alleged to have been
              caused directly or indirectly by this book.
            </Typography>
          </Paper>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default About;
