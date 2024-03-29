import React, { useState } from "react";
import "../src/stylesheet.css";
import bachelorCap from "./graduation-cap-512.png";
import groupHead from "./group-512.png";
import paperImg from "./paper-512.png";
import whyKavyaBg from "./whyKavya.png";

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

  return (
    <div className="main-wrapper">
      <img
        className="kavya-img"
        src="https://s3-alpha-sig.figma.com/img/f104/4c2a/9eae5894bb2ffcea55ff625e05204aa0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GdAA-XWWsx9lat0zpp2rjFBFJQb4nCqE0AYZw3WHkgxk6ruR-~aS-4SGJgi333gTeHyINg9eXtwPy-abRRrGt-5CfxezsNVEp9nLXCZREbbBi9rCMeXnfQGk8yfQgtt~j8SCVvYrVDhVX-wv4lxpiWm6UqHmrMR28eQIqHvDywwsnUtonl6VrQFopbodLguNWngFFlZFtWWPYR5cyxc5o0gsEpYuOb-hO8jW0awlL193Sjr3~ym6G6e~W5u8qZzrpsmUsg~wFGkzAftBR2VOl33NhH37wSk03m3UdIqFZML5e8V~PR0uPfQjVCTN7A1texpXDhvFttdOUW5wPCK-Hg__"
        alt=""
      />
      <div className={changeNavColor ? "navColor" : "header-section"}>
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
          <h1>
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
                  <p>
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
        <img src={whyKavyaBg} alt="why-kavya-bg" />
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
    </div>
  );
};

export default HomePage;
