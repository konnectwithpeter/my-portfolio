import {
  Box,
  CircularProgress,
  Grid,
  Typography,
  Paper,
  CardMedia,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import reactLogo from "../assets/react.svg";
import projects from "../assets/project.json";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactTyped from "react-typed";
import wixDemo from "../assets/demos/wix-demo.jpeg";
import demo2 from "../assets/demos/demo2.mp4";

let useStyles = makeStyles({
  container: {
    backgroundColor: "black",
    borderRadius: "0px",
    border: "1px solid #fff",
    padding: "1rem",
    display: "flex",
    flexDirection: "Column",
    gap: "1.5 rem",
  },
});

const Portfolio = () => {
  let classes = useStyles();
  const loopCounter = (counter) => {
    const a = 0;
    for (counter < 100; counter++; ) {
      console.log(counter);
      if (counter == 100) {
        counter = 0;
      }
      let a = counter;
    }

    return a;
  };

  console.log(projects);

  return (
    <>
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
            My Portfolio
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
          </Typography>
        </Box>
        <Grid container spacing={8}>
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>{" "}
          <Grid item md={4}>
            <Paper elevation={8} className={classes.container}>
              <Typography
                style={{
                  fontSize: "32px",
                  color: "#185b33",
                  fontWeight: "bold",
                }}
              >
                Clinic/Pharmacy POS
              </Typography>
              <CardMedia
                component="video"
                autoPlay={true}
                loop={true}
                muted={true}
                controls
                alt="wix demo"
              >
                <source src={demo2} type="video/mp4" />
              </CardMedia>

              <Typography>
                Every effort has been jsb sfjbdf djfhdfhd shhfsid sisjf dfdfihv
                didf in the preparation of this book to ensure the accuracy of
                the information presented.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Portfolio;
