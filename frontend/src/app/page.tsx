'use client'

import styles from "./page.module.css";
import { NewsList } from "@/components/NewsList";

export default function Home() {
  return (
    <>
      <h1>Hello!</h1>
      <NewsList />
    </>
  );
}
