import React from "react";
import classes from "./home.module.scss";
import MYPIC from "./../../assets/mypic.jpeg";
import { FaLinkedin, FaGithub, FaGlobe, FaCode } from "react-icons/fa";
import { MdAlignVerticalBottom } from "react-icons/md";

const Home = () => {
  return (
    <div className={classes.page}>
      <div className={classes.page__details}>
        <h1 className={classes.page__details__title}>
          Hi, I'm Muhammad Moiz Siddique
        </h1>
        <p className={classes.page__details__into}>
          Passion for working on full-stack apps and l am always looking for
          opportunities to grow as an engineer. I have utilised my interpersonal
          skills and detail-oriented nature to continue to improve myself and
          those whom I work with. My specialties include problem-solving,
          quickly learning new skills and programming languages, and efficient
          communication in a team environment. I have experience using
          TypeScript JavaScript, Node.js, Angular JS, React.js, Stencil JS,
          HTML, CSS, Bootstrap, Material and others. My career objective is to
          employ my skills in the software engineering path while continuing to
          soak up as much knowledge and practice as I can to perfect my craft.
        </p>
        <div className={classes.page__details__my_tech_stacks}>
          <div className={classes.page__details__my_tech_stacks__details}>
            <FaLinkedin size={20} />
            <span
              className={classes.page__details__my_tech_stacks__details__text}
            >
              <a href="https://www.linkedin.com/in/muhammad-moiz-siddique-74419b166/">
                www.linkedin.com/in/muhammad-moiz-siddique-74419b166/
              </a>
            </span>
          </div>
          <div className={classes.page__details__my_tech_stacks__details}>
            <FaGithub size={20} />
            <span
              className={classes.page__details__my_tech_stacks__details__text}
            >
              <a href="https://github.com/MuhammadMoiz200099">
                github.com/MuhammadMoiz200099
              </a>
            </span>
          </div>
          <div className={classes.page__details__my_tech_stacks__details}>
            <FaGlobe size={20} />
            <span
              className={classes.page__details__my_tech_stacks__details__text}
            >
              <a href="https://muhammadmoiz200099.github.io/muhammad_moiz_siddique/">
                muhammadmoiz200099.github.io/muhammad_moiz_siddique/
              </a>
            </span>
          </div>
          <div className={classes.page__details__my_tech_stacks__details}>
            <FaCode size={20} />
            <span
              className={classes.page__details__my_tech_stacks__details__text}
            >
              <a href="https://www.hackerrank.com/JerryMMoiz2000">
                www.hackerrank.com/JerryMMoiz2000
              </a>
            </span>
          </div>
          <div className={classes.page__details__my_tech_stacks__details}>
            <MdAlignVerticalBottom size={20} />
            <span
              className={classes.page__details__my_tech_stacks__details__text}
            >
              Experiences: 3 years professional working experience
            </span>
          </div>
        </div>
      </div>
      <div className={classes.page__my_pic}>
        <img
          className={classes.page__my_pic__image}
          src={MYPIC}
          alt="my_picture"
          height={500}
          width={400}
        />
      </div>
    </div>
  );
};

export default Home;
