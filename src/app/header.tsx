import React from 'react'
import { Sedgwick_Ave } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
const sedgwick = Sedgwick_Ave({ weight: '400', subsets: ['latin'] });

function Header() {
  return (
    <div>
    <header className="sticky top-0 z-50 w-full fadein">
      <div className='bg-[#70e000] shadow-md backdrop-blur-md h-[20vh] pb-[5px] w-full rounded-b-[200px] flex flex-row justify-center'>
        <div className="w-full flex flex-row items-center justify-center rounded-b-[180px] bg-black shadow-md backdrop-blur-xl px-4 ">
          <div className="flex flex-row justify-center items-center gap-4">
            <Link 
              href="/" 
              className={`inline-block text-[50px] mr-[30px] mt-[20px] h-[15vh] ${sedgwick.className}`}
            >
              <span className="scrapo text-white">Team Finance</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  


      
    </div>
  )
}

export default Header
