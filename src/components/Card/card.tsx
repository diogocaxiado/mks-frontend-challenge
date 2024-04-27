'use client'

import Image from 'next/image';
import Bag from '@/assets/bag.svg';

import styles from './card.module.scss';
import { ICard } from '@/interface';
import { useDataContext } from '@/context/product';

export function Card({id, src, name, description, price, amount}: ICard) {
   const {itemsInCart, setItemsInCart} = useDataContext();

   function handleAddToCart() {
      const product = {
         id,
         src,
         name,
         description,
         price,
         amount
      }

      const itemAlreadyInCart = itemsInCart.some(item => item.id === product.id);

      if (!itemAlreadyInCart) {
         setItemsInCart([...itemsInCart, product]);
      }
      
      return product
   }

   return (
      <section className={styles.card} key={id}>
         <Image className={styles.productImg} src={src} width={128} height={160} alt='Product image' />

         <div className={styles.productDiv}>
            <span className={styles.productName}>{name}</span>

            <div className={styles.productPrice}>
               <strong>{price}</strong>
            </div>
         </div>
         
         <p className={styles.productDescription}>{description}</p>

         <div className={styles.button} onClick={() => handleAddToCart()}>
            <Image className={styles.image} src={Bag} width={14} height={16} alt='Shopping bag image' />
            <span className={styles.text}>Comprar</span>
         </div>
      </section>
   )
}