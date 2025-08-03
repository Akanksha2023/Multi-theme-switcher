const faqs = [
  {
    q: "Do you offer free shipping?",
    a: "Yes, we offer free shipping on all orders above ₹499.",
  },
  {
    q: "How can I track my order?",
    a: "You'll receive an email with a tracking link once your order ships.",
  },
  {
    q: "Can I cancel or return my order?",
    a: "Yes, we allow cancellations within 24 hours and returns within 7 days.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 space-y-6">
      <h1 className="text-3xl font-bold">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <details key={i} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <summary className="cursor-pointer font-medium text-indigo-300 hover:underline">
              {item.q}
            </summary>
            <p className="text-gray-400 mt-2">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
