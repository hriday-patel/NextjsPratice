export const dynamicParams = false;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

interface Params {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Params) => {
  const id = (await params).id;
  return <div> product {id} </div>;
};
export default page;
