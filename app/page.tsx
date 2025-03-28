import Navbar from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Card1 } from "./components/Card1";
import { PageFooter } from "./components/Footer"
import { Hero } from "./components/Hero";
import { Explore } from "./components/Explore";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6FE]">
      {/* Hero Section */}
      <div className="pt-20 md:pt-24"><Hero /></div>  {/* Ensure spacing between Hero and Navbar */}
      
      {/* Navbar */}
      <Navbar />

      {/* Card1 */}
      <div className="py-0 md:py-6">
        <Card1 />
      </div>

      {/* Explore Section */}
      <div className="pt-50 md:pt-24">
        <Explore />
      </div>

      {/* Carousel */}
      <div className="pt-18 md:pt-24">
        <Carousel />
      </div>
      
      {/* Footer */}
      <div className="py-6 md:py-10">
        <PageFooter />
      </div>
    </div>
  );
}
