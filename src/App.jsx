import { Button, Grid } from "@mui/material";
import "./App.css";
import Buttons from "./components/buttons";
import { useState } from "react";

export const HomeView = {
  home: {
    width: "90rem",
    height: "64rem",
    padding: "0 0 6.125rem",
    backgroundColor: "#fcfcfc",
  },
  rectangle: {
    width: "90rem",
    height: " 7.125rem",
    margin: "0 0 4.375rem",
    padding: "2.75rem 67.625rem 2.625rem 9.375rem",
    boxShadow: "0 1px 4px 0 var(--navy-12)",
    backgroundImage: "linear-gradient(to bottom, #ececec -32%, #fff 124%)",
  },
  title: {
    width: "13rem",
    height: "1.75rem",
    objectFit: "contain",
    fontFamily: "Baskerville",
    fontSize: "1.75rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1",
    letterSpacing: "normal",
    color: "#3b3b3b",
  },
  button: {
    width: "6.125rem",
    height: "1.938rem",
    padding: "0.188rem 2.438rem 0 2.5rem",
    borderRadius: "2px",
    border: "solid 1px var(--azure)",
  },
  textButton: {
    width: "4.063rem",
    height: "1.75rem",
    fontFamily: "Roboto",
    fontSize: "1rem",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.75",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#606060",
  },
  butttonContainer: {
    display: "flex",
    flexWrap: "wrap",

    margin: "0 0.5rem",
    padding: "0.375rem 0.75rem 0.25rem",
    borderRadius: "6px",
    border: "solid 1px #d9d9d9",
    backgroundColor: "#fff",
  },
  buttonOfPages: {
    width: "2rem",
    height: "2rem",
    margin: "0 0.5rem",
    padding: "0.375rem 0.75rem 0.25rem",
    borderRadius: "6px",
    border: "solid 1px #d9d9d9",
    backgroundColor: "#fff",
  },
  boxOfPosts: {
    width: "34.375rem",
    height: "5.625rem",
    margin: "1.125rem 2.5rem 1.875rem 9.375rem",
    padding: "0 0 0 1.625rem",
    opacity: "0.8",
    borderRadius: "6px",
    border: "solid 1px #979797",
    backgroundColor: "#fff",
    transition: "background-color 0.3s ease",
  },
};

function App() {
  const [hovered, setHovered] = useState(false);
  return (
    <>
      <Grid style={HomeView.home}>
        <Grid style={HomeView.rectangle}>
          <span style={HomeView.title}>HELLOWORLD</span>
        </Grid>
        <Button variant="outlined" style={HomeView.buttton}>
          <p style={HomeView.textButton}>All</p>
        </Button>
        <Button variant="outlined" style={HomeView.buttton}>
          <p style={HomeView.textButton}>MyFaves</p>
        </Button>
        <Grid container xs={12}>
          <Grid xs={12} sm={6} item>
            <Grid
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                ...HomeView.boxOfPosts,
                backgroundColor: hovered ? "#f5f5f5" : "#fff",
              }}
            >
              asas
            </Grid>
          </Grid>
        </Grid>
        <Grid style={HomeView.butttonContainer}>
          <Button variant="outlined" style={HomeView.butttonOfPages}>
            1
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
