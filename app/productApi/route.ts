import fs from "fs";
import path from "path";

import { addProduct } from "@/app/prisma-db";
import Products from "../../products.json";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, price, description } = body;
  const newObj = {
    name,
    price: parseInt(price),
    description
  }
  await fetch('http://localhost:8000/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObj)
  })
  return Response.json(Products);
}
