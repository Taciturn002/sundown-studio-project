import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link'; // For navigation

function Nav() {
  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const buttons = buttonsRef.current;

    buttons.forEach((btn) => {
      if (!btn) return;

      // Mouse enter animation
      const handleMouseEnter = () => {
        gsap.to(btn, {
          backgroundColor: "black",
          color: "white",
          scale: 1.1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      // Mouse leave animation
      const handleMouseLeave = () => {
        gsap.to(btn, {
          backgroundColor: "transparent",
          color: "black",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className='w-full h-[20vh] z-[999] flex bg-transparent'>
      {/* Sundown Logo */}
      <div className='w-1/2 h-full px-9 py-9'>
        <Image
          src='https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg'
          alt='Sundown Logo'
          height={150}
          width={150}
        />
      </div>

      {/* Navigation Links */}
      <div className='w-1/2 h-full flex justify-end pt-14 mx-10'>
        <Link href="/" ref={(el) => { buttonsRef.current[0] = el }}
          className='w-20 h-10 rounded-full border-[1px] mx-3 border-black text-center py-1 font-semibold'
        >
          Home
        </Link>
        <Link href="/page2" ref={(el) => { buttonsRef.current[1] = el }}
          className='w-20 h-10 rounded-full border-[1px] mx-3 border-black text-center py-1 font-semibold'
        >
          Services
        </Link>
        <Link href="/page3" ref={(el) => { buttonsRef.current[2] = el }}
          className='w-20 h-10 rounded-full border-[1px] mx-3 border-black text-center py-1 font-semibold'
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
