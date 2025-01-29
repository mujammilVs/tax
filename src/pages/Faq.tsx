import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How do I get started?",
      answer:
        'Simply click on the "Get Started" button above to begin your tax filing process.',
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-leading encryption and security measures to protect your personal information.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer competitive pricing, with options for both simple and more complex tax filings. Pricing will be shown before you finalize the submission.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-primary">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left text-xl font-semibold text-primary mb-2 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-primary mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
