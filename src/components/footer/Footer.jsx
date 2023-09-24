import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  console.log('hello');
  return (
    <div className={styles.container}>
        <div>@2023 EmmyDev. All Rights Reserved</div>
        <div className={styles.socials}>
          <Image src='/facebook.png' width={20} height={20} className={styles.icon} alt='Emmy Dev'/>
          <Image src='/linkedin.png' width={20} height={20} className={styles.icon} alt='Emmy Dev'/>
          <Image src='/twitter.png' width={20} height={20} className={styles.icon} alt='Emmy Dev'/>
          <Image src='/instagram.png' width={20} height={20} className={styles.icon} alt='Emmy Dev'/>
        </div>
    </div>
  )
}

export default Footer