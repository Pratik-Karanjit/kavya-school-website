import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./stylesheet.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function ReactSlider() {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/1fb0/dccb/8c1825e120de0af1843c186a94340b8d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYa~uQHC8fpYMprt1Bt~sEc7Rg0fH2AaMqEBXkDGSCNtdoaphok0UKc~IN3s8qkaISZWuJgPk9a0fovKF0z16cZhBUYs4mN62vIe-Sx2afH9KRVqrUCHDKQ3RQQukZN4zxMARoPLofpvRuL1xC4voI21P~FdSVKFyIb-joX1ysxtYJfJLwlAcrX16jFWNCSPsuw4Adu63LGrB75v-qVvfpiChP43Y04FrdrH7Tb9q54C1nAV1RI98QnHbVmGgFID~8xf2uN8UmYTU9eBYQAq6kYFINLQM6SbPymdZM2n5dSp5M1G3YMV~FSZ65kfA-5BRdqioVNwV~gS1sO~y8gcog__",
      caption: "Caption 1",
    },
    {
      id: 2,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/c622/ba6e/56c7eee14cc3ac5c05448a321394326d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KTHmWSEpQSs4IlzoWx0oDUW-G-l7byxX0aSaYNJ8~fTLxU3x3QmIq-8KPd9PInlXYN4ps7LChApr8BpdgMESRkeG6ROwCrms32yCarOIcjz7X1wNB1dMeBAORhzw4fEg4Nvf3B-0uTFD3B0EC-RqrFKa1EWvYKwRO3yg73sC7eJq-ZEhHXGvJd7qhuzbD2uAGoPrGPy3-tRtaTiL5vXNF19OxOTkoq8t8xhkBOIbXfHenDrruSIYkZzXdRSmNUkqqJNyC0adTg87iCG6fRp6YyCnWP06L~uGwLwkJ2FQRppQ9hqPnbiwjuwRNB9~s6KWHDGoR-1m98ZrHOiryH7bgA__",
      caption: "Caption 2",
    },
    {
      id: 3,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/cb7e/15dc/946525c563b07683c5455d1c455f0fe2?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R6jfgsERAGs8ZQfJpIMMDARwCXEux2ShWqraD3qCPhaGQLV~6HA7LsnPfwJgZifjq8nKyNfAVfJdWmGs-rQAsyQtsh0wd9YOCTQKkihDtIxeCT6mvata3egqOw0wTgzFOkvMV7Bwpi5~zSZCeSsfg4-HHkLaw~PZ1Pj9W1D3yMjXaSt-AzaTdpO6N16OxuddP0rOOSbNSQ8Pi4NzEkhpt2b13SCwA8aCWswg51L62eEHxwEFhM-6V44O5OF7z~Sd7URv~RHdSlBz1BCJDRDmaDZkYPLPi~ZPPhx7Cly542EhfT4VagjnrLvpQnksyBidAzIt6LVGMv6Qf8BPhhUPWg__",
      caption: "Caption 3",
    },
    {
      id: 4,
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/0a11/cc92/d16240b15d8207b76146716b7f97a297?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lowm6MvWccHt0J9ilKyXkAT~ZzYk8SFz1W~u45IZeGASspp59HdATVfou-0AJJ38DMfrxagAYbayggwPoQmpFW5FbqPKhO5ntBfbRgMk7m8jvcqjxKpOtysFHa1dnqyjfCnP9aYrSdFCZcQXa3XR8wszyRlFXlWtvKDlzE0wegGi7ImTF9rHNQ0xsM3kKZ0aLTeZgdsFU7Fa3eSxtcJylv~Tj754ZKzDWQVe6VatKdogPZauaqvMa~f6ozPyogbSTFu~jM~2Y1XHfKhbBPgHqkaJNwGz9wDiiINbBT4cOIco5MIkVODCMZ3STjoaepoXhzRUum1jcTj08KxXhJDYvg__",
      caption: "Caption 4",
    },
    {
      id: 5,
      imageUrl:
        "https://blogs.library.duke.edu/wp-content/uploads/2013/08/student-advisory-boards.jpg",
      caption: "Caption 5",
    },
    {
      id: 6,
      imageUrl:
        "https://media.sciencephoto.com/f0/06/69/02/f0066902-800px-wm.jpg",
      caption: "Caption 6",
    },
  ]);

  return (
    <>
      <div className="carousel-wrapper">
        <Carousel pagination={false} breakPoints={breakPoints}>
          {items.map((item) => (
            <Item
              key={item.id}
              imageUrl={item.imageUrl}
              caption={item.caption}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default ReactSlider;
