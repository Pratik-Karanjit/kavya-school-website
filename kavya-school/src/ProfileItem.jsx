import React from "react";
import "../src/stylesheet.css";

const ProfileItem = ({ imageUrl, desc, name, post }) => {
  return (
    // <div className="blog-carousel-container">
    <>
      {imageUrl && <img className="profile-img" src={imageUrl} alt="" />}
      <div className="profile-right-section">
        {desc && <p>{desc}</p>}
        {name && <p>{name}</p>}
        {post && <p>{post}</p>}
      </div>
    </>
  );
};

export default ProfileItem;
