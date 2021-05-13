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

  return <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
          <img src="/images/iphone-with-profile.jpg" alt="iphone with profile" className="max-w-full"/>
      </div>
      <div className="flex flex-col w-2/5">
          <p>Form space</p>
      </div>
  </div>;
}

export default Login;
