import React, { useState } from "react";
import "./App.css";
import Blog from "./Blog.jsx";
import Post from "./Posts.jsx";
import blogPosts from "./data.js";

function App() {
  const [state, setState] = useState({
    currentPost: null,
  });

  const switchToPost = (post) => {
    setState({
      currentPost: post,
    });
  };

  return (
    <>
      {state.currentPost === null ? (
        <Blog posts={blogPosts} switchToPost={switchToPost} />
      ) : (
        <Post post={state.currentPost} switchToPost={switchToPost} />
      )}
    </>
  );
}

export default App