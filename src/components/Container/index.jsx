import styles from "./styles.module.css";
import React from 'react'

export const Container = ({ children }) => {
  return (
    <section className={styles.container}>
        {children}
    </section>
  )
}
