import React from "react";
import "../src/stylesheet.css";

const BlogItem = ({ imageUrl, heading, topic, description, buttonName }) => {
  return (
    <div className="blog-item">
      <img className="blog-img" src={imageUrl} alt="" />
      <div className="blog-right-section">
        <p>{heading}</p>
        <h1 style={{ color: "white" }}>{topic}</h1>
        <p>{description}</p>
        <button style={{ backgroundColor: "#FAAF42" }}>{buttonName}</button>
      </div>
    </div>
  );
};

export default BlogItem;
