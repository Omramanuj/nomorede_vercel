import Authentication from '@/components/signUpLogin/SingUpLogin'
import React from 'react'
import styles from "./loginPage.module.css"

export default function page() {
  return (
  
    <div className={styles.container}>
        <Authentication />
    </div>

  )
}
