"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    name: "Fortis Hospital, Bangalore",
    image: "/hospitals/apollo.webp",
    description:
      "A leading multi-specialty hospital known for advanced treatments, international standards, and patient-centered care.",
    variant: "full",
  },
  {
    name: "Manipal Hospitals, Bangalore",
    image: "/hospitals/manipal.webp",
    description:
      "One of India’s most trusted hospital networks, known for clinical excellence, advanced technology, and compassionate care.",
    variant: "simple",
  },
  {
    name: "Apollo Hospitals, Bangalore",
    video:
      "https://res.cloudinary.com/dtpqq0qcp/video/upload/f_auto,q_auto,w_1280/v1767794489/apo.web_mvc8cy.mp4",
    variant: "video",
  },
];

export default function TopHospitalsCarousel() {
  return (
    <section className="relative w-full h-[50vh] sm:h-[80vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        loop
        speed={900}
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              {/* IMAGE */}
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.name ?? "Top hospital in Bangalore"}
                  fill
                  priority={i === 0}
                  className="object-cover"
                />
              )}

              {/* VIDEO */}
              {slide.video && (
                <video
                  className="w-full h-full object-cover"
                  src={slide.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* FORTIS */}
              {slide.variant === "full" && (
                <div className="absolute inset-0 flex items-end sm:items-start">
                  <div className="m-4 sm:m-10 lg:m-16 max-w-md sm:max-w-xl rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 p-5 sm:p-8 shadow-2xl text-white">
                    <h2 className="text-xl sm:text-3xl font-semibold">
                      {slide.name}
                    </h2>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}

              {/* MANIPAL */}
              {slide.variant === "simple" && (
                <div className="absolute inset-0 flex items-end sm:items-start">
                  <div className="m-4 sm:m-10 lg:m-16 max-w-sm sm:max-w-lg rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 p-5 sm:p-8 shadow-2xl text-white">
                    <h2 className="text-xl sm:text-3xl font-semibold">
                      {slide.name}
                    </h2>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}

              {/* APOLLO VIDEO */}
              {slide.variant === "video" && (
                <div className="absolute inset-0 flex items-end sm:items-center">
                  <div className="m-4 sm:m-10 lg:m-16 max-w-sm sm:max-w-xl rounded-2xl sm:rounded-3xl bg-white/15 backdrop-blur-xl border border-white/30 p-5 sm:p-8 shadow-2xl text-white">
                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold">
                      Apollo Hospitals
                    </h2>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white/90">
                      One of Asia’s most trusted healthcare institutions,
                      delivering world-class care with global expertise.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile-only hide navigation arrows */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none;
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: flex;
          }
        }
      `}</style>

      {/* Edge ring */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
    </section>
  );
}
