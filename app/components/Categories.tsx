import Link from "next/link";

const categories = [
  {
    icon: "👻",
    title: "Paranormal",
    slug: "paranormal",
    description: "Ghost sightings, haunted houses & unexplained events."
  },
  {
    icon: "🛸",
    title: "Alien Mysteries",
    slug: "alien-mysteries",
    description: "UFO sightings, Area 51 and extraterrestrial encounters."
  },
  {
    icon: "🏚️",
    title: "Haunted Places",
    slug: "haunted-places",
    description: "Explore abandoned buildings and cursed locations."
  },
  {
    icon: "🔪",
    title: "True Crime",
    slug: "true-crime",
    description: "Famous criminal investigations and unsolved cases."
  },
  {
    icon: "🌊",
    title: "Ocean Mysteries",
    slug: "ocean-mysteries",
    description: "Bermuda Triangle and unexplained disappearances."
  },
  {
    icon: "📜",
    title: "Ancient Mysteries",
    slug: "ancient-mysteries",
    description: "Lost civilizations and mysterious artifacts."
  }
];

export default function Categories() {
  return (
    <section id="categories" className="bg-[#050505] py-24">

      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-white text-5xl font-bold text-center mb-16">
          <span className="text-red-600">Explore</span> By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

{categories.map((category) => (

  <Link
    key={category.title}
    href={`/categories/${category.slug}`}
  >

    <div
      className="
        group
        bg-zinc-900
        rounded-3xl
        border
        border-zinc-800
        p-8
        hover:border-red-600
        hover:-translate-y-3
        hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]
        transition-all
        duration-500
        cursor-pointer
      "
    >

      <div className="text-6xl">
        {category.icon}
      </div>

      <h3 className="text-white text-3xl font-bold mt-6">
        {category.title}
      </h3>

      <p className="text-gray-400 mt-4 leading-7">
        {category.description}
      </p>

    </div>

  </Link>

))}

        </div>

      </div>

    </section>
  );
}