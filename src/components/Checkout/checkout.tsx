'use client'

import { ICheckout } from '@/interface';
import styles from './checkout.module.scss';
import { useDataContext } from '@/context/product';
import { Item } from '../Item/item';

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
               console.log(item);
               
               return <Item key={item.id} product={item} />
            })}
         </div>

         <div className={styles.bottom}>
            <div className={styles.info}>
               <strong className={styles.text}>Total:</strong>
               <strong className={styles.price}>{handleTotalValue()}</strong>
            </div>

            <footer className={styles.button}>
               <span>Finalizar Compra</span>
            </footer>
         </div>
      </div>
   )
}