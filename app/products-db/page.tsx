import { getAllProducts } from "../prisma-db";

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
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
export default page;
