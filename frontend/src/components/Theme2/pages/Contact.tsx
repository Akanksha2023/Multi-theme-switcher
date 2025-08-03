const Contact = () => {
  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form className="space-y-4 bg-gray-800 p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring focus:ring-indigo-400"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 h-32 resize-none focus:outline-none focus:ring focus:ring-indigo-400"
        />
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
