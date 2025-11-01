"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { TPartners } from "@/drizzle/schema";

export default function CarouselSlider() {
  // typed partenaires array to match drizzle TPartners type
  const [partenaires, setPartenaires] = useState<TPartners[]>([]);

  useEffect(() => {
    const fetchPartenaires = async () => {
      try {
        const response = await fetch("/api/partenaires");
        if (!response.ok) return;
        const data: TPartners[] = await response.json();
        setPartenaires(data);
        console.log("Fetched partenaires: ", data);
      } catch (err) {
        // ignore fetch errors for now
        console.error("Failed to fetch partenaires", err);
      }
    };

    fetchPartenaires();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  return (
    <section className="p-6 w-full bg-gray-50">
      <div className="container mx-auto py-10">
        <div className="flex flex-col text-center max-w-5xl mx-auto mb-10">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 uppercase">Nos partenaires</h2>
        </div>
    
        <div className="overflow-hidden">
          <Slider {...settings}>
            {partenaires.map((partenaire) => (
              <div key={partenaire.id} className="flex-shrink-0 w-80 mx-2">
                <Image
                  src={partenaire.logo || ""}
                  alt={partenaire.name || "logo partenaire"}
                  className="w-full h-36 object-contain p-2"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}