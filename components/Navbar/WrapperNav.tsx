"use client";
import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const WrapperNav = () => {
  const [showNav, setShowNav] = useState(false);

  const openNavHandler = () => setShowNav(true);
  const closeNavHandle = () => setShowNav(false);

  return (
    <>
      <Nav
        showNav={showNav}
        openNav={openNavHandler}
        closeNav={closeNavHandle}
      />
      <MobileNav showNav={showNav} closeNav={closeNavHandle} />
    </>
  );
};

export default WrapperNav;