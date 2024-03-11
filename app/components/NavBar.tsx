"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 bg-purple-950 ${
        navBarOpen ? "bg-opacity-100" : "bg-opacity-90"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="text-3xl text-white font-semibold">
          LOGO
        </Link>
        <div className="mobile-menu block md:hidden">
          {navBarOpen ? (
            <button
              onClick={() => setNavBarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavBarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <NavLink href={link.href} title={link.title} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {navBarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default NavBar;
