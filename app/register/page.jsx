'use client'
import styles from "../login/login.module.scss"
import { useState,useRef } from "react";
import { redirect, useRouter } from "next/navigation";
import axios from "axios";
import { useAppState } from "../context/stateContext";
import Image from "next/image";
import { Button } from "primereact/button";
import { Toast } from 'primereact/toast';
import Link from "next/link";


const Register = () => {
  const {user} = useAppState()
  const [name, setName] = useState("sdg");
  const [username, setUsername] = useState("modiniraj1034@gmail.com");
  const [password, setPassword] = useState("dsg");
  const router = useRouter();
  const toast = useRef(null)
  const handleRegister = async (e) => {
    const userData = { name, username, password };
    try{
      const response = await axios.post("https://merina-backend-production.up.railway.app/register",userData);
      // console.log(response)
      if(response.data){
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Registered Succesfull' })
        router.push("/login")
      }
    }catch(err){
      if(err.response && err.response.status===409)
      {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'User Found' })
      }
      else{
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Something Went Wrong' })
      }
    }
    setName("");
    setUsername("");
    setPassword("");
  };

  const google = () => {
    window.open("https://merina-backend-production.up.railway.app/google", "_self");
  };
  if(user.username) redirect("/")
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