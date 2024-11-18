import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import ListProject from "./sections/listProjects";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">

      <header className="flex justify-between items-center p-5">
        <Navbar />
      </header>

      <div>
        <ListProject />
      </div>

      {/* Professional Journey Section */}
      <section className="text-center py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Professional Development Journey
        </h2>
        <div className="flex justify-center gap-10 text-2xl">
          <span>🚀 Google</span>
          <span>👽 Microsoft</span>
          <span>☁️ Amazon</span>
          <span>🔋 Tesla</span>
        </div>
      </section>


      <footer className="bg-gray-800 text-gray-400 py-10">
        <Footer />
      </footer>
    </div>
  );
}
