import { addProduct } from "@/app/prisma-db";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, description } = body;
  const allProducts = await addProduct(name, parseInt(price), description);
  return Response.json(allProducts);
}
