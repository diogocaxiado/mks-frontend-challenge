'use client'

import { ICheckout } from '@/interface';
import { motion } from "framer-motion";

import { useDataContext } from '@/context/product';
import { Item } from '../Item/item';

import styles from './checkout.module.scss';

export function Checkout({onClose}: ICheckout) {
   const {itemsInCart} = useDataContext();

   function handleTotalValue() {
      let totalValue: number = 0;
      
      itemsInCart.forEach((item) => {
          const numericValue = parseFloat(item.price.replace("R$", ""));

          totalValue += numericValue * item.amount;
      });

      return `R$${totalValue}`;
   }
   

   return (
      <div className={styles.checkout}>
         <h2 className={styles.title}>Carrinho<br/> de compras</h2>

         <div className={styles.close} onClick={onClose}>
            <span>X</span>
         </div>

         <div className={styles.items}>
            {itemsInCart.map((item) => {
               return (
                  <motion.div 
                     key={item.id}
                     initial={{ x: 400 }}
                     animate={{ x: 0 }}
                     transition={{type: 'spring', damping: 6, mass: 0.5, stiffness: 30 }}
                     style={{display:'flex', justifyContent: 'center', width: '100%'}}
                  >
                     <Item product={item} />
                  </motion.div>
               );
            })}
         </div>

         <div className={styles.bottom}>
            <motion.div 
               className={styles.info}
               initial={{ x: 400 }}
               animate={{ x: 0 }}
               transition={{type: 'spring', damping: 6, mass: 0.5, stiffness: 30 }}         
            >
               <strong className={styles.text}>Total:</strong>
               <strong className={styles.price}>{handleTotalValue()}</strong>
            </motion.div>

            <footer className={styles.button}>
               <span>Finalizar Compra</span>
            </footer>
         </div>
      </div>
   )
}