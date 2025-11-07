"use client";

import Link from "next/link";
import { use } from "react";
import { useRouter } from "next/navigation";
type Params = {
  params: Promise<{ articleName: string }>;
};

type SearchParams = {
  searchParams: Promise<{ lang?: "es" | "fr" | "de" | "en" }>;
};

const page = ({ params, searchParams }: Params & SearchParams) => {
  const { articleName } = use(params);
  const { lang = "en"} = use(searchParams);
  const router = useRouter();
  console.log("Router object:", router);
  return (
    <div>
      <div>This is article on about {articleName}</div>
      <div> which language do you prefer?</div>
      <div> <Link href={`/article/${articleName}?lang=es`}>Spanish</Link></div>
      <div> <Link href={`/article/${articleName}?lang=fr`}>French</Link></div>
      <div> <Link href={`/article/${articleName}?lang=de`}>German</Link></div>
      <div>This article is in language {lang}</div>
    </div>
  );
};
export default page;
