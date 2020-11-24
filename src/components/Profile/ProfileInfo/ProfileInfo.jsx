import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.header}
          alt=""
          src="https://img5.goodfon.ru/wallpaper/nbig/8/8b/abstraktsiia-kartinka-rendering-svetiashchiesia-volny-igra-s.jpg"
        ></img>
      </div>
      <div className={s.descBlock}>ava + desc</div>
    </div>
  );
};

export default ProfileInfo;
