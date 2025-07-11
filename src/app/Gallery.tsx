"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const screenshots = [
  { src: "/SS1.png", },
  { src: "/SS2.png", },
  { src: "/SS3.png", },
  { src: "/SS4.png", },
  { src: "/SS5.png", },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<null | number>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 text-center">
          See PixsBliss in Action
        </h2>
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          className="pb-8"
        >
          {screenshots.map((shot, i) => (
            <SwiperSlide key={shot.src}>
              <div
                className="group relative rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{ aspectRatio: "9/19" }}
                onClick={() => setLightbox(i)}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 25vw"
                  priority={i === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1E3A8A]/80 to-transparent p-3 text-white text-sm opacity-80">
                  {shot.alt}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Lightbox */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setLightbox(null)}>
            <div className="relative max-w-md w-full aspect-[9/19] bg-black rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={screenshots[lightbox].src}
                alt={screenshots[lightbox].alt}
                fill
                className="object-contain w-full h-full"
              />
              <button
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-[#1E3A8A] rounded-full p-2 shadow"
                onClick={e => { e.stopPropagation(); setLightbox(null); }}
                aria-label="Close preview"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 