import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (evt) => {
    evt.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (evt) => {
    evt.preventDefault();
    auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser) => {
        console.log(authUser)
      }).catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input type="email" required ref={emailRef} placeholder="Email"/>
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signInScreen__gray">New to Netflix? </span>
          <span className="signInScreen__link" onClick={register}>Sign up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignInScreen;
