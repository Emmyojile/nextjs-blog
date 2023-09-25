import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="testId">
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={400}
          height={250}
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Test</h1>
        <p className={styles.desc}>Desc</p>
      </div>
      </Link>
    </div>
  )
}

export default Blog