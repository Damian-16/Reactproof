import { Box, Grid, IconButton, Link } from "@mui/material";
import { useState } from "react";
import { HomeView } from "../assets/styles/homeViewStyles";
import { FavoriteBorder } from "@mui/icons-material";

const Post = (item) => {
  console.log("🚀  Post ~ item:", item)
  
  const { id, story_url, author, story_title } = item.item;
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Grid
      key={id}
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
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-end" }}
      >
        <IconButton
          sx={{ display: "flex", justifyContent: "flex-end" }}
          variant="solid"
          //onClick={()=>addFav(item)}
        >
          <FavoriteBorder />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default Post;
