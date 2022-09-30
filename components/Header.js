import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import utilStyles from "../styles/utils.module.css";
import Sidebar from "./Sidebar";

const Header = () => {
  const [screenSize, setScreenSize] = useState(1080);
  const [fullNav, setFullNav] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  //mobile screen size is roughly 480 x 853
  //height maybe 900

  useEffect(() => {
    const resizeFunc = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", resizeFunc);
    return () => window.removeEventListener("resize", resizeFunc);
  });

  useEffect(() => {
    if (screenSize > 900) setFullNav(true);
    else setFullNav(false);
  }, [screenSize]);

  return (
    <>
      {isClicked ? (
        <Sidebar isClicked={isClicked} setIsClicked={setIsClicked} />
      ) : (
        <>
          {fullNav ? (
            <div className="header">
              <Image
                src="/images/DIMSVM-Logo-White.png"
                alt="logo"
                width={80}
                height={10}
                style={{
                  alignSelf: "center",
                }}
              />
              <div className="navElements">
                <Link href="/posts/discography">
                  <a className={utilStyles.footerLinks}>Music</a>
                </Link>
                <Link href="/posts/events">
                  <a className={utilStyles.footerLinks}>Events</a>
                </Link>
                <Link href="/posts/about">
                  <a className={utilStyles.footerLinks}>About</a>
                </Link>
                <Link href="/posts/contact">
                  <a className={utilStyles.footerLinks}>Contact</a>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              {!isClicked && (
                <>
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{
                      width: "25px",
                      marginLeft: "15px",
                    }}
                    onClick={() => setIsClicked(!isClicked)}
                  />
                  <Image
                    src="/images/DIMSVM-Logo-White.png"
                    alt="logo"
                    width={80}
                    height={20}
                  />
                </>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Header;
