'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { NewsList } from "@/components/NewsList";

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <h1 className={styles.header}>Упс...</h1>
      <p className={styles.desc}>Сайт проходит техническое обслуживание</p>
      <Image src={"/tech-maintenance.jpg"} alt={"Техническое обслуживание"} width={600} height={600}/>
      <NewsList />
    </div>
      
    </>
  );
}
