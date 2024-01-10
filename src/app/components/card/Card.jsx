import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.01.2024 -</span>
          <span className={styles.category}> CULTURE</span>
        </div>
        <Link href={`/`}>
          <h1>Lorem ipsum dolor sit amet.</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, optio
          officia? Reiciendis reprehenderit dolor enim laboriosam. Explicabo
          accusamus repellendus cum consequuntur labore doloremque harum itaque
          accusantium quidem, consectetur id ipsam.
        </p>
        {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/> */}
        <Link href={`/`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
