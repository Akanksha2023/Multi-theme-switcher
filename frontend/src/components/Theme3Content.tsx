import { useEffect, useRef } from "react";
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Theme3Content = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "bounce.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="theme3 font-comic bg-gradient-to-br from-pink-200 via-yellow-100 to-green-200 text-purple-900 scroll-smooth">
      <header className="bg-pink-400 text-white p-4 text-center shadow-xl sticky top-0 z-10">
        <h1 className="text-3xl sm:text-4xl font-bold">🎠 Kids' Theme Land 🎨</h1>
        <nav className="flex flex-wrap justify-center gap-4 mt-2 text-sm sm:text-base font-semibold">
          <a href="#home">Home</a>
          <a href="#games">Games</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
        ref={(el) => void (sectionsRef.current[0] = el)}
        className="min-h-screen px-4 sm:px-10 py-12 flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-3xl sm:text-4xl mb-4 font-bold">🏡 Home Sweet Home</h2>
        <p className="text-lg max-w-xl">Welcome to the most colorful world of fun and learning!</p>
      </section>

      {/* GAMES */}
      <section
        id="games"
        ref={(el) => void (sectionsRef.current[1] = el)}
        className="min-h-screen bg-yellow-100 px-4 sm:px-10 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">🎲 Games Zone</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {[1, 2, 3].map((num, i) => (
            <div
              key={i}
              className="group w-56 sm:w-60 h-56 sm:h-60 bg-white text-center rounded-2xl shadow-xl transition-transform duration-300 hover:rotate-y-180 perspective-1000 relative"
            >
              <div className="absolute inset-0 bg-pink-300 rounded-2xl p-6 backface-hidden group-hover:rotate-y-180 transition-transform duration-500 flex items-center justify-center text-xl font-bold">
                Game {num}
              </div>
              <div className="absolute inset-0 bg-blue-200 rounded-2xl p-6 rotate-y-180 backface-hidden group-hover:rotate-y-0 transition-transform duration-500 flex flex-col items-center justify-center text-base">
                <p>🎉 Fun Game {num}</p>
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:scale-110 hover:bg-green-600 transition-all">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        ref={(el) => void (sectionsRef.current[2] = el)}
        className="min-h-screen bg-pink-100 px-4 sm:px-10 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">🖼️ Art Gallery</h2>
        <p className="text-center mb-6 text-lg">Explore our fun and colorful creations!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-60 h-60 sm:w-64 sm:h-64 overflow-hidden rounded-2xl shadow-lg transform transition duration-500 hover:scale-110 hover:rotate-2"
            >
              <img
                src={`https://picsum.photos/300/300?random=${i + 10}`}
                alt={`Art ${i}`}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        ref={(el) => void (sectionsRef.current[3] = el)}
        className="min-h-screen bg-green-100 px-4 sm:px-10 py-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">📬 Contact Us</h2>

        <form className="flex flex-col gap-6 max-w-xl mx-auto p-6 bg-white rounded-3xl shadow-xl w-full">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-full border-2 border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-full border-2 border-yellow-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all"
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-3xl border-2 border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
            rows={4}
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 text-lg rounded-full shadow-md hover:bg-pink-600 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            🎈 Send Message
          </button>
        </form>
      </section>

      <footer className="bg-purple-400 text-white text-center p-4 text-sm sm:text-base">
        © 2025 Kids' Theme Land. All rights reserved.
      </footer>
    </div>
  );
};

export default Theme3Content;
