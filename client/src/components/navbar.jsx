import { Link } from "react-router-dom";

const navbar = () => {
  return (
    // <header className="bg-slate-200 shadow-md">
    //   <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
    //     <Link to="/">
    //       <h1 className="font-bold text-sm sm:text-xl">
    //         <span className="text-slate-500">My</span>
    //         <span className="text-slate-7000">Insurance</span>
    //       </h1>
    //     </Link>
    //     <p className="text-slate-700 text-sm sm:text-base font-bold">
    //       Buy, Insurance with Us
    //     </p>
    //     <ul className="flex gap-6 items-center">
    //       <Link to="/">
    //         <li className="">Home</li>
    //       </Link>
    //       <Link to="/About">
    //         <li className="">About</li>
    //       </Link>
    //       <Link to="/Sign-in">
    //         <button className="hover:underline text-slate-700">SignIn</button>
    //       </Link>
    //     </ul>
    <header className="bg-slate-300 shadow-md p-3 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">
            {" "}
            <span className="text-slate-500">Insure</span>
            <span className="text-slate-7000">Wise</span>
          </Link>{" "}
        </h1>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#plans" className="hover:underline">
                Plans
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <Link to="/Sign-in">
                <button className="hover:underline text-slate-700">
                  SignIn
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    //   </div>
    // </header>
  );
};

export default navbar;
