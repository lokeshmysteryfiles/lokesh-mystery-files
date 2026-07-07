import Image from "next/image";
import { mysteries } from "@/data/mysteries";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function MysteryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mystery = mysteries.find((m) => m.slug === slug);

  if (!mystery) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white">
         <div className="max-w-7xl mx-auto px-8 pt-8">
  <Link
    href="/"
    className="inline-flex items-center gap-2 text-white hover:text-red-500 transition"
  >
    ← Back to Home
  </Link>
</div>

      <div className="relative h-[500px]">

        <Image
          src={mystery.image}
          alt={mystery.title}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute bottom-16 left-20">

          <span className="bg-red-600 px-4 py-2 rounded-full">

            {mystery.category}

          </span>

          <h1 className="text-6xl font-black mt-6">

            {mystery.title}
           

          </h1>

        </div>

      </div>

     <section className="max-w-5xl mx-auto py-20 px-8">

  <h2 className="text-5xl font-black mb-10">
    Mystery Overview
  </h2>

  {/* Overview */}

  {"overview" in mystery && mystery.overview && (

    <p className="text-gray-300 text-xl leading-9 mb-14">

      {mystery.overview}

    </p>

  )}

  {/* Sections */}

  {"sections" in mystery && mystery.sections?.map((section, index) => (

    <div key={index} className="mb-14">

      <h2 className="text-3xl font-bold text-red-500 mb-6">

        {section.title}

      </h2>

      <p className="text-gray-300 text-xl leading-9">

        {section.content}

      </p>

    </div>

  ))}

  {/* Old Mysteries */}

  {"description" in mystery && mystery.description && !("overview" in mystery) && (

    <p className="text-gray-300 text-xl leading-9">

      {mystery.description}

    </p>

  )}

  {/* Reel */}

  {"instagram" in mystery && mystery.instagram && (

    <a
      href={mystery.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-10
        inline-block
        bg-gradient-to-r
        from-pink-500
        via-red-500
        to-yellow-500
        px-8
        py-4
        rounded-full
        text-white
        font-bold
        hover:scale-105
        transition
      "
    >
       Watch Instagram Reel
    </a>

  )}

</section>

    </main>
  );
}