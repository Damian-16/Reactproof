import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import "./App.css";

import { useEffect, useState } from "react";
import { getData } from "./backendServices/backend";
import { frameworks } from "./utils/constants";
import { FavoriteBorder } from "@mui/icons-material";

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
  author: {
    width: "6.688rem",
    height: "0.813rem",
    margin: "1rem 20.313rem 0.438rem 0.5rem",
    fontFamily: "Roboto",
    fontSize: "0.688rem",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#767676",
  },
  story_title: {
    width: "27.5rem",
    height: "1.25rem",
    margin: "0.375rem 0 0",
    fontFamily: "Roboto",
    fontSize: "0.875rem",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.43,
    letterSpacing: "0.25px",
    color: "var(--brownish-grey)",
    marginTop: 3,
  },
};

function App() {
  const [posts, setPosts] = useState([]);
  const [hovered, setHovered] = useState();
  const [currentFrame, setCurrentFrame] = useState(null);
  const [tab, setTab] = useState(false);
  const changeTab = (e) => setTab(e);
  const handleChangeCurrentFrame = (event) => {
    setCurrentFrame(event.target.value);
  };

  let returnPosts = () => {
    return posts.map((item) => (
      <Grid
        key={item.id}
        onMouseEnter={() => setHovered(item.id)}
        onMouseLeave={() => setHovered(0)}
        style={{
          ...HomeView.boxOfPosts,
          backgroundColor: item.id === hovered ? "#f5f5f5" : "#fff",
        }}
      >
        <Link href={item.story_url} textColor="none" underline="none">
          <p style={HomeView.author}>por el author {`${item.author}`}</p>
          <p style={HomeView.story_title}>{`${item.story_title}`}</p>
        </Link>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}
        >
          <IconButton
            sx={{ display: "flex", justifyContent: "flex-end" }}
            variant="solid"
          >
            <FavoriteBorder />
          </IconButton>
        </Box>
      </Grid>
    ));
  };

  useEffect(() => {
    let newPost = JSON.parse(localStorage.getItem("frames"));
    setPosts(newPost);
    returnPosts();
    console.log("🚀 ~ file: App.jsx:90 ~ App ~ posts:", posts);
  }, [currentFrame]);
  useEffect(() => {
    let newPost = JSON.parse(localStorage.getItem("frames"));
    setPosts(newPost);
  }, [currentFrame]);
  return (
    <>
      <Grid style={HomeView.home}>
        <Grid style={HomeView.rectangle}>
          <span style={HomeView.title}>HACKER NEWS</span>
        </Grid>
        <Button
          variant="outlined"
          onClick={() => changeTab(false)}
          style={HomeView.buttton}
        >
          <p style={HomeView.textButton}>All</p>
        </Button>
        <Button
          variant="outlined"
          onClick={() => changeTab(true)}
          style={HomeView.buttton}
        >
          <p style={HomeView.textButton}>MyFaves</p>
        </Button>
        <Grid mt={10} mb={5} item xs={12}>
          {" "}
          <TextField
            id="selector"
            select
            label="select your News"
            value={currentFrame}
            onChange={(e) => handleChangeCurrentFrame(e)}
            sx={{ minWidth: 300 }}
          >
            {frameworks.map((option) => (
              <MenuItem
                onClick={() => getData(option.action)}
                key={option.id}
                value={option.id}
              >
                <InputAdornment position="start" style={{ margin: 10 }}>
                  {" "}
                  <img src={option.icon} width={24} height={24}></img>
                  {option.text}{" "}
                </InputAdornment>
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid
          container
          style={{ display: "flex", flexDirection: "column", height: "70%" }}
          flexWrap={"wrap"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          xs={12}
        >
          {!tab ? (
            <>{returnPosts()}</>
          ) : (
            <Grid
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                ...HomeView.boxOfPosts,
                backgroundColor: hovered ? "#f5f5f5" : "#fff",
              }}
            >
              sadsvdvfbfg
              <Button></Button>
            </Grid>
          )}
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
