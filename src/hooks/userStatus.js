import React, { useState, useEffect, useContext } from 'react';
import FirebaseContext from "../contexts/firebase";

export default function UserStatus() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      //If we have a user save it to local storage
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        //clean the storage and set state to null
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    //Cleanup the listener and close all the connection
    return () => listener();
  }, [firebase]);

  return { user };
}
