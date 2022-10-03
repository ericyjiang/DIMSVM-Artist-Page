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
        width={20}
        onClick={() => setIsClicked(!isClicked)}
      />
      <div className="navContainer">
        <Link href="/posts/discography">
          <a className="navElements">Music</a>
        </Link>
        <Link href="/posts/upcoming">
          <a className="navElements">Events</a>
        </Link>
        <Link href="/posts/about">
          <a className="navElements">About</a>
        </Link>
        <Link href="/posts/contact">
          <a className="navElements">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
