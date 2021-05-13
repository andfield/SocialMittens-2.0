import { useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../contexts/firebase";

function Login() {
  //Initialize useHistory hook.
  const history = useHistory();

  //Setup firebase context.
  const { firebase } = useContext(FirebaseContext);

  //Effect to set title of the document.
  useEffect(() => {
    document.title = "Login - SocialMittens";
  }, []);

  //States.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //check if data provided is empty
  const isInvalid = password === "" || email === "";

  const login = () => {};

  return (
    <div className="container grid sm:flex justify-items-center items-center sm:mx-auto max-w-screen-md h-screen sm:flex-row">
     
      <div className="w-3/5 sm:w-1/2 hidden sm:flex">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iphone with profile"
          className="max-w-full"
        />
      </div>
      
      <div className="flex flex-col w-10/12 sm:w-2/5 items-center bg-white border border-gray-primary mb-4">
        <h1 className="flex justify-center ml-2 mt-2 w-full font-sans text-2xl font-bold">
          Social Mittens
        </h1>
        {error && <p className="text-red-primary mb-4 text-xs">{error}</p>}
        <form onSubmit={login} method="POST">
          <input
            aria-label="Enter you Email"
            type="text"
            placeholder="Email address"
            className="text-grey-base border-gray-primary mb-2 mr-3 mt-4 px-4 py-5 w-full h-2 text-sm border rounded"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            aria-label="Enter you password"
            type="password"
            placeholder="Password"
            className="text-grey-base border-gray-primary mb-2 mr-3 px-4 py-5 w-full h-2 text-sm border rounded"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-500 text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
          >
            login
          </button>
        </form>
        <div className="mt-5 border-gray-primary flex flex-col items-center justify-center p-4 w-full bg-white border">
        <p className="text-sm">Don't have an account?{` `}</p>
      </div>
      </div>
    </div>
  );
}

export default Login;
