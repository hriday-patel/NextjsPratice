
import { getAllProducts } from "../prisma-db";
import Form from "./Form";
export type Product = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
};

const page = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {

  const query = (await searchParams).query;
  const allProducts: Array<Product> = await getAllProducts(query);
  return (
    <Form allProducts={allProducts}/>
  )
};
export default page;
