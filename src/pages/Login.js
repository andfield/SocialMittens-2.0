import { Link, useHistory } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import FirebaseContext from "../contexts/firebase";
import * as ROUTES from "../constants/Routes";

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

  const login = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmail("");
      setPassword("");
      setError(error.message);
    }
  };

  return (
    <div className="container grid items-center justify-items-center max-w-screen-md h-screen sm:flex sm:flex-row sm:mx-auto">
      <div className="hidden w-3/5 sm:flex sm:w-1/2">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iphone with profile"
          className="max-w-full"
        />
      </div>

      <div className="border-gray-primary flex flex-col items-center mb-4 w-10/12 bg-white border rounded-md sm:w-2/5">
        <h1 className="flex justify-center mt-4 w-full font-sans text-2xl font-bold">
          Social Mittens
        </h1>
        {error && (
          <p className="text-red-primary p-2 text-center text-xs">{error}</p>
        )}
        <form onSubmit={login} method="POST" className="p-2">
          <input
            aria-label="Enter you Email"
            type="text"
            placeholder="Email address"
            value={email}
            className="focus:border-light-blue-500 focus:ring-light-blue-500 text-grey-base border-gray-primary self-center mb-2 mt-2 px-4 py-5 w-full h-2 text-sm border rounded focus:outline-none focus:ring-1"
            onChange={({ target }) => setEmail(target.value)}
          />
          <input
            aria-label="Enter you password"
            type="password"
            placeholder="Password"
            value={password}
            className="focus:border-light-blue-500 focus:ring-light-blue-500 text-grey-base border-gray-primary mb-2 mr-3 px-4 py-5 w-full h-2 text-sm border rounded focus:outline-none focus:ring-1"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-medium text-white w-full rounded h-8 font-bold
            ${isInvalid && "opacity-50"}`}
          >
            login
          </button>
        </form>
        <div className="border-gray-primary flex flex-col items-center justify-center mb-2 mt-5 p-4 w-11/12 bg-white">
          <p className="text-sm">
            Don't have an account?{` `}
            <Link
              to="/signup"
              className="text-blue-medium font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
