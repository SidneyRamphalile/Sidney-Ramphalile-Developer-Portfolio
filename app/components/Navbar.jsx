"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import CosmicBackground from "./CosmicBackground";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Digital Badges",
    path: "#digital-badges",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [overHero, setOverHero] = useState(true);

  // Show the cosmic background while the hero is under the navbar;
  // fade back to the solid portfolio colour once we scroll into the
  // achievements section (i.e. leave the hero).
  useEffect(() => {
    const hero = document.getElementById("hero");
    const onScroll = () => {
      if (!hero) return;
      const bottom = hero.getBoundingClientRect().bottom;
      setOverHero(bottom > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavLinkClick = () => {
    setNavbarOpen(false); // Close the mobile menu when a link is clicked
    console.log("NavLink clicked - Mobile menu should close.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10">
      {/* cosmic layer — visible while over the hero */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          overHero && !navbarOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <CosmicBackground />
      </div>
      {/* solid portfolio layer — fades in once you scroll past the hero or when mobile menu is open */}
      <div
        className={`absolute inset-0 bg-[#121212] transition-opacity duration-500 ${
          !overHero || navbarOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Sidney Ramphalile
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu  hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={handleNavLinkClick} // Call handleNavLinkClick when a link is clicked
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onClose={handleNavLinkClick} />
      ) : null}
    </nav>
  );
};

export default Navbar;
