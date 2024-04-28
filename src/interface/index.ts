import { MouseEventHandler } from "react";

export interface IProduct {
   id: number;
   name: string;
   brand: string;
   description: string;
   photo: string;
   price: string;
}

export interface ICard {
   id: number;
   src: string;
   name: string;
   description: string;
   price: string;
   amount: number;
}

export interface Iitem {
   product: ICard;
}

export interface ICheckout {
   onClose: MouseEventHandler<HTMLDivElement>;
}