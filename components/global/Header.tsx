import Image from "next/image";
import React from "react";
import logo from "@/public/dota2_logo_horiz.png";

const Header = () => {
  return (
    <header>
      <Image src={logo} alt="dota2 logo" />
      <nav>
        <ul>
          <li>GAME</li>
          <li>HEROES</li>
          <li>NEWS</li>
          <li>ESPORTS</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
