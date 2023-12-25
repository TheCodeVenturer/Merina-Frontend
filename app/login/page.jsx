"use client";
import styles from "./login.module.scss";
import { useState, useRef } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useAppState } from "../context/stateContext";
import Image from "next/image";
import { Button } from "primereact/button";
import toast from "react-hot-toast";
import Link from "next/link";

const Login = () => {
  const { user, updateUser } = useAppState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [signInType, setSignInType] = useState("password");
  const [submit, updateSubmit] = useState(false);
  // console.log(user);
  const handleLogin = async (e) => {

    // Here we are creating a promise which Makes the Post Request and depending on the request either resolve or reject the promise,
    // Used this promise as toast.promise accepts a promise and renders output depending on resolve or reject status


    // updateSubmit(true); //disables the SignIn Button
    // const userData = { username, password };
    // const logInPromise = new Promise(async (resolve, reject) => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5555/login",
    //       userData,
    //       {
    //         withCredentials: true,
    //       }
    //     );
    //     if (response.data) {
    //       updateUser(response.data.user);
    //       setAuthenticated(true);
    //       setUsername("");
    //       setPassword("");
    //       resolve();
    //     } else {
    //       throw new Error("User Not Found");
    //     }
    //   } catch (err) {
    //     reject();
    //   }
    // });
    // try {
    //   await toast.promise(logInPromise, {
    //     loading: "Logging In...",
    //     success: <b>Logged In Succesfull</b>,
    //     error: <b>Invalid User</b>,
    //   });
    // } catch (err) {}
  };

  const handleMagicLogin = async (e) => {
    // Here we are creating a promise which Makes the Post Request and depending on the request either resolve or reject the promise,
    // Used this promise as toast.promise accepts a promise and renders output depending on resolve or reject status


    // updateSubmit(true); //disables the send Link Button
    // const sendMail = new Promise(async (resolve, reject) => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5555/magiclogin",
    //       { destination: username },
    //       { withCredentials: true }
    //     );
    //     if (response.data) resolve();
    //     else {
    //       reject();
    //     }
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });

    // try {
    //   await toast.promise(sendMail, {
    //     loading: "Sending Email...",
    //     success: <b>Email Sent Succesfully</b>,
    //     error: <b>Invalid User</b>,
    //   });
    // } catch (err) {}
  };
  const google = () => {
    // window.open("http://localhost:5555/google", "_self");
  };
  if (authenticated) redirect("/");
  return (
    <div className={styles.loginScreen}>
      <div className={styles.applicationBio}>
        <div>
          <h2>
            Welcome to <strong>MERINA</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className={styles.loginBox}>
        <Image
          src="/merina.png"
          width="101"
          height="63"
          className={`${styles.logo}`}
        />
        <div className={styles.inputBox}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="email"
            className={styles.input}
          />
          {signInType === "password" && (
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className={styles.input}
            />
          )}
        </div>
        <div className={styles.loginButtons}>
          <Button
            onClick={signInType === "password" ? handleLogin : handleMagicLogin}  //calling submit function depending on the type of login
            className={styles.button}
            disabled={
              (submit ||
                !username ||
                (!password && signInType === "password")) &&
              true
            } // setting disabled true if user or password is empty or user have clicked it once
            label={signInType === "password" ? "Sign In" : "Send Link"}   // setting label to type of login
          />
          <Button
            onClick={google}
            className={styles.button}
            label="Sign In  with Google"
          />
          <Button
            onClick={() =>
              setSignInType((currentSignInType) => {
                return currentSignInType === "password" ? "magic" : "password";
              }) // change type of login
            }
            className={styles.button}
            label={
              signInType === "password"
                ? "Sign In with Magic Link"
                : "Sign In with Password"
            } // setting label to type of login requested
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
