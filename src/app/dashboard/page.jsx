"use client";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store"
  //     });
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.

  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       // throw new Error("Failed to fetch data");
  //       setErr(true);
  //     }

  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false)
  //   }
  //   getData();
  // },[]);

  const session = useSession();
  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  // console.log(data);
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
