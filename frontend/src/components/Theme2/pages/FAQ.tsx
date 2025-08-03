import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I switch between themes?",
    answer: "You can use the theme dropdown at the top of the page to toggle between Theme 1, Theme 2, and Theme 3 instantly.",
  },
  {
    question: "Where does the product data come from?",
    answer: "Product data is fetched from the free Fake Store API to simulate a real e-commerce backend.",
  },
  {
    question: "Is this a real store?",
    answer: "Nope! This is a demo app built for a UI development assessment with multiple themes.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i: any) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="text-white max-w-3xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-white hover:bg-gray-700 transition"
            >
              <span className="font-medium">{faq.question}</span>
              {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {openIndex === i && (
              <div className="px-4 pb-4 text-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
