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
import { HomeView } from "./assets/styles/homeViewStyles";
import Post from "./components/post";



function App() {
  const [posts, setPosts] = useState([]);
  const [fav, setFav] = useState([])
  const [hovered, setHovered] = useState();
  const [currentFrame, setCurrentFrame] = useState(null);
  const [tab, setTab] = useState(false);
  const changeTab = (e) => setTab(e);
  const handleChangeCurrentFrame = (event) => {
    setCurrentFrame(event.target.value);
  };
  const addFav = (params) => {
    const validation = fav.filter((item)=>params.id === item.id)
    !validation? setFav([...fav,params]):null
   localStorage.setItem("favs", JSON.stringify(fav))
  }

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
            onClick={()=>addFav(item)}
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
          style={{ display: "flex", flexDirection: "column", height: "70%" }}
          flexWrap={"wrap"}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          xs={12}
        >
          {!tab ? (
           posts.map((item, index) => (
            <Post key={index} item={item} />
          ))
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
