import { useState } from "react";
import { Link } from "react-router-dom";

// import lifeinsurance from "../../assets/transportinsurance.jpg";

const faqData = [
  {
    question: "What is life insurance?",
    answer:
      "Life insurance is a contract between an insurance policy holder and an insurer, where the insurer promises to pay a designated beneficiary a sum of money in exchange for a premium, upon the death of the insured person or after a set period.",
  },
  {
    question: "How much life insurance do I need?",
    answer:
      "The amount of life insurance you need depends on various factors, including your income, debts, living expenses, and future financial goals. It's important to assess your financial situation and consult with an insurance advisor to determine the appropriate coverage.",
  },
  {
    question: "What are the different types of life insurance?",
    answer:
      "The main types of life insurance include term life insurance, whole life insurance, and universal life insurance. Each type offers different benefits and features, so it's important to choose the one that best suits your needs.",
  },
];

const LifeInsurance = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 mt-14">Life Insurance</h1>
      <p className="mb-4">
        Protect your family future with our comprehensive life insurance plans.
        Our plans are designed to provide financial security and peace of mind,
        ensuring that your loved ones are taken care of in the event of the
        unexpected.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Plan Details</h2>
        <p className="mb-2">
          Our life insurance plans offer a range of benefits, including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Affordable premiums to fit your budget</li>
          <li className="mb-2">
            Flexible coverage options tailored to your needs
          </li>
          <li className="mb-2">Guaranteed payout to beneficiaries</li>
          <li className="mb-2">Optional riders for additional coverage</li>
          <li className="mb-2">Tax benefits under applicable laws</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          Why Choose Our Life Insurance?
        </h2>
        <p className="mb-2">
          Choosing our life insurance plan means choosing peace of mind for you
          and your loved ones. Here are some reasons why our customers trust us:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">24/7 customer support</li>
          <li className="mb-2">Easy claims process with quick settlement</li>
          <li className="mb-2">High claim settlement ratio</li>
          <li className="mb-2">Comprehensive coverage options</li>
          <li className="mb-2">Trusted by thousands of policyholders</li>
        </ul>
      </section>

      <section className="mb-6">
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

      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Book Your Life Insurance</h2>
        <p className="mb-4">
          Fill out the form below to get started with our life insurance plan.
        </p>

        <Link to="/lifeform">
          <button className="bg-blue-600 text-white p-2 rounded mt-4">
            Book Insurance
          </button>
        </Link>
      </section>
    </div>
  );
};

export default LifeInsurance;
