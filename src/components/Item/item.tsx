import Product from '@/assets/product.svg';

import Image from 'next/image';

import styles from './item.module.scss';

export function Item() {
   return (
      <div className={styles.card}>
         <div className={styles.close}>
            <span>X</span>
         </div>
         
         <Image className={styles.product} src={Product} alt='item product' width={80} height={100} />

         <span className={styles.name}>Apple Watch Series 4 GPS</span>

         <div className={styles.base}>
            <div className={styles.count}>
               <span className={styles.decrement}>-</span>
               <div className={styles.line} />
               <span className={styles.amount}>1</span>
               <div className={styles.line} />
               <span className={styles.increment}>+</span>
            </div>

            <div className={styles.price}>
               <strong>R$399</strong>
            </div>
         </div>
      </div>
   )
}