"use client";
import { useRef, useState } from "react";
import { motion, useMotionValue, useAnimation } from "framer-motion";
import Image from "next/image";

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
      <div
        ref={containerRef}
        className="overflow-x-hidden w-full max-w-2xl"
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
            <div
              key={src}
              className="shrink-0 px-2 flex justify-center"
              style={{ width: "100%", maxWidth: 400 }}
            >
              {/* iPhone frame mockup */}
              <div className="relative flex items-center justify-center w-full" style={{ aspectRatio: "9/19" }}>
                {/* Phone body */}
                <div className="absolute inset-0 z-0 rounded-[2.5rem] bg-black shadow-2xl border border-gray-200" style={{ boxShadow: "0 8px 32px 0 rgba(30,58,138,0.10), 0 1.5px 8px 0 rgba(20,184,166,0.10)" }} />
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-gray-900 rounded-b-xl z-10 mt-2" />
                {/* Screenshot */}
                <div className="relative z-10 w-[88%] h-[92%] rounded-2xl overflow-hidden bg-black">
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
            </div>
          ))}
        </motion.div>
      </div>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${active === i ? "bg-accent-teal scale-110" : "bg-gray-300"}`}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 