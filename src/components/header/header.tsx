import React from "react";
import {ILinkItem} from '../../types/interfaces'
import classes from "./header.module.scss";

const Header = (): JSX.Element => {
  const menuLinks: ILinkItem[] = [
    {
      text: "Services",
      link: "#",
    },
    {
      text: "Projects",
      link: "#",
    },
    {
      text: "Team",
      link: "#",
    },
    {
      text: "Jobs",
      link: "#",
    },
    {
      text: "Blog",
      link: "#",
    },
    {
      text: "Contact",
      link: "#",
    },
  ];
  return (
    <header className={classes.header}>
      <div className={classes.header__logo}>
        <h2>mamad.come</h2>
      </div>
      <nav>
        <ul>
          {menuLinks.map((item)=><li><button className={classes.menuBtn}>{item.text}</button></li>)}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
