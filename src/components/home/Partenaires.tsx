'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlider() {
  const logos = [
    { id: 1, src: "/partenaires/AFG-HOLDING-LOGO.png", alt: "AFG" },
    { id: 2, src: "/partenaires/logo-siteweb10.png", alt: "Banque Atlantique" },
    { id: 3, src: "/partenaires/logo-siteweb3.png", alt: "CNPS" },
    { id: 4, src: "/partenaires/logo-siteweb12.png", alt: "logo" },
    { id: 5, src: "/partenaires/logo-ebs.png", alt: "ebs" },
    { id: 6, src: "/partenaires/logo-supemir.jpeg", alt: "logo" },
    { id: 7, src: "/partenaires/logo-cdp.jpg", alt: "copar" },
    { id: 8, src: "/partenaires/logo-siteweb13.png", alt: "logo" },
  ];

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
            {logos.map((logo) => (
              <div key={logo.id} className="flex-shrink-0 w-80 mx-2">
                <Image
                  src={logo.src}
                  alt={logo.alt}
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