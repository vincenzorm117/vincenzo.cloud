import { useState } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useGlobalContext } from "providers/GlobalProvider";

const links = [
  { text: "Home", href: "/" },
  { text: "Experience", href: "/experience" },
  { text: "Projects", href: "/projects" },
  { text: "Repos/Gists", href: "/repos" },
];

const Nav = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { maskHook } = useGlobalContext();
  const [, setMaskIsOpen] = maskHook;

  return (
    <nav className={cn("fixed z-20 bottom-0 right-0 pb-[25px] pr-[25px]")}>
      <ul
        className={cn(
          "text-right pb-5 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0"
        )}
      >
        {links.map((link) => (
          <li
            className="text-[20px] py-2 uppercase font-display font-bold text-white-ce tracking-widest"
            key={link.text}
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setMaskIsOpen(!isOpen);
        }}
        className="block ml-auto rounded-full bg-cyan-default shadow-md hover:shadow-lg transition-shadow duration-200 relative h-[50px] w-[50px]"
      >
        <div className={isOpen ? styles.burgerActive : styles.burger}></div>
      </button>
    </nav>
  );
};

export default Nav;