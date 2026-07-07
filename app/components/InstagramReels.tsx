import Image from "next/image";

const reels = [
  {
    title: "The Sophia Koetsier Mystery Explained",
    image: "/images/reels/reel1.jpg",
    likes: "631K",
    link: "https://www.instagram.com/reel/DYCZPg5MNF2/?igsh=MWI1czJhaXlrb2tweA=="
  },
  {
    title: "Empty Flat Mystery 🔥 Finally Solved After 26 Years!",
    image: "/images/reels/reel2.jpg",
    likes: "25K",
    link: "https://www.instagram.com/reel/DWTvU8giYAW/?igsh=MTRhY3cydDF1bjJpZQ=="
  },
  {
    title: "Mullivaikkal Mystery Explained",
    image: "/images/reels/reel3.jpg",
    likes: "201K",
    link: "https://www.instagram.com/reel/DYWF4I9MuO-/?igsh=M2M2aGh4bmk4Z2Q1"
  }
];

export default function InstagramReels() {
  return (
    <section  id="instagram"className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-white mb-16">
           Latest Instagram Reels
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reels.map((reel) => (

            <div
              key={reel.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-pink-500 hover:-translate-y-3 transition-all duration-500"
            >

              <div className="relative h-[500px]">

                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-white text-2xl font-bold">
                  {reel.title}
                </h3>

                <p className="text-pink-400 mt-3">
                  ❤️ {reel.likes}
                </p>

                <a
                  href={reel.link}
                  target="_blank"
                  className="inline-block mt-6 bg-gradient-to-r from-pink-500 to-red-500 px-6 py-3 rounded-full text-white font-bold hover:scale-105 transition"
                >
                  ▶ Watch Reel
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}