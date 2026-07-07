import Image from "next/image";
import Link from "next/link";

const mysteries = [
  {
    slug: "bermuda-triangle",
    title: "Bermuda Triangle",
    image: "/images/mysteries/mystery1.jpg",
    category: "Ocean Mystery",
  },
  {
    slug: "dyatlov-pass",
    title: "The Dyatlov Pass Incident",
    image: "/images/mysteries/mystery2.jpg",
    category: "Unsolved Mystery",
  },
  {
    slug: "area-51",
    title: "Area 51 Secrets",
    image: "/images/mysteries/mystery3.jpg",
    category: "Alien Mystery",
  },
  
];

export default function FeaturedMysteries() {
  return (
    <section id="mysteries"  className="bg-black py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-white text-5xl font-bold mb-12">
          🔥 Featured Mysteries
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {mysteries.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition duration-500 hover:-translate-y-3"
            >

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-6">

                <span className="text-red-500 text-sm uppercase">
                  {item.category}
                </span>

                <h3 className="text-white text-2xl font-bold mt-3">
                  {item.title}
                </h3>

<Link
href={`/mysteries/${item.slug}`}
className="inline-block mt-6 bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition"
>
Read More →
</Link>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}