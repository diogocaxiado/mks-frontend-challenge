import Image from 'next/image';
import Product from '@/assets/product.svg';
import Bag from '@/assets/bag.svg';

import styles from './card.module.scss';

interface ICard {
   name: string;
   src: string;
   alt: string;
}

export function Card() {
   return (
      <section className={styles.card}>
         <Image className={styles.productImg} src={Product} width={128} height={160} alt='Product image' />

         <div className={styles.productDiv}>
            <span className={styles.productName}>Apple Watch Series 4 GPS</span>

            <div className={styles.productPrice}>
               <strong>R$399</strong>
            </div>
         </div>
         
         <p className={styles.productDescription}>Redesigned from scratch and completely revised.</p>

         <div className={styles.button}>
            <Image className={styles.image} src={Bag} width={14} height={16} alt='Shopping bag image' />
            <span className={styles.text}>Comprar</span>
         </div>
      </section>
   )
}