"use client";
import Link from "next/link";
import { useOptimistic } from "react";
import { deletePro } from "../utils/actions";
import { Product } from "./page";
import Form from "next/form";

const FormS = ({allProducts}: {allProducts: Product[]}) => {
  const [optimisticProducts, setOptimisticAllProducts] = useOptimistic(
    allProducts,
    (currentProducts, prodId) => {
      return currentProducts.filter((product) => product.id != prodId);
    }
  );

  const deleteProduct = async (id: number) => {
    setOptimisticAllProducts(id);
    await deletePro(id);
  };
  return (
    <div>
      {optimisticProducts.map((product: Product) => (
        <div key={product.id} className="mb-4 p-4 border shadow-md">
          <Link
            href={`/update-product/${product.id}`}
            className="text-3xl font-bold"
          >
            {product.name}
          </Link>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
          <Form action={deleteProduct.bind(null, product.id)}>
            <button
              type="submit"
              className="px-2 py-1 rounded-md text-white bg-red-500"
            >
              Delete
            </button>
          </Form>
        </div>
      ))}
    </div>
  );
};
export default FormS;
