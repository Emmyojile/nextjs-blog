import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
        src="https://images.pexels.com/photos/7669561/pexels-photo-7669561.jpeg?auto=compress&cs=tinysrgb&w=1600"
        fill={true}
        alt=""
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital StoryTellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting awrd winnng digital experience</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.Title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem vitae sapiente, id sed numquam eos ipsam reprehenderit sunt veniam error, atque fuga minima similique dolore ad dolorum vel mollitia cum illo officiis aut tenetur. Excepturi repellat dicta dolor! Neque?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos placeat veritatis doloribus fugiat praesentium, eaque molestias provident minima distinctio nihil.
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.Title}>What we do?</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem vitae sapiente, id sed numquam eos ipsam reprehenderit sunt veniam error, atque fuga minima similique dolore ad dolorum vel mollitia cum illo officiis aut tenetur. Excepturi repellat dicta dolor! Neque?
            <br />
            <br /> -Lorem ipsum dolor sit 
            <br />
            <br /> -Lorem ipsum dolor sit 
            <br />
            <br /> -Lorem ipsum dolor sit 
          </p>
          <Button url='contact' text='Contact'/>
        </div>
      </div>
    </div>
  );
};

export default About;
