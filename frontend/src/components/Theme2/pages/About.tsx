const About = () => {
  return (
    <div className="text-white space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold">About ShopMate</h2>

      <p className="text-gray-300">
        ShopMate is your go-to destination for exploring a wide range of products — from fashion and electronics to home essentials and beyond. We bring together convenience, quality, and great deals all in one place.
      </p>

      <p className="text-gray-400">
        This application is part of a multi-theme UI assessment project built using React, Tailwind CSS, and theme switching via context. This particular theme (Theme 2) demonstrates a dark mode layout with a collapsible sidebar and clean mobile responsiveness.
      </p>

      <div className="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
        <h3 className="text-xl font-semibold mb-2 text-purple-400">Technologies Used</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>React (Vite Setup)</li>
          <li>Tailwind CSS</li>
          <li>Lucide Icons</li>
          <li>Fake Store API</li>
          <li>Theme Context for Theme Switching</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
