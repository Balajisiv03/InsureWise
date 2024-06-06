import { useState } from "react";
import homeinsurance from "../../assets/homeinsurance.jpg";

const HomeInsurance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is covered under home insurance?",
      answer:
        "Home insurance covers damage to your home and personal property due to various perils such as fire, theft, and natural disasters.",
    },
    {
      question: "How do I file a claim?",
      answer:
        "You can file a claim by contacting our 24/7 customer support or through our online claims portal.",
    },
    {
      question: "Can I customize my home insurance policy?",
      answer:
        "Yes, we offer tailored home insurance plans to meet your specific needs.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Home Insurance</h1>
      <p>
        Safeguard your home and possessions with our comprehensive home
        insurance policies.
      </p>
      <img
        src={homeinsurance}
        alt="Home Insurance"
        className="rounded-lg shadow-md w-full h-64 object-cover mt-4"
      />

      <form className="mt-4">
        <div className="mb-4">
          <label className="text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="text-gray-700">Phone</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Book Insurance
        </button>
      </form>

      <section className="mt-6">
        <h2 className="text-xl font-bold mb-2">Frequently Asked Questions</h2>
        <div>
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center p-2 bg-gray-200 rounded-lg focus:outline-none"
              >
                <span className="font-semibold">{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-2 bg-gray-100 rounded-lg">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomeInsurance;
