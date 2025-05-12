import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg";
import img4 from "../assets/about/img4.jpg";
import img5 from "../assets/about/img5.jpg";
import img6 from "../assets/about/img6.jpg";
import img7 from "../assets/about/img7.jpg";
import img8 from "../assets/about/img8.jpg";
import img9 from "../assets/about/img9.jpg";
import img10 from "../assets/about/img10.jpg";
import img11 from "../assets/about/img11.jpg";
import img12 from "../assets/about/img12.jpg";
import img13 from "../assets/about/img13.jpg";
import img16 from "../assets/about/img16.jpg";
import img18 from "../assets/about/img18.jpg";
import img20 from "../assets/about/img20.jpg";
import img21 from "../assets/about/img21.jpg";
import CarouselStack from "../components/animations/CarouselStack";
import VerticalCarousel from "../components/animations/VerticalCarousel";
import { useAbout } from "../components/logic/useAbout";

const About: React.FC = () => {
  const { aboutClass } = useAbout();
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img16,
    img18,

    img20,
    img21,
  ];
  const textAbout = (
    <>
      <p>
        Hello! My name is Dalma Fernandez and i'm a{" "}
        <b>Software Development Engineer</b> with a strong passion for creating
        engaging and intuitive <b>digital experiences</b>. I’m originally from
        Argentina and have had the opportunity to <b>collaborate</b> on a
        variety of{" "}
        <Link to="/projects" className="inline-link">
          projects
        </Link>{" "}
        both independently and as part of <b>dynamic teams</b>. My main area of
        interest is <b>front-end development</b>, where I feel most inspired and
        creative, although I’m also confident and capable when working on{" "}
        <b>back-end</b> tasks whenever the project requires it.
      </p>
      <p>
        I am known for being a <b>cheerful</b>, <b>approachable</b>, and highly{" "}
        <b>adaptable</b> person. I <b>learn quickly</b> and enjoy{" "}
        <b>challenges</b> that allow me to grow both personally and
        professionally. My journey in software development has been shaped not
        only by <b>academic knowledge</b> but also by a strong sense of{" "}
        <Link to="/certifications" className="inline-link">
          self-taught
        </Link>{" "}
        and a constant desire to <b>improve</b>. I’m <b>self-taught</b> in many
        areas and always eager to explore <b>new technologies</b>, especially
        those that enhance <b>user experience</b>.
      </p>
      <p>
        In my free time, I love watching Korean dramas and solving{" "}
        <b>puzzles</b> or play <b>chess</b> that stimulate my{" "}
        <b>logical thinking</b>. Traveling is another one of my biggest
        passions. I aim to travel at least twice a year, whether exploring my
        own country or discovering new cultures abroad. These experiences have
        taught me to <b>adapt easily</b> to new environments and to{" "}
        <b>connect</b> with people from all walks of life — qualities that I
        believe are essential in today's <b>global</b> and <b>remote work</b>{" "}
        settings.
      </p>
      <p>
        Over the years, I’ve participated in various <b>software projects</b>{" "}
        that required strong <b>communication skills</b>,{" "}
        <b>task organization</b>, and a <b>collaborative mindset</b>. Whether I
        am working in a team or handling responsibilities on my own, I always
        strive to deliver <b>high-quality results</b> and contribute positively
        to the group. I am especially drawn to <b>remote opportunities</b> that
        value <b>independence</b>, <b>trust</b>, and <b>mutual respect</b> among
        team members.
      </p>
      <p>
        I believe that <b>technology</b> should be <b>accessible</b>,{" "}
        <b>beautiful</b>, and <b>meaningful</b> — and that’s exactly what I aim
        to achieve in every project I join. My enthusiasm for{" "}
        <b>front-end development</b> stems from my love for <b>detail</b>,{" "}
        <b>design</b>, and <b>user-centered thinking</b>. At the same time, I
        enjoy building the <b>logic</b> behind the scenes when needed and
        ensuring everything works <b>smoothly</b> from end to end.
      </p>
      <p>
        If you're looking for someone who is <b>passionate</b>, <b>committed</b>
        , and genuinely excited about creating <b>software</b> that makes a
        difference, I would love to <b>connect</b> and explore how we can{" "}
        <Link to="/contact" className="inline-link">
          work together.
        </Link>
      </p>
    </>
  );
  return (
    <section className={aboutClass}>
      <article className="about-card">
        {/* Mobile layout */}
        <div className="mobile-layout">
          <div className="about-text-container">
            <h1 className="about-title">ABOUT ME</h1>
            <div className="about-text">
              <CarouselStack images={images} interval={2000} />
              {textAbout}
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="about-grid">
          <div className="desktop-stack">
            <VerticalCarousel images={images} interval={3000} />
          </div>
          <div className="about-text-container">
            <h1 className="about-title">ABOUT ME</h1>
            <div className="about-text">{textAbout}</div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
