import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <input></input>
        <button>Add</button>
      </div>
      <div className={s.posts}>
        <Post message="Hello world" like="10" />
        <Post
          message="Loren ipsum Loren ipsum Loren ipsum Loren ipsum"
          like="123"
        />
      </div>
    </div>
  );
};

export default MyPosts;
