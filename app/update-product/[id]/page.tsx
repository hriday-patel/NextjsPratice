
import { AddProduct } from "@/app/utils/actions";
import { FormState } from "@/app//utils/actions";
import EditForm from "./EditForm";
import { getProduct } from "@/app/prisma-db";
import { notFound } from "next/navigation";

type Params = {
    params: Promise<{
        id: string
    }>
}
type Product = {
    id: number,
    name: string,
    price: number,
    description: string | null
}

const page = async ({params}: Params) => {
    const id = (await params).id;
    const product  = await getProduct(parseInt(id));
    if(!product){
        notFound();
    }
  return (
    <EditForm product={product} />
  );
};
export default page;
