import Image from "next/image";
import Link from "next/link";

import logo from "@/public/dota2_logo_horiz.png";
import { FaSteam } from "react-icons/fa6";
import { FaSortDown } from "react-icons/fa";

const Header = () => {
  const navs = [
    { href: "game", caption: `GAME` },
    { href: "heroes", caption: "HEROES" },
    { href: "news", caption: "NEWS" },
    { href: "esports", caption: "ESPORTS" },
  ];

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
            <li className="px-5 py-3 font-reaver font-semibold tracking-widest opacity-80">
              <Link className="h-full" href={"/" + nav.href}>
                {index === 0 ? (
                  <span className="flex">
                    {nav.caption}
                    <FaSortDown className="ml-1 inline opacity-75" size={15} />
                  </span>
                ) : (
                  nav.caption
                )}
              </Link>
            </li>
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
