"use client";

import { useState } from "react";
import Fuse from "fuse.js";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaTimes } from "react-icons/fa";
import { mysteries } from "@/data/mysteries";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const fuse = new Fuse(mysteries, {
  keys: [
    "title",
    "category",
    "description",
  ],
  threshold: 0.35,
});

  const results = search
    ? fuse.search(search).map((result) => result.item)
    : [];

  return (
    <section className="bg-black py-12">
      <div className="max-w-5xl mx-auto px-8">

        {/* Search Box */}

        <div className="relative">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-red-500 text-xl" />

          <input
            type="text"
            placeholder="Search Mysteries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              pl-14
              pr-14
              py-4
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
              focus:shadow-[0_0_25px_rgba(255,0,0,0.5)]
            "
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <FaTimes />
            </button>
          )}

        </div>

        {/* Search Results */}

        {search && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">

            {results.length > 0 ? (

              results.map((item) => (

                <Link
                  key={item.slug}
                  href={`/mysteries/${item.slug}`}
                  onClick={() => setSearch("")}
                >

                  <div className="flex items-center gap-5 p-4 border-b border-zinc-800 hover:bg-zinc-800 hover:border-l-4 hover:border-red-500 transition-all duration-300 cursor-pointer">

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={80}
                      className="rounded-lg object-cover"
                    />

                    <div className="flex-1">

                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>

                 <p className="text-gray-400 mt-1 line-clamp-2">
  {(item.overview ?? item.description ?? "").slice(0, 120)}...
</p>

                      <span className="inline-block mt-3 px-3 py-1 rounded-full bg-red-600 text-white text-xs">
                        {item.category}
                      </span>

                    </div>

                    <div className="text-red-500 text-2xl">
                      →
                    </div>

                  </div>

                </Link>

              ))

            ) : (

              <div className="text-center py-10">

                <h3 className="text-red-500 text-2xl font-bold">
                  No Mystery Found
                </h3>

                <p className="text-gray-400 mt-2">
                  Try another keyword.
                </p>

              </div>

            )}

          </div>
        )}

      </div>
    </section>
  );
}