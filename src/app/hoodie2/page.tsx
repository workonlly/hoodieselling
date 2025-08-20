"use client";

import React, { useState } from 'react';
import HoodieSwiper from '../swiper';

export default function Hoodie2() {
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
    name: "Urban - Hoodie",
    subName: "Urban Brand",
    price: "$99",
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
            className="w-full bg-[#70e000] hover:bg-blue-900 text-white hover:text-[#70e000] font-bold py-2 px-6 rounded-xl transition-colors duration-200 shadow"
          >
            Submit Order
          </button>
        </form>
      </div>
    );
  }
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
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-semibold text-base mr-2">5k Reviews</span>
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
          </div>
          {/* Size Options */}
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
          {/* Color Options */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-gray-700 mb-1">Color</div>
            <div className="flex gap-2">
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Navy' ? 'border-[#70e000]' : 'border-gray-300'} bg-blue-900`}
                aria-label="Navy"
                onClick={() => setSelectedColor('Navy')}
                type="button"
              ></button>
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Light Gray' ? 'border-[#70e000]' : 'border-gray-300'} bg-gray-200`}
                aria-label="Light Gray"
                onClick={() => setSelectedColor('Light Gray')}
                type="button"
              ></button>
              <button
                className={`w-8 h-8 rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-[#70e000] ${selectedColor === 'Green' ? 'border-[#70e000]' : 'border-gray-300'} bg-[#70e000]`}
                aria-label="Green"
                onClick={() => setSelectedColor('Green')}
                type="button"
              ></button>
            </div>
          </div>
          {/* Buy Now Button */}
          <button
              className="w-full bg-[#70e000] hover:bg-black text-white hover:text-[#70e000] font-bold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl text-lg mb-2"
            onClick={() => setShowForm(true)}
            disabled={!selectedSize || !selectedColor}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
