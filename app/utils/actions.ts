"use server"

import { addProduct } from "../prisma-db";
import {redirect} from 'next/navigation';


export async function AddProduct(formData: FormData){
    

    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const desc = formData.get("desc") as string;
    await addProduct(name, parseInt(price), desc);
    redirect("/products-db");
}
