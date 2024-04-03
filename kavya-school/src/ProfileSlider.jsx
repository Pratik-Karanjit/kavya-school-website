import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import ProfileItem from "./ProfileItem.jsx";
import "./stylesheet.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ProfileSlider() {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/9131/d1d3/055e1f8ba8939e5e954e09240a5d5e42?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PKE1tBEPiaG5x-ITN8kb18oxdjqFOOVcjNGs4emITY2slD7-h55qkMmVGMwe3YrpencgP3KpoR74KYDtYL4r7y7mlP0pMvvQVL2udP0J~z07yk6pyPknEsmeSMpFfh4aRh7mEvDHmZyzcUnbv3pnbMXkkiaKOAnIm8wY6XifXf05ibuuL6dlL36vX8NIfyyuG7q4QWIetrYhSkNn4OB7vDCvKq9gp~ewTc07Rpi-6~PiXj6g~FRCezQkwyibcUrldE2LViX~wS7nOIAheBK2mHinStYfgJv5JisLn2t7RhkiFwuxfQNuawYfZHaIgwkcZ6Cuo7dA0ZyZfNT1zoXN-Q__",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      name: "KASANG SHERPA",
      post: "Kavya School Student",
    },
  ]);

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <ProfileItem
              key={item.id}
              imageUrl={item.imageUrl}
              desc={item.desc}
              name={item.name}
              post={item.post}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ProfileSlider;
