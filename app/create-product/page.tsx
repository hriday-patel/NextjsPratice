"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    price: "",
    description: ""
  })
  const router = useRouter();

  const handleData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        setFormData({
          ...formdata,
          [e.target.name]: e.target.value
        })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const newData = formdata;
      const fetchData = await fetch("/productApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      if (fetchData.ok) {
        router.push('/products-db')
      }
    } catch (err) {
      console.error("error", err);
      setLoading(false);
      setFormData({
        name: "",
        price: "",
        description: ""
      })
    } 
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
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
              value={formdata.name}
              onChange={handleData}
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
              value={formdata.price}
              onChange={handleData}
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
              name="description"
              className="resize-none px-2 py-1 w-4/5 bg-slate-200 rounded-md outline-none"
              value={formdata.description}
              placeholder="product description"
              onChange={handleData}
            >
            </textarea>
          </div>
          <button className="w-3/5 mx-auto text-center px-4 py-1 rounded-md border border-neutral-700/25 bg-blue-500 text-white disabled:bg-gray-400" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
     
      </form>
    </div>
  );
};
export default page;
