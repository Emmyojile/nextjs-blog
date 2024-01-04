import Link from "next/link";
import styles from "./authLinks.module.css";
const AuthLinks = () => {
  const status = "unauthentiwcated";
  return (
    <>
      {status === "unauthenticated" ? (
        <div className={styles.links}>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
