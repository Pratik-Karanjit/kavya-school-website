import React from "react";
import "../src/stylesheet.css";

const BlogItem = ({ imageUrl, heading, topic, description, buttonName }) => {
  return (
    // <div className="blog-carousel-container">
    <>
      {imageUrl && <img className="blog-img" src={imageUrl} alt="" />}
      <div className="blog-right-section">
        {heading && <p className="blog-right-p">{heading}</p>}
        {topic && <h1 className="blog-right-h1">{topic}</h1>}
        {description && <p className="blog-right-p">{description}</p>}
        {buttonName && (
          <button style={{ backgroundColor: "#FAAF42" }}>{buttonName}</button>
        )}
      </div>
    </>
  );
};

export default BlogItem;
