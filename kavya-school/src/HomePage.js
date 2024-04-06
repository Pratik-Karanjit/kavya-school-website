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

  const changeBackground = () => {
    if (window.scrollY > 300) {
      setChangeNavColor(true);
    } else {
      setChangeNavColor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const handleButtonClick = () => {
    const nav = document.getElementById("mynav");
    nav.classList.toggle("show");
  };

  const images = [
    {
      original:
        "https://s3-alpha-sig.figma.com/img/5b0e/bea1/be838bd314970a20f1a3bf7973fabe27?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dZu~v2uOFjSB6d4j7r1xaGk7q3a95wJBmlaEUXqSr~E0GPaoO~RUbkF8Q-mOG1wVO9R6hv60oCuUU-RSbyD9KdS~mfnFhF1ERRAngFSNpE8OtxdiEpQcWIRc8SLmfVUYRQPe5WjCiVddgQ7L9mi~JfEdmpScvIAaNnzgRvT75zts8sEHWrKlUtJNmk2gao2TSsohjCP8d3KgOZqOx7NteOfZG75Gy5Efo39DYrJ1PxyFt50Nq43RrpTAPW5q1QVRftU-VHvc34nS8nghCNtWD2~iEoN--SaYkzchco4073mXGySmahLpnZQlUDl7UznORxYEpQV~INh4MIKk3eHsKg__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/5b0e/bea1/be838bd314970a20f1a3bf7973fabe27?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dZu~v2uOFjSB6d4j7r1xaGk7q3a95wJBmlaEUXqSr~E0GPaoO~RUbkF8Q-mOG1wVO9R6hv60oCuUU-RSbyD9KdS~mfnFhF1ERRAngFSNpE8OtxdiEpQcWIRc8SLmfVUYRQPe5WjCiVddgQ7L9mi~JfEdmpScvIAaNnzgRvT75zts8sEHWrKlUtJNmk2gao2TSsohjCP8d3KgOZqOx7NteOfZG75Gy5Efo39DYrJ1PxyFt50Nq43RrpTAPW5q1QVRftU-VHvc34nS8nghCNtWD2~iEoN--SaYkzchco4073mXGySmahLpnZQlUDl7UznORxYEpQV~INh4MIKk3eHsKg__",
      thumbnailLabel: "Kavya Roof",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/9954/34b1/79b5f42acde348c01e9027b7bce153f7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IeZKXgcAJkutLKdjQS8iwfOLQGEXTr3dysFPL8O~Ss3860omGNhtxaw2fbjv16lDcZI8xHSWLaA~WllMIDaOy6bgFCrLVwP2I2-~zX-gdyN8r80hl-xdXn-TrvpRt8XKc7BF5Yclu4DUOZvatLI-FxZRfo29sWeVeXeupn8BBK~LRw6qgbq-SpmgyS2BrPRJIpKmyhNzWzPIZY17cS12K-XdzzTdOmI2g0nkbNLs40Aib43EhOxX4~23G34FhcCFKibdjcuqSku4L9KOPBY-xZ7uK7brcWYxaRXlfVz1YkTcrA~IIAIu5kqgRZhYUYJu2gy-1tXh-SvmHXLm-eeliw__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/9954/34b1/79b5f42acde348c01e9027b7bce153f7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IeZKXgcAJkutLKdjQS8iwfOLQGEXTr3dysFPL8O~Ss3860omGNhtxaw2fbjv16lDcZI8xHSWLaA~WllMIDaOy6bgFCrLVwP2I2-~zX-gdyN8r80hl-xdXn-TrvpRt8XKc7BF5Yclu4DUOZvatLI-FxZRfo29sWeVeXeupn8BBK~LRw6qgbq-SpmgyS2BrPRJIpKmyhNzWzPIZY17cS12K-XdzzTdOmI2g0nkbNLs40Aib43EhOxX4~23G34FhcCFKibdjcuqSku4L9KOPBY-xZ7uK7brcWYxaRXlfVz1YkTcrA~IIAIu5kqgRZhYUYJu2gy-1tXh-SvmHXLm-eeliw__",
      thumbnailLabel: "Classroom",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/87b5/2d3c/5a80baba30ab684f5cf4b39b23dcec02?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbLt~IU9y9BMyZMnkMqneQ5RVKTG40gS5HdBIaA1IxEaLlaREPJMaXdr6kRZ6aCNTHzzjfyXExx9MyA4uiABx57BtxV~ycmUL-xB9Vorh27ZClFD6mmhjTFe6dsAsl2dxk646gL1sdCiVjodQ87IjJD5FiQFrv90tfTCrABn6Ch-iPDO3~VItMMlht8lFCN5nw436akCvw3cpDSsHLw0zjIwoaKVLMtkPSmx4wNhDYfREE67npXu1JuOMusLMm9WcffGQxBObEBE~pMwMok4lVUqNLC35p6Y7MAHp2giFCAK51lprv7BadA1v6Qc~YS2H~0ZgZuuSD~VxuSL2oIj5w__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/87b5/2d3c/5a80baba30ab684f5cf4b39b23dcec02?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MbLt~IU9y9BMyZMnkMqneQ5RVKTG40gS5HdBIaA1IxEaLlaREPJMaXdr6kRZ6aCNTHzzjfyXExx9MyA4uiABx57BtxV~ycmUL-xB9Vorh27ZClFD6mmhjTFe6dsAsl2dxk646gL1sdCiVjodQ87IjJD5FiQFrv90tfTCrABn6Ch-iPDO3~VItMMlht8lFCN5nw436akCvw3cpDSsHLw0zjIwoaKVLMtkPSmx4wNhDYfREE67npXu1JuOMusLMm9WcffGQxBObEBE~pMwMok4lVUqNLC35p6Y7MAHp2giFCAK51lprv7BadA1v6Qc~YS2H~0ZgZuuSD~VxuSL2oIj5w__",
      thumbnailLabel: "Lounge",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/9819/c929/7b7fb2cc90ff5e49b8af56d862cf3185?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYZPJU5PltaeXQJttRmz6EN2dnc0sUuTVQrLO7Us2VeXiRVFP9R2kBLre3X87uur5OdpMamSi20vAqlU3Hnbb7SNfaS6xeiySv5erx~JOibujZy8XoPTXdVEcFNkdVh8zozJvqn7NKShVyrgX2oWgyIgBWv~4bMJf3AgsBfjaSuFJYxj-JjUpKUTNgFpbxeVdop~DfWpS44Xs-WtEwr6NdjsDenAhDNAoA8QiTJWB0mimVaXGVSRHCGcuME7EpBmff0aHvVuE2xVnrWNfbYIcALLnP-oAXYOintzpipY2bV9bDdDWxjl5TMbXdVgt8SeEGiDIqiBS~SxCTddrRzZ8A__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/9819/c929/7b7fb2cc90ff5e49b8af56d862cf3185?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QYZPJU5PltaeXQJttRmz6EN2dnc0sUuTVQrLO7Us2VeXiRVFP9R2kBLre3X87uur5OdpMamSi20vAqlU3Hnbb7SNfaS6xeiySv5erx~JOibujZy8XoPTXdVEcFNkdVh8zozJvqn7NKShVyrgX2oWgyIgBWv~4bMJf3AgsBfjaSuFJYxj-JjUpKUTNgFpbxeVdop~DfWpS44Xs-WtEwr6NdjsDenAhDNAoA8QiTJWB0mimVaXGVSRHCGcuME7EpBmff0aHvVuE2xVnrWNfbYIcALLnP-oAXYOintzpipY2bV9bDdDWxjl5TMbXdVgt8SeEGiDIqiBS~SxCTddrRzZ8A__",
      thumbnailLabel: "Meeting Room",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/10c5/519b/9cf88d9c5a566567482943f2bb060af0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VQGF0qPf33DZgdM4snndtWqPJy4T-HLK28JjWMEqc5eaLknaiwGlRxFpuhoIxqQzPQi2XE3lnJyE1f-epP9REWZIofEuK6QeHCJt~0nXA200Z~ogmxyfgxRmFLW0UX1YZvLKdIgRMC~ZZWojra7HF6uryhVxG3RBrgOow5C8yCHjZfG0xUZVleIKX8hVieT-0Td1g-89I1lJid-hjT5U4k9NdOVHAx7a~b~WKllPy4MneIEfn39G9h1QgNr5exfAU77YI~Bu5PLDlwdcyCvEDRYdfyNBCsd42MYSfmIeXTFdEsAgjj~hRwMy5WtwrQGfNh3zxnL5pC10rNkAdSy36w__",
      thumbnail:
        "https://s3-alpha-sig.figma.com/img/10c5/519b/9cf88d9c5a566567482943f2bb060af0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VQGF0qPf33DZgdM4snndtWqPJy4T-HLK28JjWMEqc5eaLknaiwGlRxFpuhoIxqQzPQi2XE3lnJyE1f-epP9REWZIofEuK6QeHCJt~0nXA200Z~ogmxyfgxRmFLW0UX1YZvLKdIgRMC~ZZWojra7HF6uryhVxG3RBrgOow5C8yCHjZfG0xUZVleIKX8hVieT-0Td1g-89I1lJid-hjT5U4k9NdOVHAx7a~b~WKllPy4MneIEfn39G9h1QgNr5exfAU77YI~Bu5PLDlwdcyCvEDRYdfyNBCsd42MYSfmIeXTFdEsAgjj~hRwMy5WtwrQGfNh3zxnL5pC10rNkAdSy36w__",
      thumbnailLabel: "Seminar Hall",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/7b62/cf7e/7e4d08459c623f03c6d58748af98a7a7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BnKaBeuC4KxqdsMT-tC8lsoojXS7p7mXA1vogHnVEJUQszYVFPBjL2JmJLloex-Dbq7vpWMgGsVQkMAqkRhdRpnBwMtZKLeI~xsArf~wAJFs2SeTKu-sQD4IaVCjmcfcbUW5o4tSotlb5iW6ay7D3k9WVvMTLBJwFZbkPvz~pF2IGfDoMhsfBAx7gDEO3P2V39907kXjhHO2kgkysA~-Y5fB2XEYitKOmrzzwlGFoQSK15wdXLZtdgs~Erx-18v092XjuSTIlimj9rzKX1XjiFm3oOvi7cwW1c78vBwhzdX7hzbJLeVMMBGYcdA0Eh-gNs4FNA0zy~49flaVJO1qoQ__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/7b62/cf7e/7e4d08459c623f03c6d58748af98a7a7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BnKaBeuC4KxqdsMT-tC8lsoojXS7p7mXA1vogHnVEJUQszYVFPBjL2JmJLloex-Dbq7vpWMgGsVQkMAqkRhdRpnBwMtZKLeI~xsArf~wAJFs2SeTKu-sQD4IaVCjmcfcbUW5o4tSotlb5iW6ay7D3k9WVvMTLBJwFZbkPvz~pF2IGfDoMhsfBAx7gDEO3P2V39907kXjhHO2kgkysA~-Y5fB2XEYitKOmrzzwlGFoQSK15wdXLZtdgs~Erx-18v092XjuSTIlimj9rzKX1XjiFm3oOvi7cwW1c78vBwhzdX7hzbJLeVMMBGYcdA0Eh-gNs4FNA0zy~49flaVJO1qoQ__",
      thumbnailLabel: "Ground",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/be2f/7c5b/4fec2896ce1cc82697f10d12557f406e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ebinLC6nsGt2-jOPpEUoIIjXsS-MN2QEFD8VxpHKAxVjhqTqLWVkF-zcM2kB-RvYw~fbSCbZmW3vur59FnkzZWS-O2C-pp~hmiCvkG8VNmQ4M9aISH-kxucJ6x3l-q36-HfV9F3tZYr96XxceFDqLu8lcCfnJ2pPwl0ni-JMlaryJLjUVzDLqx3hLhKW95vgyS3MmJMPfyNKIbNIFS3qwHdDCCGitC06Zb4nCvOMRw6U30lfrZ9T6ystw0aE2zpUk~tgaHAUCxvWmfvfzT~9jQvhWZ7TsQEMwp2ngKkX7OlkCr3ln7eozQfq~ZKHMbqQh2i0HgR-NWgXNDHQxXSq3g__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/be2f/7c5b/4fec2896ce1cc82697f10d12557f406e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ebinLC6nsGt2-jOPpEUoIIjXsS-MN2QEFD8VxpHKAxVjhqTqLWVkF-zcM2kB-RvYw~fbSCbZmW3vur59FnkzZWS-O2C-pp~hmiCvkG8VNmQ4M9aISH-kxucJ6x3l-q36-HfV9F3tZYr96XxceFDqLu8lcCfnJ2pPwl0ni-JMlaryJLjUVzDLqx3hLhKW95vgyS3MmJMPfyNKIbNIFS3qwHdDCCGitC06Zb4nCvOMRw6U30lfrZ9T6ystw0aE2zpUk~tgaHAUCxvWmfvfzT~9jQvhWZ7TsQEMwp2ngKkX7OlkCr3ln7eozQfq~ZKHMbqQh2i0HgR-NWgXNDHQxXSq3g__",
      thumbnailLabel: "Parking",
    },
    {
      original:
        "https://s3-alpha-sig.figma.com/img/4357/0709/f38fe819364d8273c1ecf3abc8a56c51?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdD2jBkVf0LHcIVDJztmoUu0Nsvczco7HJuVWJqfdmagKDKSdAcCu9aeoK2Q2pxgqcI3ophBMrJOh2udQ6eYIblWXj82c9FGyDG4WAa3bDSOeyBOnZSh-g-xueqKsM1~YA9P-OvkpK~TbLU3EwRHThCh0RXjpjLHHcDqnzIxjGN~AanzjwnoeyPt5kssRxGHRJDQWPwXgmYR2w68wQJpV2~JH5DGeUYX3-QFC46D1cq1PfmP8uQBzDe0UwpvmundhugQMfzO~jNexOewfmvoMnqvGmzaZMPTDGKLTQSJ-cs60u7JjAW7co13fBWTH37Sh6~Y97B6MGex54f3eeAruw__",

      thumbnail:
        "https://s3-alpha-sig.figma.com/img/4357/0709/f38fe819364d8273c1ecf3abc8a56c51?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdD2jBkVf0LHcIVDJztmoUu0Nsvczco7HJuVWJqfdmagKDKSdAcCu9aeoK2Q2pxgqcI3ophBMrJOh2udQ6eYIblWXj82c9FGyDG4WAa3bDSOeyBOnZSh-g-xueqKsM1~YA9P-OvkpK~TbLU3EwRHThCh0RXjpjLHHcDqnzIxjGN~AanzjwnoeyPt5kssRxGHRJDQWPwXgmYR2w68wQJpV2~JH5DGeUYX3-QFC46D1cq1PfmP8uQBzDe0UwpvmundhugQMfzO~jNexOewfmvoMnqvGmzaZMPTDGKLTQSJ-cs60u7JjAW7co13fBWTH37Sh6~Y97B6MGex54f3eeAruw__",
      thumbnailLabel: "Students",
    },
  ];

  return (
    <div className="main-wrapper">
      <img
        className="kavya-img"
        src="https://s3-alpha-sig.figma.com/img/f104/4c2a/9eae5894bb2ffcea55ff625e05204aa0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdAA-XWWsx9lat0zpp2rjFBFJQb4nCqE0AYZw3WHkgxk6ruR-~aS-4SGJgi333gTeHyINg9eXtwPy-abRRrGt-5CfxezsNVEp9nLXCZREbbBi9rCMeXnfQGk8yfQgtt~j8SCVvYrVDhVX-wv4lxpiWm6UqHmrMR28eQIqHvDywwsnUtonl6VrQFopbodLguNWngFFlZFtWWPYR5cyxc5o0gsEpYuOb-hO8jW0awlL193Sjr3~ym6G6e~W5u8qZzrpsmUsg~wFGkzAftBR2VOl33NhH37wSk03m3UdIqFZML5e8V~PR0uPfQjVCTN7A1texpXDhvFttdOUW5wPCK-Hg__"
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
              <div className="triangle-down"></div>
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
              <a href="#">home.</a>
            </li>
            <li>
              <a href="#">work.</a>
            </li>
            <li>
              <a href="#">about.</a>
            </li>
            <li>
              <a href="#">contact.</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="hero-text">
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
        <div className="slideshow">
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
          className="slanted-photo"
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
