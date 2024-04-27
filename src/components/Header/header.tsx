'use client'

import Cart from '@/assets/cart.svg';

import { useState } from 'react';
import Image from 'next/image';

import styles from "./header.module.scss";
import { Drawer } from '@mui/material';
import { Checkout } from '../Checkout/checkout';
import { useDataContext } from '@/context/product';

export function Header() {
   const [menu, setMenu] = useState<boolean>(false);
   const {itemsInCart} = useDataContext();
   
   function toggleDrawer(value: boolean) {
      setMenu(value)
   }

   return (
      <header className={styles.header}>
         <div className={styles.title}>
            <h1>MKS</h1>
            <span>Sistemas</span>
         </div>

         <div className={styles.button} onClick={() => toggleDrawer(true)}>
            <Image className={styles.cart} src={Cart} alt='Cart to shop' width={60} height={60} />
            <span className={styles.amount}>{itemsInCart.length}</span>
         </div>

         <Drawer open={menu} onClose={() => toggleDrawer(false)} anchor='right'>
            <Checkout onClose={() => toggleDrawer(false)} />
         </Drawer>
      </header>
   )
}