"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    avatar: "/avatar-1.png",
    name: "Patrice L.",
    quote:
      "Hammad was a true pleasure to work with in every sense of the word. He is not only a skilled Shopify expert but also a collaborator. He was always available, a clear communicator, and responsive to any questions I had throughout this project. I highly recommend Hammad for your Shopify project.",
  },
  {
    avatar: "/avatar-4.png",
    name: "Rashe S.",
    quote:
      "Highly responsive contractor. Willing to do whatever it took to ensure product met my expectations. Highly recommend.",
  },
  {
    avatar: "/avatar-2.png",
    name: "Monica C.",
    quote:
      "This is my second visit with him, and will not be my last. This guy is efficient, fast, asks questions to make sure he understands and gets it done! For all my Shopify store owners, start here with him!",
  },
  {
    avatar: "/avatar-3.png",
    name: "Asad A.",
    quote:
      "Engr. Hammad is very professional and talented. He did a great job in very short time and I'll surely use his services again.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#1a1a1a] py-12 overflow-hidden sm:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8 text-center sm:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent/70">
            What clients say
          </p>
          <h2 className="text-3xl font-bold uppercase tracking-wider text-foreground sm:text-4xl">
            Happy <span className="text-accent">Clients</span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={32}
          slidesPerView={1}
          className="testimonials-swiper !pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="h-auto">
              <div className="relative flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.07] p-8 backdrop-blur-sm">
                {/* Accent top border */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

                {/* Quote icon */}
                <Quote className="mb-6 h-8 w-8 text-accent/30" />

                {/* Quote text */}
                <blockquote className="mb-8 flex-1 text-base leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/30"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-sm text-accent/70">Happy Customer</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
