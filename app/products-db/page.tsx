import { getAllProducts } from "../prisma-db";
import Link from "next/link";
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
};

const page = async () => {
  const allProducts: Array<Product> = await getAllProducts();
  return (
    <div>
      {allProducts.map((product: Product) => (
        <div key={product.id} className="mb-4 p-4 border shadow-md">
          <Link href={`/update-product/${product.id}`} className="text-3xl font-bold">{product.name}</Link>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
export default page;
