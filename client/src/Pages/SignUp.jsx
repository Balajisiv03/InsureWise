import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [signup, setSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handlebtn = () => {
    setSignup(!signup);
  };

  // const gotohome = () => {
  //   navigate("/");
  // };

  return (
    <div className="max-w-lg p-4 ">
      <h1 className="text-3xl text-center font-semibold my-7 mt-14">
        {signup ? "SignUp" : "SignIn"}
      </h1>
      <form className="flex flex-col gap-4">
        {signup && (
          <input
            type="text"
            placeholder="username"
            id="username"
            className="border p-3 rounded-lg"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        )}
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="bg-slate-600 text-white p-3 text-lg rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          type="submit"
        >
          {signup ? "SignUp" : "Login"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>{signup ? "Already have an account" : "Don't have an account"}</p>
        <button className="text-blue-700" onClick={handlebtn} type="submit">
          {signup ? "Login" : "SignUp"}
        </button>
      </div>
    </div>
  );
};

export default SignUp;
