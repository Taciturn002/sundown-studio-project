import React, { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Nav() {

  const buttonsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
      const buttons = buttonsRef.current;

      buttons.forEach((btn) => {
          if (!btn) return;
          if (!btn) return;
          // Mouse enter animation
          const handleMouseEnter = () => {
              gsap.to(btn, {
                  backgroundColor: "black",
                  color: "white",
                  duration: 0.3,
                  ease: "power2.out",
              });
          };

          // Mouse leave animation
          const handleMouseLeave = () => {
              gsap.to(btn, {
                  backgroundColor: "transparent",
                  color: "black",
                  duration: 0.3,
                  ease: "power2.out",
              });
          };

          // Attach event listeners
          btn.addEventListener("mouseenter", handleMouseEnter);
          btn.addEventListener("mouseleave", handleMouseLeave);

          // Cleanup function to remove event listeners
          return () => {
              btn.removeEventListener("mouseenter", handleMouseEnter);
              btn.removeEventListener("mouseleave", handleMouseLeave);
          };
      });
  }, []);
  return (
    <div className='w-full h-[20vh] z-[999]  flex bg-transparent ' >
      <div className='w-1/2 h-full px-9 py-9 '  >
      <Image className=' '
      src='https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg'
      alt='https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg'
      height={150}
      width={150}
      />
      </div>
      <div className=' w-1/2 h-full flex  justify-end pt-14  mx-10' >
        <a  ref={(el) => { buttonsRef.current[0] = el }}  className='w-20 h-10 rounded-full border-[1px] mx-3 border-black  text-center py-1 font-semibold ' href="">Work</a>
        <a ref={(el) => { buttonsRef.current[1] = el }} className='w-20 h-10 rounded-full border-[1px] mx-3 border-black  text-center py-1 font-semibold ' href="">Studio</a>
        <a ref={(el) => { buttonsRef.current[2] = el }} className='w-20 h-10 rounded-full border-[1px] mx-3 border-black  text-center py-1 font-semibold ' href="">Contact</a>
      </div>
    </div>
  )
}

export default Nav
