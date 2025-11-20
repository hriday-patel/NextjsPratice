"use client";

import { useActionState, useState } from "react";
import Button from "../_components/Button";
import { AddProduct } from "../utils/actions";
import { Errors } from "../utils/actions";


const page = () => {
  const [name, setName] =  useState("");
  const [price, setPrice] = useState("");
  const [description, setDesc] =  useState("");
  const initialState = {
    name,
    price,
    description,
    errors: {}
  }
  const [state, formAction, isPending] = useActionState(
    AddProduct,
    initialState
  );
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        action={formAction}
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
            onChange={(e) => setName(e.target.value)}
            defaultValue={state.name}
            className="px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="product name"

          />
          {state.errors.name && (
            <div className="text-red-500 text-sm">{state.errors.name}</div>
          )}
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
            defaultValue={state.price}
            onChange={(e) => setPrice(e.target.value)}
            className="px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="0"
          />
          {state.errors.price && (
            <div className="text-red-500 text-sm">{state.errors.price}</div>
          )}
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
            defaultValue={state.description}
            onChange={(e) => setDesc(e.target.value)}
            rows={5}
            name="desc"
            className="resize-none px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
            placeholder="product description"
          ></textarea>
          {state.errors.description && (
            <div className="text-red-500 text-sm">{state.errors.description}</div>
          )}
        </div>
        {/* <Button /> */}
        <button
      className="w-3/5 mx-auto text-center px-4 py-1 rounded-md border border-neutral-700/25 bg-blue-500 text-white disabled:bg-gray-400"
      disabled={isPending}
    >
      {isPending ? "Submitting..." : "Submit"}
    </button>
      </form>
    </div>
  );
};
export default page;
