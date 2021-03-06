import { useEffect, useState } from "react";
import classes from "./hero.module.scss";
import anime from "animejs";
const Hero = (): JSX.Element => {
  const [slogan, setSlogan] = useState("SEO");
  window.scrollTo(0,0)
  useEffect(() => {
    anime.set(`.${classes.mainContent}`, {
      display: "none",
    });
    
    anime.set(`body`, {
      maxHeight: "100vh",
      overflow: "hidden",
    });
    const mainTextAnimation = anime({
      targets: [`.${classes.mainContent} h2`, `.${classes.mainContent} p`],
      opacity: [0, 1],
      autoplay: false,
      complete: () => {
        anime.set(`body`, {
          maxHeight: "unset",
          overflow: "auto",
        });
      },
    });
    const timeLine = anime.timeline({
      easing: "easeInOutQuad",
    });
    timeLine.add(
      {
        duration: 1500,
        targets: `.${classes.animation}`,
        width: "370px",
        height: "370px",
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        rotate: "45deg",
      },
      2000
    );
    timeLine.add(
      {
        targets: `.${classes.grayArea}`,
        width: "360px",
        height: "360px",
        duration: 700,
        complete: () => {
          anime.set(`.${classes.animation}`, {
            display: "none",
          });
          anime.set(`.${classes.mainContent}`, {
            display: "block",
          });
          mainTextAnimation.play();
        },
      },
      "+=1000"
    );
    const textTimeline = anime.timeline({
      duration: 200,
      easing: "linear",
      targets: `.${classes.animation} h2`,
      delay: 250,
    });
    textTimeline.add({
      opacity: "1",
    });
    textTimeline.add({
      opacity: "0",
    });
    textTimeline.add({
      opacity: "1",
      begin: () => {
        setSlogan("Digital Marketing");
      },
    });
    textTimeline.add({
      opacity: "0",
    });
    textTimeline.add({
      rotate: "-45deg",
      translateX: ["-50%", "-50%"],
      translateY: ["-50%", "-50%"],
    });
    textTimeline.add(
      {
        opacity: "1",
        begin: () => {
          setSlogan("Web Design");
        },
      },
      "+=1000"
    );
  }, []);
  return (
    <div className={classes.hero}>
      <div className={classes.animation}>
        <div className={classes.grayArea}></div>
        <h2>{slogan}</h2>
      </div>
      <div className={classes.mainContent}>
        <div className={classes.contetTitle}></div>
        <h2>WE DESIGN YOUR BUSINESS</h2>
        <p>
          Stand out online with a professional website, online store, or
          portfolio. With Squarespace, you can turn any idea into a reality.
        </p>
      </div>
    </div>
  );
};
export default Hero;
