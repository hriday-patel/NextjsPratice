import Link from "next/link";


type Params = Promise<{
    articleId: string;
}>

type SearchParams = Promise<{
    lang?: "es" | "de" | "uk" | "en";
}>

const page = async ({
  params,
  searchParams,
}: {
  params: Params
  searchParams: SearchParams
}) => {
  const articleId = (await params).articleId;
  const { lang = "en" } = await searchParams;
  return (
    <div>
      <div>
        This page is about {articleId} in {lang}
      </div>
      <Link href={`/article/${articleId}?lang=es`}>Spanish</Link>
      <Link href={`/article/${articleId}?lang=de`}>German</Link>
      <Link href={`/article/${articleId}?lang=uk`}>French</Link>
      <Link href={`/article/${articleId}`}>English</Link>
    </div>
  );
};
export default page;
