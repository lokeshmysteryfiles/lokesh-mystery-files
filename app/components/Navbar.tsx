"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { mysteries } from "@/data/mysteries";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "Instagram", id: "instagram" },
    { name: "Mysteries", id: "mysteries" },
    { name: "Categories", id: "categories" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const filteredMysteries = mysteries.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-lg"
            : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          {/* Search Bar */}
          <div className="relative hidden lg:block">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 text-lg" />

            <input
              type="text"
              placeholder="Search Mysteries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-80
                pl-12
                pr-4
                py-3
                rounded-full
                bg-zinc-900
                border
                border-zinc-700
                text-white
                placeholder:text-gray-500
                outline-none
                transition-all
                duration-300
                focus:border-red-600
                focus:shadow-[0_0_20px_rgba(255,0,0,0.6)]
              "
            />

            {/* Search Results */}
            {search && (
              <div className="absolute mt-3 w-full bg-zinc-900 border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-50">

                {filteredMysteries.length > 0 ? (

                  filteredMysteries.map((item) => (

                    <Link
                      key={item.slug}
                      href={`/mysteries/${item.slug}`}
                      onClick={() => setSearch("")}
                    >
                      <div className="p-4 hover:bg-red-600 transition cursor-pointer border-b border-zinc-800">

                        <h3 className="text-white font-semibold">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm">
                          {item.category}
                        </p>

                      </div>

                    </Link>

                  ))

                ) : (

                  <div className="p-4 text-gray-400">
                    No Mystery Found
                  </div>

                )}

              </div>
            )}

          </div>

          {/* Desktop Navigation */}

          <ul className="hidden md:flex items-center gap-3">

            {links.map((link) => (

              <li key={link.id}>

                <a
                  href={`/#${link.id}`}
                  className="
                    px-5
                    py-2
                    rounded-full
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-red-600
                    hover:text-white
                    hover:shadow-[0_0_20px_rgba(255,0,0,0.8)]
                    hover:scale-105
                  "
                >
                  {link.name}
                </a>

              </li>

            ))}

          </ul>

          {/* Mobile Menu */}

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <FaBars />
          </button>

        </div>
      </nav>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

    </>
  );
}