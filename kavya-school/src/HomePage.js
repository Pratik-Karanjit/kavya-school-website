import React, { useState } from "react";
import "../src/stylesheet.css";
import bachelorCap from "./graduation-cap-512.png";
import groupHead from "./group-512.png";
import paperImg from "./paper-512.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import blackBachelor from "../src/photos/black-bachelor-cap.jpg";
import blackBook from "../src/photos/black-book.png";
import Carousel from "react-elastic-carousel";
import ReactSlider from "./ReactSlider";
import BlogSlider from "./photos/BlogSlider";
import ProfileSlider from "./ProfileSlider.jsx";
import facebook from "../src/photos/facebook.png";
import linkedin from "../src/photos/linkedin.png";
import twitter from "../src/photos/twitter.png";

const HomePage = () => {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 300) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const hideNav = () => {
    if (window.scrollY > 300) {
      setHideNavbar(true);
    } else {
      setHideNavbar(false);
    }
  };
  window.addEventListener("scroll", hideNav);

  const handleButtonClick = () => {
    const nav = document.getElementById("mynav");
    nav.classList.toggle("show");
  };

  const images = [
    {
      original:
        "https://s3-alpha-sig.figma.com/img/5b0e/bea1/be838bd314970a20f1a3bf7973fabe27?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUhKS03JVImli3h04bSB2uxQ6HKCyJR76OE0v3npqih6wahvYX7CdXynoyRfJg3lwtyABYVYy4hZOGCfiz45oo~07o9rBmy6gGAOiARiKk6qzEV~lOaAjNTiNuCdg139p5kbjCaVfHjThi1~lbLDY5ug0bOujjjwdUyA14cOREIZipi5LJz1~veINH1ayLfBOi9S9dzsXWOTDDjBcdG15Qm9vzj7sLcY6~vszSYSml0ggxfua7dxALWPUUXsBwwL8Yr4jklNigAy67X3ux409628uB45DpmFQRMEdLC~RHYH0lYeSnjCmf3odrVOFrCIuG-g4YsyKOHxNPpSJ7UaQg__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/5b0e/bea1/be838bd314970a20f1a3bf7973fabe27?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dUhKS03JVImli3h04bSB2uxQ6HKCyJR76OE0v3npqih6wahvYX7CdXynoyRfJg3lwtyABYVYy4hZOGCfiz45oo~07o9rBmy6gGAOiARiKk6qzEV~lOaAjNTiNuCdg139p5kbjCaVfHjThi1~lbLDY5ug0bOujjjwdUyA14cOREIZipi5LJz1~veINH1ayLfBOi9S9dzsXWOTDDjBcdG15Qm9vzj7sLcY6~vszSYSml0ggxfua7dxALWPUUXsBwwL8Yr4jklNigAy67X3ux409628uB45DpmFQRMEdLC~RHYH0lYeSnjCmf3odrVOFrCIuG-g4YsyKOHxNPpSJ7UaQg__",
      thumbnailLabel: "Kavya Roof",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/9954/34b1/79b5f42acde348c01e9027b7bce153f7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFasXALc-~nLxaiYtzhS5rjPjsAEJYNu3q2K7YisIH469blidIZ20RvkZLqtRgw67DHKqPfoeM60fiuP2gX6XPWoApjW4q0WFJOG9Pz-QgaJVK~jXJcPPTNF5w2~X~JsZil1~hMFBQwgd3UqySk1nEnZ~dY1ioDVqfIjoPJDU0sgGqz4vWc3a5A6abMrmqEMAoM5MMuWXEowxwGdi~mbmvR3hXGCUdbMocWVYJn5VPJs5ttrvSZa3DaIc0R-v~KQKCBsCNxZkDgA3OixjYJiLlSLHx-8mdIjnYbtH6fWgpuI7mZxR52atEQP7ZpCWwVGc7aQOSHk68EzTr0UEMquPg__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/9954/34b1/79b5f42acde348c01e9027b7bce153f7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RFasXALc-~nLxaiYtzhS5rjPjsAEJYNu3q2K7YisIH469blidIZ20RvkZLqtRgw67DHKqPfoeM60fiuP2gX6XPWoApjW4q0WFJOG9Pz-QgaJVK~jXJcPPTNF5w2~X~JsZil1~hMFBQwgd3UqySk1nEnZ~dY1ioDVqfIjoPJDU0sgGqz4vWc3a5A6abMrmqEMAoM5MMuWXEowxwGdi~mbmvR3hXGCUdbMocWVYJn5VPJs5ttrvSZa3DaIc0R-v~KQKCBsCNxZkDgA3OixjYJiLlSLHx-8mdIjnYbtH6fWgpuI7mZxR52atEQP7ZpCWwVGc7aQOSHk68EzTr0UEMquPg__",
      thumbnailLabel: "Classroom",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/87b5/2d3c/5a80baba30ab684f5cf4b39b23dcec02?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW2~6LzoyTpfLi-ZWNQIRbobXgLKf09OxZ8xCcpLxktwHt3X2WJnTB0PPmpu69zjQayasqnz425n6RusVWGkSF4sEdoh~Dc0faVp0nXwr34-iz5hnNuq3ISVL0uYwWl434tThVYSXK9BsJRJeWq70qmUU0ebsXEBJjWClfwTZbMDGga9hl2-u006hdrUgOTSD1T9x5vhp8Oc~gYFFykfXA0ync2P-VIIFBBYNZpvlQQC5En82mhtFhKbTEtFqGUdDS4HvfasAdGbThjrI7LpcNbS7GqQKcOcPML6aC6k9V8ysgQotJA0-icdVHh04q0wn-pbQrSEW60npWkm~pYMNQ__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/87b5/2d3c/5a80baba30ab684f5cf4b39b23dcec02?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CW2~6LzoyTpfLi-ZWNQIRbobXgLKf09OxZ8xCcpLxktwHt3X2WJnTB0PPmpu69zjQayasqnz425n6RusVWGkSF4sEdoh~Dc0faVp0nXwr34-iz5hnNuq3ISVL0uYwWl434tThVYSXK9BsJRJeWq70qmUU0ebsXEBJjWClfwTZbMDGga9hl2-u006hdrUgOTSD1T9x5vhp8Oc~gYFFykfXA0ync2P-VIIFBBYNZpvlQQC5En82mhtFhKbTEtFqGUdDS4HvfasAdGbThjrI7LpcNbS7GqQKcOcPML6aC6k9V8ysgQotJA0-icdVHh04q0wn-pbQrSEW60npWkm~pYMNQ__",
      thumbnailLabel: "Lounge",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/9819/c929/7b7fb2cc90ff5e49b8af56d862cf3185?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOtxt7z1EuTWbuUsGr6hdl~09XgmTB0H7Q7CG8QJ3TpHj6ZbufQw6hO1wxenXBuxcdvEDniVzmdmchnQp2hF3IotVqqKBpGF-dvig33vkPQuM1jX-jjUeC7EpG3LVzJv7GPNpeDejL-TszEi-QculJ4XlRAy9G0GwbXuFgESFHpsG-WBg~anzBE1qhfiYOfcJvFfiYKuonxcATa-8k7tt79h7RqmeaWSV97pOmNeWheDQqkiwe3a1dH9KrXcZUyXnsUd5d8MBcPONXi~WAr9lH7q0UCMziyuQ0IsR7sJtoeFhvhtM9m2dxmQzDACD5DsscpSWqCKrXtrzWiWg0anAQ__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/9819/c929/7b7fb2cc90ff5e49b8af56d862cf3185?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oOtxt7z1EuTWbuUsGr6hdl~09XgmTB0H7Q7CG8QJ3TpHj6ZbufQw6hO1wxenXBuxcdvEDniVzmdmchnQp2hF3IotVqqKBpGF-dvig33vkPQuM1jX-jjUeC7EpG3LVzJv7GPNpeDejL-TszEi-QculJ4XlRAy9G0GwbXuFgESFHpsG-WBg~anzBE1qhfiYOfcJvFfiYKuonxcATa-8k7tt79h7RqmeaWSV97pOmNeWheDQqkiwe3a1dH9KrXcZUyXnsUd5d8MBcPONXi~WAr9lH7q0UCMziyuQ0IsR7sJtoeFhvhtM9m2dxmQzDACD5DsscpSWqCKrXtrzWiWg0anAQ__",
      thumbnailLabel: "Meeting Room",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/10c5/519b/9cf88d9c5a566567482943f2bb060af0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~-94SF6vsJHNb9wyeTLlhmx5qSptQZD8BD~vucZrB7unBsX6Fb3Q6VPN55qC1NXUFO1s3nLElpwh88CS2JWIWXmNHu-2u5mZHAUoruUTScBwDELUF9~nONLpDA7KMn9AGR4I8kueB16O4ZgXVWpu3GdiOH7DyDbi6Qmf-3xJgKqPIEQx6Mp1remfenuf0VEguCIUS1TvcSp-OZ0vY5kJCXWmgFoNaAA021LYrz2ZR5kVGPN04-1LAS0MP~ne8XJnF~pJKr4QCHmsD38xgXwYKl0Eknw2nfg~eBQh5VdHJTRELOZIR2Y7CtonnNrr3B2Z7Il4znBsjkmBvABzoRyrw__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/10c5/519b/9cf88d9c5a566567482943f2bb060af0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J~-94SF6vsJHNb9wyeTLlhmx5qSptQZD8BD~vucZrB7unBsX6Fb3Q6VPN55qC1NXUFO1s3nLElpwh88CS2JWIWXmNHu-2u5mZHAUoruUTScBwDELUF9~nONLpDA7KMn9AGR4I8kueB16O4ZgXVWpu3GdiOH7DyDbi6Qmf-3xJgKqPIEQx6Mp1remfenuf0VEguCIUS1TvcSp-OZ0vY5kJCXWmgFoNaAA021LYrz2ZR5kVGPN04-1LAS0MP~ne8XJnF~pJKr4QCHmsD38xgXwYKl0Eknw2nfg~eBQh5VdHJTRELOZIR2Y7CtonnNrr3B2Z7Il4znBsjkmBvABzoRyrw__",
      thumbnailLabel: "Seminar Hall",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/7b62/cf7e/7e4d08459c623f03c6d58748af98a7a7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FixLBzXE0n6c967nZL6SIvbIiONIXiupKHOeC5wPAQX9coBN3xv8TXyQ8cd~99hp8vqwJAOvFd-KbYINXpa5fKda2CFZf22Tm0oLo9iyYB7mxj2t~jLpWJzd2SB5FrMJsWLmPTX2avYyfMbqY~bxWVXvcSobBTDz1eh5Ehi3IRWcdjCOl9l3Ge18EMWZ7oWVpEuu5wi~cny1Fkv009tOFfcat8deUBgBpULhBZpbN~9KsU31rTeUSKbAMPvf4e~7o1IkMjYgXXPDR40Wmx2S92OyqYcPPYt0cJVkYnXtqFHK-wCR-BoDo4PDT7ddZBSN~8XGUyyTLOyjtT8E3Np5kg__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/7b62/cf7e/7e4d08459c623f03c6d58748af98a7a7?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FixLBzXE0n6c967nZL6SIvbIiONIXiupKHOeC5wPAQX9coBN3xv8TXyQ8cd~99hp8vqwJAOvFd-KbYINXpa5fKda2CFZf22Tm0oLo9iyYB7mxj2t~jLpWJzd2SB5FrMJsWLmPTX2avYyfMbqY~bxWVXvcSobBTDz1eh5Ehi3IRWcdjCOl9l3Ge18EMWZ7oWVpEuu5wi~cny1Fkv009tOFfcat8deUBgBpULhBZpbN~9KsU31rTeUSKbAMPvf4e~7o1IkMjYgXXPDR40Wmx2S92OyqYcPPYt0cJVkYnXtqFHK-wCR-BoDo4PDT7ddZBSN~8XGUyyTLOyjtT8E3Np5kg__",
      thumbnailLabel: "Ground",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/be2f/7c5b/4fec2896ce1cc82697f10d12557f406e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLfU42BsKqjINAl86GwV28ojjf73iNIy0q2uJwPBM-nZZ3ZHPYQiTMMY~YQ~aJP0jYvfcljGMbX0oj9~gaO4M00z4BqZbVCPjPh7Pb4S~Bkj4MoNI-5uwGIxS5f5XQxRoE5D10egxDL3eolpUZ60Y8JyLitflOZMYRulfF4r-fPLWZZa9QEa5RjRhl6rOIwH57FwEmBeAZTw~~Yy3BXUmdlfAwmCqBRUZ4BEagyR8-m7XPq27VD7aX5s2etVmwBgaCa-WnwfUQifzExMzIxouvu1G7MnqPqFHDZavfn5QRuvCcv1lIvNH25pGvukbgVqrD-hVE4ecv3X9tEQfi1Tqg__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/be2f/7c5b/4fec2896ce1cc82697f10d12557f406e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLfU42BsKqjINAl86GwV28ojjf73iNIy0q2uJwPBM-nZZ3ZHPYQiTMMY~YQ~aJP0jYvfcljGMbX0oj9~gaO4M00z4BqZbVCPjPh7Pb4S~Bkj4MoNI-5uwGIxS5f5XQxRoE5D10egxDL3eolpUZ60Y8JyLitflOZMYRulfF4r-fPLWZZa9QEa5RjRhl6rOIwH57FwEmBeAZTw~~Yy3BXUmdlfAwmCqBRUZ4BEagyR8-m7XPq27VD7aX5s2etVmwBgaCa-WnwfUQifzExMzIxouvu1G7MnqPqFHDZavfn5QRuvCcv1lIvNH25pGvukbgVqrD-hVE4ecv3X9tEQfi1Tqg__",
      thumbnailLabel: "Parking",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/4357/0709/f38fe819364d8273c1ecf3abc8a56c51?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l15Pu9zfSJ6nGRMO4KglPtYDReX~ULcJ8hjXKpYNKx5h0sZkiPrQBfOkdcRTMo5ajjWEDtmrHKa68Pvpr~SPwNvLLAmvq4cVyAFUZhtEORQ6CNoeWfX-pUg~S8K7ZjuyqwHcEVaJl4dcpWNF9oLYwmDxx3~ntDIS-wSNqpvYQ-OQ0s-MLZ8LIZGBtLroJBL1qtoynjHUisSmrGEPUdmnXxkXG7yu5llbjEtOc0Axyj6VWczAmwEUjYjQ6xK4BllBy5BLBH8OUxJBeo2p9fhtJa5Vou~QU3XNJqX4WCoAKnx2m2Xb20RYcVNpCjQtyPdIKwpAQ0UJ-ZqFJqF830ThRA__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/4357/0709/f38fe819364d8273c1ecf3abc8a56c51?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l15Pu9zfSJ6nGRMO4KglPtYDReX~ULcJ8hjXKpYNKx5h0sZkiPrQBfOkdcRTMo5ajjWEDtmrHKa68Pvpr~SPwNvLLAmvq4cVyAFUZhtEORQ6CNoeWfX-pUg~S8K7ZjuyqwHcEVaJl4dcpWNF9oLYwmDxx3~ntDIS-wSNqpvYQ-OQ0s-MLZ8LIZGBtLroJBL1qtoynjHUisSmrGEPUdmnXxkXG7yu5llbjEtOc0Axyj6VWczAmwEUjYjQ6xK4BllBy5BLBH8OUxJBeo2p9fhtJa5Vou~QU3XNJqX4WCoAKnx2m2Xb20RYcVNpCjQtyPdIKwpAQ0UJ-ZqFJqF830ThRA__",
      thumbnailLabel: "Students",
    },
  ];

  return (
    <div className="main-wrapper ">
      <img
        className="kavya-img skeleton"
        src="https://s3-alpha-sig.figma.com/img/f104/4c2a/9eae5894bb2ffcea55ff625e05204aa0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mZ2QFyNCP5jX6cbfGU4Lf9ox0xSzk1knJFbw7GPr0HtziKCim97T5sQzlgqGaxgN6Yh6cbUlkzGd1V4FjNlx0cC-YqZ7Y7zJbWqtzBkmK1LRTlZYfwysUbj374ks8DR5AOkYdXDnqU4qPezhmQDMPDBTz7CRBYNltoS3LU9u~uP7-kgkilqHvwb3xCA8pg8yjwmlKALefEtHcXdrbQVh86ajSyQ203DfYIogpNI8YNA9M8EQQXGywb5oJh23XeLlcT7O2puxXdHZy6CXLgOxIAB3LIp1iL6BIJCaWOO0pb3wvMdfOHyliCH2Lf1Yo15cSVdQN-DFWE1T5rG-p3uOBA__"
        alt=""
      />

      <div className={changeNavColor ? "navColor" : "header-section"}>
        {/* <div className={changeNavColor ? "navItem" : "header-item"}> */}
        <div className="header-item">
          <a href="/">
            <img
              src="https://kavyaschool.edu.np/images/Kavya-Ing.svg"
              alt="Kavya School"
            />
          </a>
          <li>
            <div className="course-section">
              {" "}
              <a href="/courses">COURSES</a>
              <div className="triangle-down">
                <ul className="dropdown">
                  <li className="has-submenu">
                    <a href="#">BBA</a>
                  </li>
                  <li>
                    <a href="#">IT</a>
                    <ul class="nested-dropdown">
                      <li>
                        <a href="#">Computing</a>
                      </li>
                      <li>
                        <a href="#">Multimedia</a>
                      </li>
                      <li>
                        <a href="#">Networking</a>
                      </li>
                      <li>
                        <a href="#">AI</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">MIT</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <a href="/programs">PROGRAMS</a>
          </li>
          <li>
            <a href="/aboutus">WHY KAVYA</a>
          </li>
          <li>
            <a href="/admission">ADMISSION PROCESS</a>
          </li>
          <li>
            <a href="/blog">BLOG</a>
          </li>
          <a href="/apply">
            <button className="apply-btn">
              <b>APPLY TODAY</b>
            </button>
          </a>
        </div>

        {/* <div className={changeNavColor ? "navColor" : "header-section"}> */}

        {/* <div className={hideNav ? "hide-navbar" : ""}> */}
        <div>
          <div className="mobile-img">
            <img
              src="https://kavyaschool.edu.np/images/Kavya-Ing.svg"
              alt="kavya"
            />
          </div>

          <div className="mobile-hero-text">
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;FOR EVERY <br></br>
            &nbsp;&nbsp; STUDENT, EVERY <br></br>
            CLASSROOM. REAL<br></br>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; RESULTS.
          </div>

          <nav className="mobile-nav">
            <button
              class="my-button"
              id="my-button"
              className="hamburger-icon"
              onClick={handleButtonClick}
            >
              <i class="fas fa-bars"></i>
            </button>
            <ul id="mynav">
              <li>
                <a href="/courses">COURSES</a>
              </li>
              <li>
                <a href="/programs">PROGRAMS</a>
              </li>
              <li>
                <a href="/aboutus">WHY KAVYA</a>
              </li>
              <li>
                <a href="/aboutus">ADMISSION OPEN</a>
              </li>
              <li>
                <a href="/blog">BLOG</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="hero-text skeleton-text">
        SMART SCHOOL <br></br> FOR SMART STUDENT
      </div>
      <div className="second-wrapper">
        <div className="left-wrapper">
          <p className="left-para">
            Lorem Ipsum is simply dummy text of the printing <br /> and
            typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s, <br />
            when an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book. It has <br />
            survived not only five centuries, but also the leap <br /> into
            electronic typesetting.stry. Lorem Ipsum has <br />
            been the industry's standard dummy text ever since <br />
            the 1500s.
          </p>
        </div>
        <div className="right-wrapper">
          <div className="right-wrapper-heading">
            <h1>
              <b>
                LEARN MORE ABOUT <br></br> OUR SCHOOL'S COURSES
              </b>
            </h1>
          </div>
          <form>
            <div className="name-input">
              <input type="text" placeholder="FIRST NAME" />
              <input type="text" placeholder="LAST NAME" />
            </div>

            <div className="mail-phone-input">
              <div className="email-input">
                <input type="email" placeholder="EMAIL" />
                <p>
                  {" "}
                  <p style={{ color: "rgb(163 137 137)" }}>
                    Lorem Ipsum is simply dummy text of the printing <br></br>
                    and typesetting industry. Lorem Ipsum.
                  </p>
                </p>
              </div>

              <div className="phone-input">
                <input type="number" placeholder="PHONE NUMBER" />
                <div className="checkbox-p">
                  <input type="checkbox" className="form-checkbox" />
                  <p>DONT TEXT ME AT THIS NUMBER</p>
                </div>
              </div>
            </div>
            <div className="course-btn-input">
              <input
                className="course-input"
                type="text"
                placeholder="WHICH COURSES ARE YOU INTERESTED IN?"
              />
              <button className="learn-more-btn">
                <b>SPEAK TO REPRESENTATIVE</b>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="why-kavya">
        <div className="why-kavya-heading">
          <h1>WHY KAVYA SCHOOL</h1>
          <br></br>
          <p>Study smart with kavya school</p>
        </div>
        <div className="smart-study-cards">
          <div className="card1">
            <div className="bachelor-cap">
              <img className="card1-img" src={bachelorCap} alt="bachelor cap" />
              <div className="card-1-content">
                <h2 className="card1-heading">PERSONALIZED LEARNING</h2>
                <p className="cards-para">
                  Students practice at their own place, first filling the gaps
                  in their understanding and then accelerating filling the gaps
                  in their .
                </p>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="group-head">
              <img className="card2-img" src={groupHead} alt="group photo" />
              <div className="card-2-content">
                <h2 className="card2-heading">TRUSTED CONTENT</h2>
                <p className="cards-para">
                  Create by experts, kavya library of trusted practice and
                  lessons covers math, science, and more. Always free for
                  learners and teachers.
                </p>
              </div>
            </div>
          </div>
          <div className="card3">
            <div className="paper-area">
              <img className="card3-img" src={paperImg} alt="result" />
              <div className="card-3-content">
                <h2 className="card3-heading">LEARN WITH RESULT</h2>
                <p className="cards-para">
                  Boost your cv with an unlimited contents or take your learning
                  further with our expert tracks and fully accresited
                  microcredentials
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-section">
          <h1>EXPLORE OUR NEW SCHOOL</h1>
          <p>View Full Screen</p>
        </div>
      </div>
      <div className="slideshow-section">
        <div className="slideshow skeleton">
          <ImageGallery
            showBullets={true}
            slideInterval={2500}
            items={images}
            showFullscreenButton={false}
            showNav={false}
          />
        </div>
      </div>
      <div className="top-courses-section">
        <div className="top-courses-heading">
          <h1>EXPLORE TOP COURSES</h1>
          <br></br>
          <div>
            <p className="view-all-section">
              Find out our top courses. <p className="view-all-btn">View All</p>
            </p>
          </div>
        </div>
        <div className="top-courses-container">
          <div className="top-courses-container1"></div>
          <div className="top-courses-container1"></div>
        </div>
      </div>
      <div className="discover-program-section">
        <div className="discover-program-heading">
          <h1>DISCOVER OUR PROGRAMS</h1>
          <br></br>
          <div>
            <p className="view-all-section">
              Find out our top courses. <p className="view-all-btn">View All</p>
            </p>
          </div>
        </div>
        <div className="program-cards">
          <div className="program-card1">
            <div className="program-top1">
              <h2 className="program-heading">EXCLUSIVE EDUCATION</h2>
              <div className="hexagon-container">
                <img
                  className="black-bachelor-cap"
                  src={blackBachelor}
                  alt="bachelor-cap"
                />
              </div>
              <div className="program-para">
                <p className="program-lines">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry'Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="program-card2">
            <div className="program-top2">
              <h2 className="program-heading">THRILLING ACTIVITIES</h2>
              <div className="hexagon-container">
                <img
                  className="black-book"
                  src={blackBook}
                  alt="bachelor-cap"
                />
              </div>
              <div className="program-para">
                <p className="program-lines">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry'Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </div>
          <div className="program-card3">
            <div className="program-top3">
              <h2 className="program-heading">TEACHING & LEARNING</h2>
              <div className="hexagon-container">
                <img
                  className="black-bachelor-cap"
                  src={blackBachelor}
                  alt="bachelor-cap"
                />
              </div>
              <div className="program-para">
                <p className="program-lines">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry'Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slanted">
        <img
          className="slanted-photo skeleton"
          src="https://s3-alpha-sig.figma.com/img/c48a/8e99/138cf858b887e690786c4a7eb358706e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TfqVbW2eyvmMDPYyqKwoFOIyw1aiRZOFifkpxrhqz0kE7lMAbrgYzwE9hDJQgH1u~siO6n9nZRUT253NKEMLQBG1W2brSGyykyaATswdOmr91XuT4KXzPixHzQmDFDHU2J1SmzJb7zWZAIbBVuVh7bEfrEE3n3zif~0v~jQjKuxo05EWqOd1syFwbx9ggrFpvf1501BSxbPEayi9x0NxFTc9lf4Ng3un0RaJgyUDeUURyQM0~yklxLYJjOSzbyOEgIeizNAYhHZLHfJJJqQLlCoWy1mFE50rcxp7jSoN6W6w9GO9jf51ns-PBHJZ3wxXB8H2aGh5JRpQ8Do6ZudJ9A__"
          alt="slanted photo"
        />
      </div>

      <div className="gallery-section">
        <div className="gallery-heading">
          <h1>DISCOVER OUR GALLERY</h1>
          <br></br>
          <div>
            <p className="view-all-section">
              View our full gallery. <p className="view-all-btn">View All</p>
            </p>
          </div>
        </div>
        <ReactSlider />
      </div>

      <div className="bottom-form">
        <div className="left-half-form-section">
          <h1 style={{ color: "white" }}>
            <b>
              LEARN MORE ABOUT <br></br> OUR SCHOOL'S COURSES
            </b>
          </h1>
          <form>
            <div className="name-input">
              <input type="text" placeholder="FIRST NAME" />
              <input type="text" placeholder="LAST NAME" />
            </div>

            <div className="mail-phone-input">
              <div className="email-input">
                <input type="email" placeholder="EMAIL" />
                <p>
                  {" "}
                  <p style={{ color: "rgb(163 137 137)" }}>
                    Lorem Ipsum is simply dummy text of the printing <br></br>
                    and typesetting industry. Lorem Ipsum.
                  </p>
                </p>
              </div>

              <div className="phone-input">
                <input type="number" placeholder="PHONE NUMBER" />
                <div className="checkbox-p">
                  <input type="checkbox" className="form-checkbox" />
                  <p style={{ color: "rgb(163 137 137)" }}>
                    DONT TEXT ME AT THIS NUMBER
                  </p>
                </div>
              </div>
            </div>
            <div className="course-btn-input">
              <input
                className="course-input"
                type="text"
                placeholder="WHICH COURSES ARE YOU INTERESTED IN?"
              />
              <button className="learn-more-btn">
                <b>SPEAK TO REPRESENTATIVE</b>
              </button>
            </div>
          </form>
        </div>
        <div className="right-half-form-section"></div>
      </div>

      <div className="blog-carousel">
        <BlogSlider />
      </div>

      <div className="profile-carousel">
        <ProfileSlider />
      </div>

      <div className="join-kavya">
        <h1>JOIN KAVYA SCHOOL</h1>
        <div className="join-buttons">
          <button>
            <b>LEARNER</b>
          </button>
          <button>
            <b>TEACHER</b>
          </button>
          <button>
            <b>PARENTS</b>
          </button>
        </div>
      </div>

      <div className="footer">
        <div className="footer-container-1">
          <img src="https://kavyaschool.edu.np/images/Kavya-Ing.svg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br></br>{" "}
            typesetting industry. Lorem Ipsum has been the <br></br> industry.{" "}
            <br></br>
          </p>

          <div className="social-hexagons">
            <div className="social-hexagon-1">
              <img className="facebook-logo" src={facebook} alt="facebook" />
            </div>
            <div className="social-hexagon-2">
              <img className="linkedin-logo" src={linkedin} alt="linkedin" />
            </div>
            <div className="social-hexagon-3">
              <img className="twitter-logo" src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>kavya School</p>
          <p>021-500050</p>
          <p>New Baneshwor, Kathmandu</p>
        </div>

        <div className="quick-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a> <br></br>
          <a href="/courses">Courses</a>
          <br></br>
          <a href="/programs">Programs</a>
          <br></br>
          <a href="/aboutus">Why Kavya</a>
          <br></br>
          <a href="/admission">Admission Process</a>
          <br></br>
          <a href="/blog">Blog</a>
        </div>

        <div className="others">
          <h3>Others</h3>
          <p>Privacy and Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>

      <div className="copyright">Copyright © kavya school</div>
    </div>
  );
};

export default HomePage;
