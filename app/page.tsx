import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import InstagramReels from "./components/InstagramReels";
import Hero from "./components/Hero";
import FeaturedMysteries from "./components/FeaturedMysteries";
import Categories from "./components/Categories";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
export default function Home() {
  return (
    <main className="bg-black">

      <Navbar />
<Hero />
  <InstagramReels />
<FeaturedMysteries />
<Categories />
<About />
<Contact />
<Footer />
<BackToTop />

    </main>
  );
}