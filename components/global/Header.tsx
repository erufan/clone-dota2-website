import Image from "next/image";
import Link from "next/link";

import logo from "@/public/dota2_logo_horiz.png";
import { FaSteam } from "react-icons/fa6";
import NavItem from "./NavItem";

const navs = [
  { href: "game", caption: `GAME` },
  { href: "heroes", caption: "HEROES" },
  { href: "news", caption: "NEWS" },
  { href: "esports", caption: "ESPORTS" },
] as const;

const Header = () => {
  return (
    <header className="absolute flex w-full items-center justify-between px-6 py-2">
      <Link
        href="/"
        className="mr-10 basis-[14.5%] opacity-80 hover:cursor-pointer hover:opacity-100"
      >
        <Image src={logo} alt="dota2 logo" />
      </Link>
      <nav className="flex-1">
        <ul className="flex">
          {navs.map((nav, index) => (
            <NavItem nav={nav} isFirst={index === 0} key={index} />
          ))}
        </ul>
      </nav>
      <Link
        href="#"
        className="hidden rounded border-[3px] border-[#ffffff50] text-lg font-semibold tracking-widest lg:inline"
      >
        <div className="flex items-center gap-3 px-8 py-3 font-radiance">
          <FaSteam />
          <span>PLAY FOR FREE</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
