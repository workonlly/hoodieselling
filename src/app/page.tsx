'use client'
import Header from "./header";
import Footer from "./footer";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import HoodieSwiper from "./swiper";
// No hooks needed here
export default function Home() {
  // Animate card on click
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const btnRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const handleCardClick = (idx: number) => {
    const el = cardRefs.current[idx];
    if (el) {
      gsap.fromTo(el, { scale: 1 }, { scale: 0.95, duration: 0.15, yoyo: true, repeat: 1, ease: "power1.inOut" });
    }
  };
  // Animate cards in on mount
  useEffect(() => {
    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" }
    );
  }, []);
  // Animate Buy Now button on hover
  useEffect(() => {
    const btns = btnRefs.current;
    const enterFns: Array<() => void> = [];
    const leaveFns: Array<() => void> = [];
    btns.forEach((btn, idx) => {
      if (btn) {
        const enter = () => gsap.to(btn, { scale: 1.07, boxShadow: "0 0 24px #70e00099", duration: 0.2, ease: "power1.out" });
        const leave = () => gsap.to(btn, { scale: 1, boxShadow: "", duration: 0.2, ease: "power1.in" });
        btn.addEventListener("mouseenter", enter);
        btn.addEventListener("mouseleave", leave);
        enterFns[idx] = enter;
        leaveFns[idx] = leave;
      }
    });
    // Cleanup
    return () => {
      btns.forEach((btn, idx) => {
        if (btn && enterFns[idx] && leaveFns[idx]) {
          btn.removeEventListener("mouseenter", enterFns[idx]);
          btn.removeEventListener("mouseleave", leaveFns[idx]);
        }
      });
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl px-4 opacity-0 animate-fadein">
          {[1, 2, 3, 4].map((i, idx) => (
            <div
              key={i}
              ref={el => {
                cardRefs.current[idx] = el;
              }}
              className="bg-black rounded-3xl shadow-xl border border-gray-200 p-4 flex flex-col items-center relative min-h-[220px] cursor-pointer opacity-0"
              onClick={() => handleCardClick(idx)}
            >
              {/* Favorite/heart icon */}
              <button
                className="absolute top-4 right-4 rounded-full p-2 shadow-lg hover:bg-white group transition border border-white focus:outline-none focus:ring-2 focus:ring-[#70e000] active:scale-95 z-30"
                aria-label="Add to favorites"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors duration-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75a5.25 5.25 0 00-4.5 2.472A5.25 5.25 0 007.5 3.75 5.25 5.25 0 003 9c0 7.25 9 11.25 9 11.25s9-4 9-11.25a5.25 5.25 0 00-5.25-5.25z"
                  />
                </svg>
              </button>
              {/* Product image swiper */}
              <div className="w-full h-55 flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden mb-4 transition-shadow duration-300 group-hover:shadow-[0_0_32px_0_rgba(112,224,0,0.6)] relative">
                <HoodieSwiper />
                <div className="absolute right-0 bottom-0 bg-black text-white text-lg font-bold rounded-xl px-4 py-1 shadow z-20">
                  {i === 1 ? "$129" : i === 2 ? "$99" : i === 3 ? "$109" : "$119"}
                </div>
              </div>
              {/* Price badge */}
              
              {/* Title and brand */}
              <div className="w-full flex flex-col items-start mt-2">
                <div className="text-xl font-bold text-white">
                  {i === 1
                    ? "Wake - Hoodie"
                    : i === 2
                    ? "Urban - Hoodie"
                    : i === 3
                    ? "Classic - Hoodie"
                    : "Sporty - Hoodie"}
                </div>
                <div className="text-xs text-white font-medium mt-1">
                  {i === 1
                    ? "Wake Official"
                    : i === 2
                    ? "Urban Brand"
                    : i === 3
                    ? "Classic Wear"
                    : "Sporty Line"}
                </div>
              </div>
              {/* Reviews */}
              <div className="w-full flex flex-row items-center mt-2">
                <span className="text-white font-semibold text-sm mr-1">10k Reviews</span>
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
              </div>
              {/* Buy Now Button */}
              <Link href={`/hoodie${i}`} passHref legacyBehavior>
                <a
                  ref={el => {
                    btnRefs.current[idx] = el;
                  }}
                  className="w-full mt-4 bg-[#70e000] hover:bg-white text-white hover:text-black font-bold py-3 px-6 rounded-2xl transition-colors duration-200 shadow-lg hover:shadow-xl text-center block"
                >
                  Buy Now
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
