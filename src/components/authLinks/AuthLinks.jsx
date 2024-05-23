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
                <Link href="/login">
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
                    <Link href="/" className={styles.responsiveLink} onClick={closeMenu}>Homepage</Link>
                    <Link href="/about" className={styles.responsiveLink} onClick={closeMenu}>About</Link>
                    <Link href="/contact" className={styles.responsiveLink} onClick={closeMenu}>Contact</Link>
                    {status === "notauthenticated" ? (
                        <Link href="/login" onClick={closeMenu}>
                            <button className={styles.responsiveButton}>
                                + Join Waitlist
                            </button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/write" className={styles.responsiveLink} onClick={closeMenu}>Write</Link>
                            <span className={styles.responsiveLink} onClick={closeMenu}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}
