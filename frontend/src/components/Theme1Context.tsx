import themerImage from '../assets/images/Themer2.jpg';
import multiTemer from "../assets/images/multiTemer.jpg";

// Theme1Content component that renders the main content for Theme 1

const Theme1Content = () => {
 

  return (
    <div className="theme1 min-h-screen px-4 sm:px-6 py-10 bg-white text-gray-800">
      
      {/* 🏠 Hero Section */}
      <section id="home" className="pt-24 scroll-mt-24 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Simple App <br /> For Your Business
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Streamline your workflow with our simple and efficient app
            designed to help you manage your business with ease.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-5 sm:px-6 py-2 rounded transition-all duration-300 text-sm sm:text-base">
            Get Started
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={themerImage}
            alt="Business Woman"
            className="rounded-lg shadow-lg max-h-[250px] sm:max-h-[300px] md:max-h-[350px] w-full max-w-sm sm:max-w-md"
          />
        </div>
      </section>
       {/* Feature Section */}
      <section id="features" className="scroll-mt-24 mt-20 px-4 sm:px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      {
        icon: "⚡",
        title: "Fast Performance",
        desc: "Built with optimization and responsiveness in mind.",
      },
      {
        icon: "🎨",
        title: "Custom Themes",
        desc: "Switch layouts, fonts, colors and structure with ease.",
      },
      {
        icon: "📱",
        title: "Mobile Friendly",
        desc: "Beautiful UI on all devices – from mobile to desktop.",
      },
      {
        icon: "🔒",
        title: "Secure by Design",
        desc: "Minimal dependencies and secure coding principles.",
      },
      {
        icon: "⚙️",
        title: "Developer Friendly",
        desc: "Easy to integrate with any backend or API.",
      },
      {
        icon: "🌍",
        title: "Global Reach",
        desc: "Built with accessibility and SEO in mind.",
      },
    ].map((f, idx) => (
      <div
        key={idx}
        className="bg-white rounded-lg p-5 shadow-sm hover:shadow-lg border border-gray-100 text-center transition-all duration-300"
      >
        <div className="text-3xl mb-3">{f.icon}</div>
        <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
        <p className="text-sm text-gray-600">{f.desc}</p>
      </div>
    ))}
  </div>
</section>



      {/* 📖 About Section */}
    <section id="about" className="scroll-mt-24 mt-20 px-4 sm:px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="space-y-4">
      <p className="text-gray-600 text-base leading-relaxed">
        We’re a passionate team building tools that empower businesses to thrive in a multi-theme environment.
        Our goal is to offer clean, structured, and scalable UI templates that cater to all use cases.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        <li>Clean design with reusable components</li>
        <li>Modern architecture with Context + Tailwind</li>
        <li>Works well on desktop and mobile</li>
      </ul>
    </div>
    <div>
      <img src={multiTemer} alt="About illustration" className="rounded-lg shadow-md w-full" />
    </div>
  </div>
</section>

      {/* Contact Section */}
    <section id="contact" className="scroll-mt-24 mt-20 px-4 sm:px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
  <form className="bg-gray-50 p-6 rounded-lg shadow space-y-4">
    <div className="flex flex-col sm:flex-row gap-4">
      <input type="text" placeholder="Name" className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400" />
      <input type="email" placeholder="Email" className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400" />
    </div>
    <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring focus:border-blue-400"></textarea>
    <button
      type="button"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white font-bold px-6 py-2 rounded shadow transition-all duration-300"
    >
      Send Message
    </button>
  </form>
</section>


<section id="testimonials" className="scroll-mt-24 mt-20 px-4 sm:px-6 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">What Our Users Say</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "John Doe",
        quote: "This app transformed how I manage my team and clients. Super smooth!",
      },
      {
        name: "Alicia Keys",
        quote: "Loved the theme switching and responsiveness. Really polished experience.",
      },
      {
        name: "Mohammed Khan",
        quote: "Simple, clean, and beautiful. Just what I was looking for!",
      },
    ].map((review, idx) => (
      <div
        key={idx}
        className="rounded-xl p-6 bg-white border border-gray-100 shadow hover:shadow-xl transition-all duration-300 relative group"
      >
        <div className="text-xl font-semibold mb-2 text-gray-800">{review.name}</div>
        <p className="text-gray-600 text-sm mb-4">{review.quote}</p>
        {/* Glowing Stars */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="text-yellow-400 text-lg transition-all duration-300 group-hover:drop-shadow-glow"
            >
              ★
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
<section id="faq" className="scroll-mt-24 mt-20 px-4 sm:px-6 max-w-4xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
  <div className="space-y-4">
    {[
      {
        q: "Can I switch themes without losing my data?",
        a: "Yes! Your data remains intact when switching themes. Only layout and visuals change.",
      },
      {
        q: "Is this app mobile-friendly?",
        a: "Absolutely. Every theme is fully responsive and optimized for mobile devices.",
      },
      {
        q: "Can I use this setup in my real project?",
        a: "Of course. The architecture is scalable and developer-friendly.",
      },
    ].map((faq, idx) => (
      <details key={idx} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
        <summary className="font-medium cursor-pointer hover:text-blue-600 transition-all">
          {faq.q}
        </summary>
        <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
      </details>
    ))}
  </div>
</section>

    </div>
  );
};

export default Theme1Content;
