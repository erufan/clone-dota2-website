import Image from "next/image";
import Link from "next/link";

import logo from "@/public/dota2_logo_horiz.png";
import { FaSteam } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";

const navs = [
  { href: "game", caption: `GAME` },
  { href: "heroes", caption: "HEROES" },
  { href: "news", caption: "NEWS" },
  { href: "esports", caption: "ESPORTS" },
] as const;

type Nav = (typeof navs)[number];

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-2">
      <Link
        href="/"
        className="mr-10 basis-[14.5%] opacity-80 hover:cursor-pointer hover:opacity-100"
      >
        <Image src={logo} alt="dota2 logo" />
      </Link>
      <nav className="flex-1">
        <ul className="flex">
          {navs.map((nav, index) => (
            <NavItems nav={nav} isFirst={index === 0} key={index} />
          ))}
        </ul>
      </nav>
      <Link
        href="#"
        className="rounded border-[3px] border-[#ffffff50] text-lg font-semibold tracking-widest"
      >
        <div className="font-radiance flex items-center gap-3 px-8 py-3">
          <FaSteam />
          <span>PLAY FOR FREE</span>
        </div>
      </Link>
    </header>
  );
};

export default Header;

const NavItems = ({ nav, isFirst }: { nav: Nav; isFirst: boolean }) => {
  return (
    <li className="px-5 py-3 font-reaver font-semibold tracking-widest opacity-80">
      <Link className="h-full" href={"/" + nav.href}>
        {isFirst ? (
          <span className="flex">
            {nav.caption}
            <FaSortDown className="ml-1 inline opacity-75" size={15} />
          </span>
        ) : (
          nav.caption
        )}
      </Link>
    </li>
  );
};
