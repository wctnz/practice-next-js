import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Жирные бургеры | Главная</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>Главная</h1>
        <div className={styles.mainImage}>
          <Image priority src="/amaterasu.jpeg" alt="itach" width={300} height={400} />
        </div>
        <p className={styles.text}>Текст 1</p>
        <p className={styles.text}>Текст 2</p>
        <Link legacyBehavior href="/burgers"><a className={styles.btn}>Все бургеры</a></Link>
      </div>
    </>
  )
}
