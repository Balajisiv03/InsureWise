import insurance from "../assets/Insurance.jpg";
import insurance2 from "../assets/insurance2.jpeg";
import lifeInsurance from "../assets/lifeinsurance.jpeg";
import healthInsurance from "../assets/healthinsurance.jpg";
import transportInsurance from "../assets/transportinsurance.jpg";
import homeInsurance from "../assets/homeinsurance.jpg";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto p-4">
        <section
          id="home"
          className="bg-white shadow-md rounded-lg p-6 mb-6 mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">
            Welcome to Our Insurance Services
          </h2>
          <p className="mb-4">
            We offer a range of insurance services to protect you and your
            family. Discover our comprehensive plans designed to give you peace
            of mind.
          </p>
          <img
            src={insurance}
            alt="Insurance"
            className="rounded-lg shadow-md"
          />
        </section>

        <section id="plans" className="mb-6">
          <h2 className="text-xl font-bold mb-4">Our Insurance Plans</h2>
          <div className="grid md:grid-cols-2 gap-4 ">
            <Link to="/lifeinsurance">
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg  hover:border-blue-500 border">
                <h3 className="text-lg font-bold">Life Insurance</h3>
                <p className="mt-2">
                  Protect your family future with our life insurance plans.
                </p>
                <img
                  src={lifeInsurance}
                  alt="Life Insurance"
                  className="rounded-lg shadow-md w-full h-64 object-cover mt-2"
                />
              </div>
            </Link>
            <Link to="healthinsurance">
              {" "}
              <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg  hover:border-blue-500 border">
                <h3 className="text-lg font-bold">Health Insurance</h3>
                <p className="mt-2">
                  Ensure you have access to the best medical care with our
                  health insurance.
                </p>
                <img
                  src={healthInsurance}
                  alt="Health Insurance"
                  className="mt-2 rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </Link>
            <Link to="vehicleinsurance">
              {" "}
              <div className="bg-white shadow-md rounded-lg p-4 hover:border-blue-500 border">
                <h3 className="text-lg font-bold">Vehicle Insurance</h3>
                <p className="mt-2">
                  Keep your vehicle protected with our comprehensive auto
                  insurance plans.
                </p>
                <img
                  src={transportInsurance}
                  alt="Auto Insurance"
                  className="rounded-lg shadow-md w-full h-64 object-cover mt-2"
                />
              </div>
            </Link>
            <Link to="homeinsurance">
              {" "}
              <div className="bg-white shadow-md rounded-lg p-4 hover:border-blue-500 border">
                <h3 className="text-lg font-bold">Home Insurance</h3>
                <p className="mt-2">
                  Safeguard your home and possessions with our home insurance
                  policies.
                </p>
                <img
                  src={homeInsurance}
                  alt="Home Insurance"
                  className="rounded-lg shadow-md w-full h-64 object-cover mt-2"
                />
              </div>
            </Link>
          </div>
        </section>

        <section
          id="about"
          className="bg-white shadow-md rounded-lg p-6 mb-6 flex"
        >
          <div>
            <h2 className="text-xl font-bold mb-4">Why Choose Us ?</h2>
            <p className="mb-4">
              Our commitment is to provide the best insurance solutions with a
              customer-centric approach. We offer:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                Tailored insurance plans to meet your needs
              </li>
              <li className="mb-2">24/7 customer support</li>
              <li className="mb-2">Affordable premiums</li>
              <li className="mb-2">Fast and easy claims process</li>
            </ul>
          </div>
          <div>
            <img
              src={insurance2}
              alt="Why Choose Us"
              className="rounded-lg shadow-md h-64 object-cover mt-2 ml-4"
            />
          </div>
        </section>
      </main>

      <footer className="bg-slate-300 p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="mt-2">
              123 Haze St, Chennai 456
              <br />
              Chennai, Tamil Nadu, 600045
            </p>
            <p className="mt-2">
              Email: info@InsureWise.com
              <br />
              Phone: 5453964756
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul>
              <li className="mt-2">
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a href="#plans" className="hover:underline">
                  Plans
                </a>
              </li>
              <li className="mt-2">
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold">Follow Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:underline">
                Facebook
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-6">
          <p>&copy; 2024 Insurance Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
