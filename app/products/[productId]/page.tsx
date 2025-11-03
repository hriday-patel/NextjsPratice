import { notFound } from "next/navigation";

type Params = {
    params: Promise<{ productId: string }>;
}


const page = async ({params}: Params) => {
    const productId = (await params).productId;
    if(parseInt(productId) > 1000){
        notFound();
    }
  return (
    <div>page {productId}</div>
  )
}
export default page