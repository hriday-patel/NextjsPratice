import { notFound } from "next/navigation";
import { wonders } from "../wonders";
import Image from "next/image";

export type Params = {
  params: Promise<{
    photoId: string;
  }>;
};

const page = async ({ params }: Params) => {
  const photoId = (await params).photoId;
  const wonder = wonders.find((wonder) => wonder.id == photoId);
  if (!wonder) {
    notFound();
  }
  return (
    <div className="flex flex-col h-screen container mx-auto items-center justify-center">
      <div className="flex flex-col justify-center items-start gap-10">
        <h1 className="text-6xl font-bold">{wonder.name}</h1>
        <Image
          src={wonder.src}
          alt={wonder.name}
          height={200}
          width={200}
          className="aspect-square object-cover object-center self-center"
        />
        <h2 className="text-2xl font-semibold tracking-widest">
          {wonder.photographer}
        </h2>
        <h3 className="text-lg">{wonder.location}</h3>
      </div>
    </div>
  );
};
export default page;
