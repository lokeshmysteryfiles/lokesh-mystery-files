import Image from "next/image";
import Link from "next/link";
import { mysteries } from "@/data/mysteries";

export default function TrueCrimePage() {
  const trueCrimeArticles = mysteries.filter(
    (item) => item.category === "True Crime"
  );

  return (
    <main className="min-h-screen bg-black py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}

        <div className="text-center mb-20">

          <h1 className="text-6xl font-black text-white">
            🔪 True Crime
          </h1>

          <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
            Explore the world's most shocking murders, disappearances,
            serial killers and unsolved criminal investigations.
          </p>

          <p className="text-red-500 mt-6 font-semibold">
            {trueCrimeArticles.length} Articles
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {trueCrimeArticles.map((item) => (

            <div
              key={item.slug}
              className="
                bg-zinc-900
                rounded-3xl
                overflow-hidden
                border
                border-zinc-800
                hover:border-red-600
                hover:-translate-y-3
                transition-all
                duration-500
                shadow-lg
              "
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <span className="text-red-500 uppercase text-sm font-semibold">
                  {item.category}
                </span>

                <h2 className="text-white text-3xl font-bold mt-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-5 leading-8 line-clamp-4">
                  {item.overview ?? item.description.slice(0,180)}...
                </p>

                {/* Instagram Reel */}

                {item.instagram && (

                  <a
                    href={item.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-8
                      block
                      text-center
                      py-3
                      rounded-full
                      font-bold
                      text-white
                      bg-gradient-to-r
                      from-pink-500
                      via-red-500
                      to-yellow-500
                      hover:scale-105
                      transition
                    "
                  >
                     Watch Reel
                  </a>

                )}

                {/* Read Story */}

                <Link href={`/mysteries/${item.slug}`}>

                  <button
                    className="
                      w-full
                      mt-5
                      py-3
                      rounded-full
                      bg-red-600
                      text-white
                      font-bold
                      hover:bg-red-700
                      transition
                    "
                  >
                     Read Full Story →
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}