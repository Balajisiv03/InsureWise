import { Link } from "react-router-dom";
import { useState } from "react";
import transportinsurance from "../../assets/transportinsurance.jpg";

const VehicleInsurance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What does vehicle insurance cover?",
      answer:
        "Vehicle insurance covers damage to your vehicle due to accidents, theft, and other perils. It also provides liability coverage for bodily injury and property damage to others.",
    },
    {
      question: "How do I file a vehicle insurance claim?",
      answer:
        "You can file a vehicle insurance claim by contacting our 24/7 customer support or through our online claims portal.",
    },
    {
      question: "Can I customize my vehicle insurance policy?",
      answer:
        "Yes, we offer customizable vehicle insurance plans to meet your specific needs.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Vehicle Insurance</h1>
      <p>
        Keep your vehicle protected with our comprehensive vehicle insurance
        plans.
      </p>
      <img
        src={transportinsurance}
        alt="Vehicle Insurance"
        className="rounded-lg shadow-md w-full h-64 object-cover mt-4"
      />

      <Link to="/vehicleform">
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

export default VehicleInsurance;
