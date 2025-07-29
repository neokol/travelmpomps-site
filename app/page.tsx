import DestinationsSection from "./components/DestinationSection";
import { PageFooter } from "./components/Footer";
import JourneySection from "./components/JourneySection";
import LandingHero from "./components/LandingHero";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <LandingHero />
      {/* Other sections of your page will go here */}
      <JourneySection />
      <section className="w-full">
        <div className="relative w-full h-[100px] md:h-[300px] bg-[#F7F7F7]"> {/* Adjust height as needed */}
          <Image
            src="/images/travel_quote.png" // Replace with your image path
            alt="Travel Quote"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
      <DestinationsSection />
      <div className="pt-6 md:pt-10">
        <PageFooter />
      </div>
    </main>
  );
}
