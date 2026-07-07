
export default function Hero() {
  return (
    <main>

      <section
       id="home" 
       className="hero-bg relative h-screen bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
<div className="absolute bottom-10 animate-bounce text-center">
    <p className="text-gray-400 text-sm">
        Scroll To Discover
    </p>

    <div className="text-red-500 text-3xl">
        ↓
    </div>
</div>
      <h1
  className="text-6xl md:text-8xl lg:text-7xl font-black uppercase tracking-wider"
  style={{
    background: "linear-gradient(to bottom, #ff6666, #ff0000, #8b0000)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: `
      0 2px 0 rgba(255,255,255,0.9),
      0 4px 12px rgba(255,255,255,0.3),
      3px 3px 0 rgba(0,0,0,1),
      6px 6px 18px rgba(0,0,0,0.95),
      0 0 50px rgba(255,0,0,0.4)
    `,
  }}
>
  LOKESH MYSTERY FILES
</h1>

          <p className="text-gray-300 text-xl md:text-2xl mt-6 max-w-3xl">
            Every Mystery Has A Story...
            Every Story Has A Secret...
          </p>

          <button
  className="
    mt-10
    px-10
    py-4
    text-lg
    font-bold
    text-white
    bg-red-600
    rounded-full
    border border-red-500
    shadow-[0_0_25px_rgba(255,0,0,0.6)]
    hover:bg-red-700
    hover:shadow-[0_0_40px_rgba(255,0,0,0.9)]
    hover:scale-110
    active:scale-95
    transition-all
    duration-300
    ease-in-out
  "
>
  Explore Mysteries
</button>

        </div>

      </section>

    </main>
  );
}