"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaSortDown } from "react-icons/fa";

interface Nav {
  href: string;
  caption: string;
}

interface Props {
  nav: Nav;
  isFirst: boolean;
}

const NavItem = ({ nav, isFirst }: Props) => {
  const path = usePathname();
  const isActive = path === "/" + nav.href;
  const activeClassName =
    "border-b-[3px] border-orange-600 py-1 tracking-[0.2em] opacity-100";
  const defaultClassName = "tracking-[0.2em] opacity-80 hover:opacity-100";

  return (
    <li className="px-5 py-3 font-reaver text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
      <Link
        className={isActive ? activeClassName : defaultClassName}
        href={"/" + nav.href}
      >
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

export default NavItem;
