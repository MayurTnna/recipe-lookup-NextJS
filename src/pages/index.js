import React from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css"

const index = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/home");
  };

  return (
    <>
      <div className={styles.main_title}>
        <p className={styles.main_text}>Explore food from all around the world!</p>
        <Button onClick={handleClick}>Let's go</Button>
      </div>
    </>
  );
};

export default index;
