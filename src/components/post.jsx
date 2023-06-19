import { Box, Grid, IconButton, Link } from "@mui/material";
import { useState } from "react";
import { HomeView } from "../assets/styles/homeViewStyles";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const Post = (item) => {
 console.log("🚀scdfdsfitem:", item)
 
  
  const { objectID, story_url, author, story_title } = item.item;

  const [isHovered, setIsHovered] = useState(false);
  const [add, setAdd] = useState(false)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddFavButton = (params) => {
   
    if (!item.fav) {
      
      item.setFav([params]);
    } else {
      const existingIndex = item.fav.findIndex((favItem) => favItem.objectID === params.objectID);
      if (existingIndex === -1) {
       
        item.setFav([...item.fav, params]);
      } else {
       
        const updatedFav = item.fav.filter((favItem, index) => index !== existingIndex);
        item.setFav(updatedFav);
      }
    }
    setAdd(!add)

  };
  
  return (
    <Grid
      key={objectID}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...HomeView.boxOfPosts,
        backgroundColor: isHovered ? "#f5f5f5" : "#fff",
      }}
    >
      <Link href={story_url} textColor="none" underline="none">
        <p style={HomeView.author}>por el author {`${author}`}</p>
        <p style={HomeView.story_title}>{`${story_title}`}</p>
      </Link>
      <Box
        sx={{ display: "flex", alignSelf:"center", justifyContent: "flex-end" }}
      >
        <IconButton
          sx={{ display: "flex", justifyContent: "flex-end" }}
          variant="solid"
          color="error"
         onClick={()=>handleAddFavButton(item.item)}
        >
          {add?<Favorite/>:<FavoriteBorder />}
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Post;
