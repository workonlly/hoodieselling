
"use client";
import React, { useState } from "react";

const hoodieData = [
  {
    id: 1,
    name: "Wake - Hoodie",
    brand: "Wake Official",
    price: "$129",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Urban - Hoodie",
    brand: "Urban Brand",
    price: "$99",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Classic - Hoodie",
    brand: "Classic Wear",
    price: "$109",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Sporty - Hoodie",
    brand: "Sporty Line",
    price: "$119",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
];

function FormContent() {
  // Fallback to first hoodie if no selection (since context is gone)
  const [selectedHoodie] = useState(hoodieData[0].name);
  const [form, setForm] = useState({
    name: "",
    roll: "",
    branch: "",
    phone: "",
  });
  const hoodie = hoodieData.find(h => h.name === selectedHoodie);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(JSON.stringify({ ...form, hoodie: hoodie?.name }));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-8 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col gap-4 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">Order Form</h2>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="roll" placeholder="Roll No" value={form.roll} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="branch" placeholder="Branch" value={form.branch} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="border rounded-lg px-4 py-2" required />
        {hoodie && (
          <div className="flex items-center gap-4 mt-4 p-4 bg-gray-100 rounded-xl">
            <img src={hoodie.img} alt={hoodie.name} className="w-16 h-16 object-contain rounded-lg" />
            <div>
              <div className="font-bold">{hoodie.name}</div>
              <div className="text-sm text-gray-500">{hoodie.brand}</div>
              <div className="text-[#70e000] font-bold">{hoodie.price}</div>
            </div>
          </div>
        )}
        <button type="submit" className="w-full mt-4 bg-[#70e000] hover:bg-black text-white hover:text-[#70e000] font-bold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">Submit</button>
      </form>
    </div>
  );
}

const Page = () => <FormContent />;
export default Page;
