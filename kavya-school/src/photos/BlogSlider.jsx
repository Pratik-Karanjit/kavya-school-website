import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import BlogItem from "../BlogItem.jsx";
import "../stylesheet.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function BlogSlider() {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/a09b/e7ce/b2f9c56add6404cbe8dbb7df42c4dc9c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WTWX7PeLkqAUonYTzUBdo9Hd17DHZl336sQ1vwPag7b4oeFFbP4wAMLggB40jheyWxr59YJ9ecVT9fRg6mwYeYNCxM~JMC7cMInTMylqQJF27mJCsGMmEuLYjsxXh1q9u~7fGIBAYfQ3JxMZAMEFbzlWf5xrHgWnk0ZeGlT~I8DjNoV8tx6ViDIFKdrqCVL7HLdgD8fEem7QJAq4SNIzLBKpEELIAT31W-wdZISKBixqGWbCPPLg2ybUFiV~WPtx9n25jTCbTgpxpcRHvl1oS1wQkFiuA0JoV8ibdpuoTkcp~JoQDzmEYtcfCWDAobgLOKkBMa0xqtKSgAveWolN7Q__",
    },
    {
      id: 2,
      imageUrl: "",
      heading: "LATEST BLOG POST",
      topic: "We believe everyone has the capacity to be creative.",
      description: "Lorem Ipsum is simply  printing and typesetting industry.",
      buttonName: "Read More",
    },
  ]);

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <BlogItem
              key={item.id}
              imageUrl={item.imageUrl}
              heading={item.heading}
              topic={item.topic}
              description={item.description}
              buttonName={item.buttonName}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default BlogSlider;
