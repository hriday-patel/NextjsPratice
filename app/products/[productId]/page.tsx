import { log } from "console";
import { notFound } from "next/navigation";
import { title } from "process";

type Params = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Params) {
    const productId = (await params).productId;
    return {
      title: {
        absolute: `Product ${productId} Page`,
      },
      description: `This is the product ${productId} page description`,
    };
}

const page = async ({ params }: Params) => {
  const productId = (await params).productId;
  if (parseInt(productId) > 1000) {
    notFound();
  }
  return <div>page {productId}</div>;
};
export default page;
