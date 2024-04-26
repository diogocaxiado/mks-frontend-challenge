import { Item } from '../Item/item';
import styles from './checkout.module.scss';

export function Checkout() {
   return (
      <div className={styles.checkout}>
         <h2 className={styles.title}>Carrinho<br/> de compras</h2>

         <div className={styles.close}>
            <span>X</span>
         </div>

         <div className={styles.items}>
            <Item />
            <Item />
         </div>

         <div className={styles.info}>
            <strong className={styles.text}>Total:</strong>
            <strong className={styles.price}>R$798</strong>
         </div>

         <footer className={styles.button}>
            <span>Finalizar Compra</span>
         </footer>
      </div>
   )
}