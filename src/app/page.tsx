import HeroCarousel from "@/components/home/HeroCarousel";
import Jumbotron from "@/components/home/Jumbotron";
import Presentation from "@/components/home/Presentation";
import Programmes from "@/components/home/Programmes";
import Actualites from "@/components/home/Actualites";
import Partenaires from "@/components/home/Partenaires";

export default function Home() {
  return (
    <div className="w-full">
      <HeroCarousel />
      <Jumbotron />
      <Presentation />
      <Programmes />
      <Actualites />
      <Partenaires />
    </div>
  );
}
