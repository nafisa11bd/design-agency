import Image from "next/image";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stat from "@/components/Stat";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowWorks />
      <Stat />
      <FeaturedProjects />
    </div>
  );
}
