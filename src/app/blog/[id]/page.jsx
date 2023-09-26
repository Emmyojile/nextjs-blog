import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store"
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    return notFound()
  }

  return res.json();
}

const BlogPost = async ({params}) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque qui
            nesciunt ipsa recusandae maxime mollitia molestiae eos, praesentium
            tempora quidem quis at blanditiis distinctio velit impedit voluptas
            odio dicta magnam.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Emmy Ojile</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat odit
          molestiae veniam assumenda qui, ipsam laborum nulla! Blanditiis
          ducimus obcaecati, harum necessitatibus ex esse labore quisquam
          eligendi quia pariatur maiores eos voluptates, eaque totam facere
          consequatur. Blanditiis quod, perferendis ipsum vero sunt similique
          voluptates fugit tempora nostrum? Saepe, nulla inventore.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
