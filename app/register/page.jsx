"use client";
import styles from "../login/login.module.scss";
import { useState, useRef } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useAppState } from "../context/stateContext";
import Image from "next/image";
import { Button } from "primereact/button";
import toast from "react-hot-toast";
import Link from "next/link";

const Register = () => {
  const { user } = useAppState();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleRegister = async (e) => {
    // const userData = { name, username, password };
    // const registerPromise = new Promise(async (resolve, reject) => {
    //   try {
    //     const response = await axios.post(
    //       "http://localhost:5555/register",
    //       userData
    //     );
    //     // console.log(response)
    //     if (response.data) {
    //       resolve();
    //       router.push("/login");
    //     }
    //   } catch (err) {
    //     reject();
    //   }
    //   setName("");
    //   setUsername("");
    //   setPassword("");
    // });

    // try {
    //   await toast.promise(registerPromise, {
    //     loading: "Registering...",
    //     success: <b>Registered Succesfully</b>,
    //     error: <b>{errorMsg}</b>,
    //   });
    // } catch (err) {}
  };

  const google = () => {
    // window.open("http://localhost:5555/google", "_self");
  };
  if (user.username) redirect("/");
  return (
    <div className={styles.loginScreen}>
      <div className="card flex justify-content-center"></div>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={styles.input}
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="email"
            className={styles.input}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className={styles.input}
          />
        </div>
        <div className={styles.loginButtons}>
          <Button
            onClick={handleRegister}
            className={styles.button}
            disabled={(!username || !password || !name) && true}
            label="Submit"
          />
          <Button
            onClick={google}
            className={styles.button}
            label="Sign In  with Google"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
