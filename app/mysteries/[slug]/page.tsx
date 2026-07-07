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

        <h2 className="text-4xl font-bold mb-8">

          Mystery Overview

        </h2>

        <p className="text-gray-300 leading-9 text-xl">

          {mystery.description}

        </p>

      </section>

    </main>
  );
}