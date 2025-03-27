import Navbar from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import { Card1 } from "./components/Card1";
import { PageFooter } from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6FE]">
      {/* Navbar */}
      <Navbar />

      {/* Carousel */}
      <div className="pt-18">
        <Carousel />
      </div>

      {/* <div className="py-0">
        <Widget />
      </div> */}
      <div className="py-0">
        <Card1 />
      </div>
      <div className="py-0">
        <PageFooter />
      </div>
    </div>

  );
}
