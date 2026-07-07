import { FaInstagram, FaFacebookF, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#050505] py-24">

      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-center text-5xl font-bold text-white">
          Contact Us
        </h2>

        <p className="text-center text-gray-400 mt-6 max-w-2xl mx-auto">
          Have a mystery to share? Send your story or collaborate with
          Lokesh Mystery Files.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <div className="bg-zinc-900 rounded-3xl p-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 p-4 rounded-xl bg-black text-white border border-zinc-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 p-4 rounded-xl bg-black text-white border border-zinc-700"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full mb-5 p-4 rounded-xl bg-black text-white border border-zinc-700"
            />

            <button className="w-full bg-red-600 py-4 rounded-xl text-white font-bold hover:bg-red-700 transition">
              Send Message
            </button>

          </div>

          {/* Social Links */}

          <div className="flex flex-col justify-center gap-6">

            <a
              href="https://instagram.com/lokesh_mystery_files"
              className="flex items-center gap-4 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 p-5 rounded-2xl text-white hover:scale-105 transition"
            >
              <FaInstagram size={28}/>
              Follow on Instagram
            </a>

            <a
              href="https://facebook.com/"
              className="flex items-center gap-4 bg-blue-600 p-5 rounded-2xl text-white hover:scale-105 transition"
            >
              <FaFacebookF size={28}/>
              Follow on Facebook
            </a>

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-4 bg-red-600 p-5 rounded-2xl text-white hover:scale-105 transition"
            >
              <FaEnvelope size={28}/>
              Email Us
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}