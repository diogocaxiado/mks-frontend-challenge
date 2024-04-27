import Image from 'next/image';
import { Iitem } from '@/interface';

import styles from './item.module.scss';
import { useDataContext } from '@/context/product';

export function Item({product}: Iitem) {
   const {itemsInCart, setItemsInCart} = useDataContext();

   function handleRemoveItem() {
      const itemsRemoved = itemsInCart.filter((item) => {
         return item.id !== product.id;
      })
      setItemsInCart(itemsRemoved)
   }

   function removeAmount() {
      const updatedItems = itemsInCart.map(item => {
         if (item.id === product.id && item.amount > 1) {
           return { ...item, amount: item.amount - 1 };
         }
         return item;
      });

      setItemsInCart(updatedItems);
   }

   function addAmount() {
      const updatedItems = itemsInCart.map(item => {
         if (item.id === product.id) {
           return { ...item, amount: item.amount + 1 };
         }
         return item;
      });

      setItemsInCart(updatedItems);
   }


   return (
      <div className={styles.card}>
         <div className={styles.close} onClick={() => handleRemoveItem()}>
            <span>X</span>
         </div>
         
         <Image className={styles.product} src={product.src} alt='item product' width={80} height={100} />

         <span className={styles.name}>{product.name}</span>

         <div className={styles.base}>
            <div className={styles.divCount}>
               <span className={styles.nameCount}>Qtd:</span>
               <div className={styles.count}>
                  <span className={styles.decrement} onClick={() => removeAmount()}>-</span>
                  <div className={styles.line} />
                  <span className={styles.amount}>{product.amount}</span>
                  <div className={styles.line} />
                  <span className={styles.increment} onClick={() => addAmount()}>+</span>
               </div>
            </div>

            <div className={styles.price}>
               <strong>{product.price}</strong>
            </div>
         </div>
      </div>
   )
}