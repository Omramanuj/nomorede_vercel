import React from 'react'
import styles from './contacePage.module.css'
import GetInTouch from '@/components/ContactUS/GetInTouch'
import ContactForm from '@/components/ContactUS/ContactForm'
import { Footer } from '@/components/footer/Footer'

export default function page() {
  return (
    <div className={styles.contactPage}>
    
        <GetInTouch />
        <hr />
        <ContactForm />
        <hr />
        <Footer />
        
    </div>
  )
}
