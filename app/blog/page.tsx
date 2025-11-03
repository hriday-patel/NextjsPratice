import { JSX, lazy, Suspense } from "react";
import styles from "./blog.module.css";
import LineChart from "./line-chart";

const Comp = lazy((): any => import("../_components/Component"));


export const metadata = {
  title: "Blog Page",
  description: "This is the blog page description",
}

const page = () => {
  return (
    <Suspense fallback={<Meow />}>
      <Comp />
      <LineChart />
    </Suspense>
  );
};
export default page;

const Meow = () => {
  return (
    <>
      <div className={styles.div}>page</div>
    </>
  );
};
