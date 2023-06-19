import {
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
} from "@mui/material";
import "./App.css";

import { useEffect, useState } from "react";
import { getData } from "./backendServices/backend";
import { frameworks } from "./utils/constants";

import { HomeView } from "./assets/styles/homeViewStyles";
import Post from "./components/post";

function App() {
  const [posts, setPosts] = useState([]);
  const [fav, setFav] = useState([]);

  const [currentFrame, setCurrentFrame] = useState(null);
  const [tab, setTab] = useState(false);
  const changeTab = (e) => setTab(e);
  const handleChangeCurrentFrame = (event) => {
    setCurrentFrame(event.target.value);
  };

  useEffect(() => {
    let newPost = JSON.parse(localStorage.getItem("frames"));
    setPosts(newPost);
  }, [currentFrame]);
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(fav));
  }, [fav]);

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
          style={HomeView.postsContainer}
          flexWrap={"wrap"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          xs={12}
        >
          {!tab
            ?posts && posts.map((item, index) => (
                <Post key={index} item={item} fav={fav} setFav={setFav} />
              ))
            : fav && fav.map((item, index) => (
                <Post key={index} item={item} fav={fav} setFav={setFav} />
              ))}
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
