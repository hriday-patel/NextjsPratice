"use server";

import { addProduct, deleteProduct, updateProduct } from "../prisma-db";
import { redirect } from "next/navigation";
import { revalidate } from "../time/route";
import { revalidatePath } from "next/cache";
export type FormState = {
  name: string;
  price: string;
  description: string;
  errors: Errors;
};

export type SingleError = {
  message?: string;
};

export type Errors = {
  name?: string;
  price?: string;
  description?: string;
};

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
    return {
      name,
      price,
      description: desc,
      errors,
    };
  }
  await addProduct(name, parseInt(price), desc);
  redirect("/products-db");
}

export async function EditProduct(
  id: number,
  prevState: FormState,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const price = formData.get("price") as string;
  const desc = formData.get("desc") as string;
  // const id = formData.get("id") as string;

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
    return {
      name,
      price,
      description: desc,
      errors,
    };
  }
  await updateProduct(id, name, parseInt(price), desc);
  redirect("/products-db");
}


export async function deletePro(id:number){
      await deleteProduct(id);
      revalidatePath('/products-db')
}