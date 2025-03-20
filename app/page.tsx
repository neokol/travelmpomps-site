import Navbar from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Widget } from "./components/Widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFEFE]">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div className="pt-18"> 
        <Carousel />
      </div>

      <div className="py-12">
        <Widget />
      </div>
    </div>
  );
}
