const Contact = () => {
  return (
    <div className="text-white max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Contact Us</h2>

      <p className="text-gray-300">
        We'd love to hear from you! Whether it's feedback, questions, or partnership opportunities — feel free to reach out.
      </p>

      <form className="bg-gray-800 p-6 rounded-lg shadow border border-gray-700 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:ring focus:ring-purple-500"
            placeholder="Your message..."
          />
        </div>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded text-white font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
