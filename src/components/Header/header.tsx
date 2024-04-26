import Cart from '@/assets/cart.svg';

import Image from 'next/image';

import styles from "./header.module.scss";

export function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.title}>
            <h1>MKS</h1>
            <span>Sistemas</span>
         </div>

         <div className={styles.button}>
            <Image className={styles.cart} src={Cart} alt='Cart to shop' width={60} height={60} />
            <span className={styles.amount}>0</span>
         </div>
      </header>
   )
}