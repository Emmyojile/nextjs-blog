"use client"
import React from "react";
import styles from "./login.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className="styles.button">Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login With Google</button>
    </div>
  );
};

export default Login;
