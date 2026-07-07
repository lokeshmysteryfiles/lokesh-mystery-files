import Image from "next/image";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-[#050505] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-30"></div>

              <Image
                src="/images/profile/lokesh.jpg"
                alt="Lokesh"
                width={420}
                height={420}
                className="relative rounded-full border-4 border-red-600 object-cover"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="text-red-500 uppercase tracking-widest">
              About The Creator
            </span>

            <h2 className="text-white text-4xl font-bold mt-4">
              LOKESH MYSTERY FILES
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              Welcome to Lokesh Mystery Files.
              Here we uncover unsolved mysteries,
              paranormal events, ancient secrets,
              strange disappearances, and unbelievable stories
              from around the world.

              Every episode is carefully researched
              to bring mystery lovers an immersive experience.
            </p>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-10">

              <div className="bg-zinc-900 rounded-2xl p-6 text-center">

                <h3 className="text-red-500 text-3xl font-bold">
                  33K+
                </h3>

                <p className="text-gray-400">
                  Followers
                </p>

              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 text-center">

                <h3 className="text-red-500 text-3xl font-bold">
                  500+
                </h3>

                <p className="text-gray-400">
                  Reels
                </p>

              </div>

              <div className="bg-zinc-900 rounded-2xl p-6 text-center">

                <h3 className="text-red-500 text-3xl font-bold">
                  8M+
                </h3>

                <p className="text-gray-400">
                  Views
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-6 mt-10">

  {/* Instagram */}

  <a
    href="https://instagram.com/lokesh_mystery_files"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
  >
    <FaInstagram className="text-xl" />
    Follow on Instagram
  </a>

  {/* Facebook */}

  <a
    href="https://facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-blue-600 px-8 py-4 rounded-full text-white font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
  >
    <FaFacebookF className="text-xl" />
    Follow on Facebook
  </a>

</div>

          </div>

        </div>

      </div>

    </section>
  );
}