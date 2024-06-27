import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// styles
import styles from './LinkCard.module.scss'

export default function LinkCard({ href, title}) {
  
  return (    
    <>
      <Link className={styles.card}
      href={href} target="_blank" rel="noreferrer">
          <h2 className={styles.link_title}>{title}</h2>
      </Link>
    </>
    )
  }