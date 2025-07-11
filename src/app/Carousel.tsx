"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  "/SS1.png",
  "/SS2.png",
  "/SS3.png",
  "/SS4.png",
  "/SS5.png",
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Snap to slide on drag end
  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { point: { x: number } }) => {
    const width = containerRef.current?.offsetWidth || 1;
    let newIndex = Math.round(-info.point.x / width);
    newIndex = Math.max(0, Math.min(screenshots.length - 1, newIndex));
    setActive(newIndex);
    controls.start({ x: -newIndex * width });
  };

  // Dot navigation
  const goTo = (idx: number) => {
    setActive(idx);
    const width = containerRef.current?.offsetWidth || 1;
    controls.start({ x: -idx * width });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-2xl">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all border border-gray-200"
          onClick={() => goTo(Math.max(0, active - 1))}
          aria-label="Previous screenshot"
          disabled={active === 0}
          style={{ opacity: active === 0 ? 0.5 : 1 }}
        >
          <ChevronLeft className="w-6 h-6 text-[#1E3A8A]" />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all border border-gray-200"
          onClick={() => goTo(Math.min(screenshots.length - 1, active + 1))}
          aria-label="Next screenshot"
          disabled={active === screenshots.length - 1}
          style={{ opacity: active === screenshots.length - 1 ? 0.5 : 1 }}
        >
          <ChevronRight className="w-6 h-6 text-[#1E3A8A]" />
        </button>
        <div
          ref={containerRef}
          className="overflow-x-hidden w-full"
        >
          <motion.div
            className="flex cursor-grab"
            drag="x"
            dragConstraints={{ left: -(screenshots.length - 1) * (containerRef.current?.offsetWidth || 1), right: 0 }}
            style={{ x }}
            animate={controls}
            onDragEnd={handleDragEnd}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {screenshots.map((src, i) => (
              <motion.div
                key={src}
                className="shrink-0 px-2 flex justify-center"
                style={{ width: "100%", maxWidth: 400 }}
                initial={{ opacity: 0.7, scale: 0.95 }}
                animate={{ opacity: active === i ? 1 : 0.7, scale: active === i ? 1 : 0.95 }}
                transition={{ duration: 0.4 }}
              >
                {/* Sleek phone frame */}
                <div className="relative flex items-center justify-center w-full" style={{ aspectRatio: "9/19" }}>
                  {/* Phone body */}
                  <div className="absolute inset-0 z-0 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-gray-700 shadow-2xl border border-gray-300" style={{ boxShadow: "0 8px 32px 0 rgba(30,58,138,0.10), 0 1.5px 8px 0 rgba(20,184,166,0.10)" }} />
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-2.5 bg-gray-800 rounded-b-xl z-10 mt-2" />
                  {/* Screenshot */}
                  <div className="relative z-10 w-[88%] h-[92%] rounded-2xl overflow-hidden bg-black shadow-lg">
                    <Image
                      src={src}
                      alt={`PixsBliss screenshot ${i + 1}`}
                      width={320}
                      height={640}
                      className="object-cover w-full h-full"
                      priority={i === 0}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {screenshots.map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${active === i ? "bg-accent-teal border-[#1E3A8A] scale-125 shadow-lg" : "bg-gray-300 border-gray-300"}`}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 