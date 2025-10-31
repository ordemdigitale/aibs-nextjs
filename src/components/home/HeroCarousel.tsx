'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/slides/slide-ecole-partenaire-100.jpg' },
  { id: 2, image: '/slides/slide-fag-2025.jpg' },
  { id: 3, image: '/slides/slide-ordinateur-offert.jpg' },
  { id: 4, image: '/slides/slide_4.jpg' },
  { id: 5, image: '/slides/ATLANTIC-GROUP-100.jpg' },
  { id: 6, image: '/slides/AFG-HOLDING-100.jpg' },
  { id: 7, image: '/slides/FONDATION-ATLANTIC-GROUP-100.jpg' },
  { id: 8, image: '/slides/slide-ecole-partenaire-100.jpg' },
];

export default function TailwindV4Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.image}
            alt="image-déroulante"
            className="w-full h-full object-cover absolute inset-0"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        aria-label="Previous slide"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        aria-label="Next slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
