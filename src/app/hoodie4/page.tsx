"use client";

import React, { useState } from 'react';
import HoodieSwiper from '../swiper';

export default function Hoodie4() {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', roll: '', branch: '', phone: '' });
  const [submittedOrder, setSubmittedOrder] = useState<null | {
    hoodie: string;
    brand: string;
    price: string;
    size: string;
    color: string;
    name: string;
    roll: string;
    branch: string;
    phone: string;
  }>(null);
  const hoodieData = {
    name: "Sporty - Hoodie",
    subName: "Sporty Line",
    price: "$119",
  };
  if (submittedOrder) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-8 px-4">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col items-center max-w-md w-full">
          <div className="font-bold text-2xl mb-4">Order Details</div>
          <div className="w-full flex flex-col gap-4">
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Hoodie:</b> {submittedOrder.hoodie}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Brand:</b> {submittedOrder.brand}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Price:</b> {submittedOrder.price}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Size:</b> {submittedOrder.size}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Color:</b> {submittedOrder.color}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Name:</b> {submittedOrder.name}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Roll No:</b> {submittedOrder.roll}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Branch:</b> {submittedOrder.branch}</div>
            <div className="bg-gray-100 rounded-xl p-4 w-full"><b>Phone:</b> {submittedOrder.phone}</div>
          </div>
        </div>
      </div>
    );
  }
  if (showForm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-8 px-4">
        <form
          className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col gap-4 max-w-md w-full"
          onSubmit={e => {
            e.preventDefault();
            setSubmittedOrder({
              hoodie: hoodieData.name,
              brand: hoodieData.subName,
              price: hoodieData.price,
              size: selectedSize,
              color: selectedColor,
              name: formData.name,
              roll: formData.roll,
              branch: formData.branch,
              phone: formData.phone,
            });
            setShowForm(false);
          }}
        >
          <div className="font-bold text-lg mb-2">Order Details</div>
          <div className="flex flex-col gap-1">
            <span><b>Hoodie:</b> {hoodieData.name}</span>
            <span><b>Brand:</b> {hoodieData.subName}</span>
            <span><b>Price:</b> {hoodieData.price}</span>
            <span><b>Size:</b> {selectedSize}</span>
            <span><b>Color:</b> {selectedColor}</span>
          </div>
          <input
            className="border rounded-lg px-3 py-2 mt-2"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
            required
          />
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Roll No"
            value={formData.roll}
            onChange={e => setFormData(f => ({ ...f, roll: e.target.value }))}
            required
          />
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Branch"
            value={formData.branch}
            onChange={e => setFormData(f => ({ ...f, branch: e.target.value }))}
            required
          />
          <input
            className="border rounded-lg px-3 py-2"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
            required
            type="tel"
          />
          <button
            type="submit"
            className="w-full bg-[#70e000] hover:bg-green-700 text-white hover:text-[#70e000] font-bold py-2 px-6 rounded-xl transition-colors duration-200 shadow"
          >
            Submit Order
          </button>
        </form>
      </div>
    );
  }
  // Main product UI
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-8 px-4">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-8 flex flex-col md:flex-row items-center max-w-3xl w-full">
        {/* Product Image Swiper */}
        <div className="flex-shrink-0 w-64 h-64 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden mb-6 md:mb-0 md:mr-8">
          <HoodieSwiper />
        </div>
        {/* Product Details */}
        <div className="flex-1 flex flex-col">
          <div className="mb-2">
            <div className="text-2xl font-bold text-gray-900">{hoodieData.name}</div>
            <div className="text-sm text-gray-500 font-medium mt-1">{hoodieData.subName}</div>
          </div>
          <div className="text-2xl font-bold text-[#70e000] mb-4">{hoodieData.price}</div>
          <div className="mb-4">
            <div className="text-sm font-semibold text-gray-700 mb-1">Size</div>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg border font-bold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedSize === size ? 'bg-[#70e000] text-white border-[#70e000]' : 'bg-white text-gray-800 border-gray-300 hover:bg-[#70e000] hover:text-white'}`}
                  onClick={() => setSelectedSize(size)}
                  type="button"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-700 mb-1">Color</div>
            <div className="flex gap-2">
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Green' ? 'border-[#70e000]' : 'border-gray-300'} bg-green-700`}
                aria-label="Green"
                onClick={() => setSelectedColor('Green')}
                type="button"
              ></button>
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Gray' ? 'border-[#70e000]' : 'border-gray-300'} bg-gray-400`}
                aria-label="Gray"
                onClick={() => setSelectedColor('Gray')}
                type="button"
              ></button>
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Lime' ? 'border-[#70e000]' : 'border-gray-300'} bg-[#70e000]`}
                aria-label="Lime"
                onClick={() => setSelectedColor('Lime')}
                type="button"
              ></button>
            </div>
          </div>
          <button
              className="w-full bg-[#70e000] hover:bg-black text-white hover:text-[#70e000] font-bold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl text-lg mb-2"
            disabled={!selectedSize || !selectedColor}
            onClick={() => setShowForm(true)}
            type="button"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
