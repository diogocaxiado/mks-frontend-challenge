'use client'

import { Card } from "@/components/Card/card";
import { motion } from "framer-motion";

import styles from "./page.module.scss";
import { useDataContext } from "@/context/product";
import { UseQueryResult, useQuery } from "react-query";
import { IProduct } from "@/interface";
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const {getProducts} = useDataContext();

  const { data, isLoading }: UseQueryResult<IProduct[], unknown> = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  })

  return (
      <main className={styles.main}>
        {isLoading ? (
          <div className={styles.loading}>
            <ClipLoader 
              loading={isLoading}
              size={150}
              aria-label="Loading Spinner"
            />
          </div>
        ) : (
            data!.map((product: IProduct) => {
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
          )
        }
          
      </main>
  );
}
