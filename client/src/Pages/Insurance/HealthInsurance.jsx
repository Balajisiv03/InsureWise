import { useState } from "react";
import healthinsurance from "../../assets/healthinsurance.jpg";
import { Link } from "react-router-dom";

const HealthInsurance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does health insurance cover?",
      answer:
        "Health insurance covers medical expenses including hospital stays, doctor visits, prescription drugs, and preventive care.",
    },
    {
      question: "How do I choose the right health insurance plan?",
      answer:
        "Consider your healthcare needs, budget, and preferred doctors and hospitals when choosing a health insurance plan.",
    },
    {
      question: "Can I add family members to my health insurance?",
      answer:
        "Yes, you can add family members to your health insurance policy for additional coverage.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Health Insurance</h1>
      <p>
        Ensure you have access to the best medical care with our comprehensive
        health insurance plans.
      </p>
      <img
        src={healthinsurance}
        alt="Health Insurance"
        className="rounded-lg shadow-md w-full h-64 object-cover mt-4"
      />
      <Link to="/healthform">
        <button className="bg-blue-600 text-white p-2 rounded mt-4">
          Book Insurance
        </button>
      </Link>

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

export default HealthInsurance;
