"use client";
import styles from "./login.module.scss";
import { useState,useRef } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useAppState } from "../context/stateContext";
import Image from "next/image";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import Link from "next/link";

const Login = () => {
  const { user, updateUser } = useAppState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [signInType, setSignInType] = useState("password");
  const toast = useRef(null);
  // console.log(user);
  const handleLogin = async (e) => {
    const userData = { username, password };
    try {
      const response = await axios.post(
        "http://localhost:5555/login",
        userData,
        { withCredentials: true }
      );
      if(response.data){
        const newPromise = new Promise((resolve) => {
          toast.current.show({ severity: 'info', summary: 'Info', detail: 'Login Succesfull' })
          updateUser(response.data.user);
          setAuthenticated(true);
          setUsername("");
          setPassword("");
        });
        newPromise.then(()=>{},()=>{});
      }
      throw new Error("User Not Found")
    } catch (err) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Invalid User' })
      console.log(err);
    }
  };

  const handleMagicLogin = async (e) =>{
    try {
      const response = await axios.post(
        "http://localhost:5555/magiclogin",
        {destination:username},
        { withCredentials: true }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  const google = () => {
    window.open("http://localhost:5555/google", "_self");
  };
  if (authenticated) redirect("/");
  return (
    <div className={styles.loginScreen}>
      <div className="card flex justify-content-center">
      <Toast ref={toast} />
      </div>
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
            onClick={signInType === "password" ? handleLogin : handleMagicLogin}
            className={styles.button}
            disabled={(!username || (!password && signInType==="password")) && true}
            label={
              signInType === "password"
                ? "Sign In"
                : "Send Link"
            }
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
              })
            }
            className={styles.button}
            label={
              signInType === "password"
                ? "Sign In with Magic Link"
                : "Sign In with Password"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
