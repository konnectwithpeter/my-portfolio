import { Paper, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/styles";
import TitleBar from "./components/TitleBar";
import LandingText from "./components/LandingText";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { useEffect, useRef } from "react";
import { useInView, motion, useAnimate } from "framer-motion";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimate();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Paper
      elevation={4}
      sx={
        matches
          ? {
              margin: 0,
              padding: "1rem",
              backgroundColor: "#020404",
              color: "#f5f5f5",
            }
          : {
              margin: 0,
              padding: "5rem",
              backgroundColor: "#020404",
              color: "#f5f5f5",
            }
            
      }
    >
      <TitleBar />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <LandingText />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <Contact />
      </motion.div>
    </Paper>
  );
}

export default App;
