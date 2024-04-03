import React from "react";
import "../src/stylesheet.css";

const ProfileItem = ({ imageUrl, desc, name, post }) => {
  return (
    <>
      {imageUrl && <img className="profile-img" src={imageUrl} alt="" />}
      <div className="profile-right-section">
        {desc && <p className="profile-right-section-desc">{desc}</p>}
        {name && <p className="profile-right-section-name">{name}</p>}
        {post && <p>{post}</p>}
      </div>
    </>
  );
};

export default ProfileItem;
