import { useEffect, useState } from "react";
import classes from "./hero.module.scss";
import anime from "animejs";
const Hero = (): JSX.Element => {
  const [slogan, setSlogan] = useState("Web Design");
  useEffect(() => {
    const timeLine = anime.timeline({
      easing: "easeInOutQuad",
    });
    timeLine.add(
      {
        duration: 1500,
        targets: `.${classes.animation}`,
        width: "400px",
        height: "400px",
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        rotate: "45deg",
      },
      2000
    );
    timeLine.add(
      {
        targets: `.${classes.grayArea}`,
        width: "390px",
        height: "390px",
        duration: 700,
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
        setSlogan("Seo");
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
          setSlogan("Digital Marketing");
        },
      },
      "+=1000"
    );
  }, []);
  return (
    <div className={classes.hero}>
      {/* <div className={classes.animation}>
        <div className={classes.grayArea}></div>
        <h2>{slogan}</h2>
      </div> */}
      <div></div>
    </div>
  );
};
export default Hero;
