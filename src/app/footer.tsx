
import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-8 flex flex-col items-center justify-center">
      <div className="flex flex-row items-center gap-3">
        {/* Simple white icon */}
        <span className="inline-block align-middle">
          <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="7" fill="#fff" fillOpacity="0.08"/>
            <path d="M4.5 8.5L7 11L12 6" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <Link 
          href="/" 
          className="inline-block text-2xl font-bold tracking-tight text-white hover:underline underline-offset-4 transition-all"
        >
          Team Finance
        </Link>
      </div>
      <div className="mt-3 text-sm text-white/60">&copy; {new Date().getFullYear()} Team Finance. All rights reserved.</div>
    </footer>
  );
}

export default Footer
