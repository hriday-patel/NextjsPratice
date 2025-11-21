"use server";

import { addProduct, updateProduct } from "../prisma-db";
import { redirect } from "next/navigation";
export type FormState = {
  name: string;
  price: string;
  description: string;
  errors: Errors;
};




export type Errors = {
  name?: string;
  price?: string;
  description?: string;
};

export async function AddProduct(prevState: FormState,formData: FormData) {
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

export async function EditProduct(id:number, prevState: FormState, formData: FormData){
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
  await updateProduct(id , name, parseInt(price), desc);
  redirect("/products-db");
}

// <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-4 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
//               className="rotate-90"
//             />
//           </svg>