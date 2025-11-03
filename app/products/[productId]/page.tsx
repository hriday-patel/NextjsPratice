import { notFound } from "next/navigation";

type Params = {
    params: Promise<{ productId: string }>;
}


export function generateMetadata({params} : Params){
    const productId = params.then(p => p.productId);
    return {
        title: `Product ${productId}`,
        description: `This is the product page for product ${productId}`,
    }
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