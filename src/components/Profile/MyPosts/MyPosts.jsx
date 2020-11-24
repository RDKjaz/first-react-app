import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { id: 1, text: "Hello world", like: 100 },
    {
      id: 2,
      text: "Loren ipsum Loren ipsum Loren ipsum Loren ipsum",
      like: 121,
    },
  ];

  let posts = postsData.map((p) => <Post message={p.text} like={p.like} />);

  return (
    <div className={s.postsBlock}>
      My Posts
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
