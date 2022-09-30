import React from "react";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from '../styles/utils.module.css';

const Sidebar = ({ isClicked, setIsClicked }) => {
  return (
    <div className="sidebar">
      <FontAwesomeIcon
        icon={faXmark}
        size="sm"
        onClick={() => setIsClicked(!isClicked)}
      />

      <Link href="/posts/discography">
        <a className={utilStyles.footerLinks}>Music</a>
      </Link>
      <Link href="/posts/upcoming">
        <a className={utilStyles.footerLinks}>Events</a>
      </Link>
      <Link href="/posts/about">
        <a className={utilStyles.footerLinks}>About</a>
      </Link>
      <Link href="/posts/contact">
        <a className={utilStyles.footerLinks}>Contact</a>
      </Link>
    </div>
  );
};

export default Sidebar;
