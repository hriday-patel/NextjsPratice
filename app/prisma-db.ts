import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const hriday = new PrismaBetterSqlite3({
  url: "file:./prisma/app.db",
});

const prisma = new PrismaClient({ adapter: hriday });

const seeding = async () => {
  const products = await prisma.product.count();
  if (products === 0) {
    await prisma.product.createMany({
      data: [
        { name: "Product 1", price: 500, description: "Description 1" },
        { name: "Product 2", price: 700, description: "Description 2" },
        { name: "Product 3", price: 1000, description: "Description 3" },
      ],
    });
  }
};

seeding();

export const getAllProducts = async () => {
  await new Promise((res) => setTimeout(res, 1500));
  const getAllProducts = await prisma.product.findMany();
  return getAllProducts;
};

export const getProduct = async (id: number) => {
  await new Promise((res) => setTimeout(res, 1500));
  const getProduct = await prisma.product.findUnique({
    where: { id },
  });
  return getProduct;
};

export const deleteProduct = async (id: number) => {
  await new Promise((res) => setTimeout(res, 1500));
  const updateProducts = await prisma.product.delete({
    where: { id },
  });
  return updateProducts;
};

export const updateProduct = async (
  id: number,
  name: string,
  price: number,
  description?: string
) => {
  await new Promise((res) => setTimeout(res, 1500));
  const updateProducts = await prisma.product.update({
    where: { id },
    data: { name, price, description },
  });
  return updateProducts;
};

export const addProduct = async (
  name: string,
  price: number,
  description?: string
) => {
  await new Promise((res) => setTimeout(res, 1500));
  const newProducts = await prisma.product.create({
    data: { name, price, description },
  });
  return newProducts;
};
