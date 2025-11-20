"use server";

import { addProduct } from "../prisma-db";
import { redirect } from "next/navigation";
export type FormState = {
  name?: string;
  price?: string;
  description?: string;
  errors: Errors
};

export type Errors = {
    name?: string,
    price?: string,
    description?: string
}


export async function AddProduct(prevState: FormState, formData: FormData) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;

  const errors: Errors = {};

  if (!name) {
    errors.name = "Please enter a name";
  }
  if (!price) {
    errors.price = "Please enter a price";
  }
  if (!desc) {
    errors.description = "Please enter description";
  }

  if (Object.keys(errors).length > 0) {
    return {...prevState, errors} ;
  }
  await addProduct(name, parseInt(price), desc);
  redirect("/products-db");
}
