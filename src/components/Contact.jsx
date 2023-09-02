import {
  Box,
  Button,
  Fab,
  Grid,
  Typography,
  Modal,
  TextField,
  Link,
} from "@mui/material";
import { useState } from "react";
import { SendRounded } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
            {"<h2>"}
          </Typography>

          <Typography variant="h2">
            Connect with me
            <sub style={{ fontSize: "16px", color: "#a3a2a4" }}>{"</h2>"}</sub>
          </Typography>
        </Box>
        <Grid container sx={{ flex: 1, width: "100%" }}>
          <Grid
            item
            lg={3}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  padding: "2rem",
                  textTransform: "none !important",
                }}
                onClick={handleOpen}
              >
                <div>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"<>"}
                  </Typography>
                  <Typography variant="h5">E-Mail</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Box>
              <Button
                variant="outlined"
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
                  <Typography variant="h5">Mail</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box>
              <Button
                variant="outlined"
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
                  <Typography variant="h5">Github</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "flex-end",
            }}
          >
            <Box>
              <Button
                component={Link}
                sx={{
                  borderRadius: "50%",
                  padding: "2rem",
                  textTransform: "none !important",
                }}
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://github.com/konnectwithpeter?tab=repositories"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"<>"}
                  </Typography>
                  <Typography variant="h5">Github</Typography>
                  <Typography style={{ fontSize: "16px", color: "#a3a2a4" }}>
                    {"</>"}
                  </Typography>
                </div>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Send an E-mail
          </Typography>
          <Typography >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            autoFocus
          />
          <Box sx={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="contained" endIcon={<SendRounded />}>
              Send
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
