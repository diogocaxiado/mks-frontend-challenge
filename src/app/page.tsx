'use client'

import { Card } from "@/components/Card/card";

import styles from "./page.module.scss";
import { useDataContext } from "@/context/product";

export default function Home() {
  const {products} = useDataContext();

  return (
    <main className={styles.main}>
      {
        products.map((product) => {
          return (
            <Card 
              key={product.id}
              id={product.id}
              name={product.name} 
              description={product.description} 
              src={product.photo} 
              price={product.price}
              amount={1}
            />
          )
        })
      }
    </main>
  );
}
