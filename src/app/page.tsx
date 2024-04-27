'use client'

import { Card } from "@/components/Card/card";
import { motion } from "framer-motion";

import styles from "./page.module.scss";
import { useDataContext } from "@/context/product";

export default function Home() {
  const {products} = useDataContext();

  return (
    <main className={styles.main}>
      {
        products.map((product) => {
          return (
            <motion.div 
              key={product.id}
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{type: 'spring', damping: 5, mass: 0.5, stiffness: 30 }}
            >
              <Card 
                id={product.id}
                name={product.name} 
                description={product.description} 
                src={product.photo} 
                price={product.price}
                amount={1}
              />
            </motion.div>
          )
        })
      }
    </main>
  );
}
