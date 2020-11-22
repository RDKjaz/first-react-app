import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        alt=""
        src="https://banner2.cleanpng.com/20181231/fta/kisspng-computer-icons-user-profile-portable-network-graph-circle-svg-png-icon-free-download-5-4714-onli-5c2a3809d6e8e6.1821006915462707298803.jpg"
      ></img>
      {props.message}
      <div>
        <span>like {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
