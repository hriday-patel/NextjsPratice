import fs from "fs";
import path from "path";

import { addProduct } from "@/app/prisma-db";
import Products from "../../products.json";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, description } = body;
  Products.push({ name, price: parseInt(price), description });
  fs.writeFileSync(path.join("products.json"), JSON.stringify(Products));
  return Response.json(Products);
}
