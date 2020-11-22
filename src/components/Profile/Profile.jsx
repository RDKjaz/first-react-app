import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img
          className={s.header}
          alt=""
          src="https://img5.goodfon.ru/wallpaper/nbig/8/8b/abstraktsiia-kartinka-rendering-svetiashchiesia-volny-igra-s.jpg"
        ></img>
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
