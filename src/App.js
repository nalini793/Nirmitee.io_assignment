import "./App.css";
import React from "react";
import PostGrid from "./components/PostGrid";
import NewPost from "./components/NewPost";

function App() {
  return (
    <div className="App">
      <h1>Post App for Nirmitee.io</h1>
      <NewPost></NewPost>
      <PostGrid></PostGrid>
    </div>
  );
}

export default App;
