"use client"
import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

export const AuthLinks = () => {
    const [open, setOpen] =  React.useState(false)
    const status = 'notauthenticated'

    const closeMenu = () => setOpen(false)

    return (
        <div className={styles.container}>
            {status === 'notauthenticated' ? (
                <Link href="/joinWaitlist">
                    <button className={`${styles.joinButton} joinButton`}>
                        + Join Waitlist
                    </button>
                </Link>
            ) : (
                <>
                    <span className={styles.link}>Logout</span>
                </>
            )}

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <div className={styles.closeButton} onClick={closeMenu}>X</div>
                    <Link href="/Home" className={styles.responsiveLink} onClick={closeMenu}>Homepage</Link>
                    <Link href="/contactUs" className={styles.responsiveLink} onClick={closeMenu}>Contact</Link>
                    <Link href="/LogIn" className={styles.responsiveLink} onClick={closeMenu}>LogIn</Link>
                    <Link href="/joinWaitlist" className={styles.responsiveLink} onClick={closeMenu}>Join Waitlist</Link>
                </div>
            )}
        </div>
    )
}

// :)
