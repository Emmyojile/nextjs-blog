import Image from 'next/image'
import styles from './page.module.css'
// import Hero from 'public/hero.jpg'

export default function Home() {
  return (
    <div>
      <div></div>
      <div></div>
      <Image src="/hero.jpg" width={20} height={20} className={styles.img}/>
    </div>
  )
}
