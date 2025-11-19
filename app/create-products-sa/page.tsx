

import Button from "../_components/Button";
import { AddProduct } from "../utils/actions";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={AddProduct}
        className="p-8 border-slate-400/30 shadow-md border rounded-md max-w-[500px] w-full flex flex-col gap-5"
      >
        <div className="flex flex-col items-start justify-content gap-1">
          <label
            htmlFor="name"
            className="text-md tracking-tight text-neutral-800 font-semibold"
          >
            Product Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="product name"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <label
            htmlFor="price"
            className="text-md tracking-tight text-neutral-800 font-semibold"
          >
            Product Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="0"
            required
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1">
          <label
            htmlFor="desc"
            className="text-md tracking-tight text-neutral-800 font-semibold"
          >
            Product Description{" "}
            <span className="text-neutral-400 text-sm font-bold tracking-wide">
              (Optional)
            </span>
          </label>
          <textarea
            id="desc"
            rows={5}
            name="desc"
            className="resize-none px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="product description"
          ></textarea>
        </div>
        <Button />
      </form>
    </div>
  );
};
export default page;
