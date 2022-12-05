import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostGrid = () => {
  const postList = useSelector((state) => state.posts.posts);
  // console.log(postList);
  return (
    <div className="post_grid">
      <h2>All Posts</h2>
      {postList.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          author={post.author}
          comments={post.comments}
        ></Post>
      ))}
    </div>
  );
};

export default PostGrid;
