import NewsLetter from "./components/NewsLetter";
import Homepage from "./components/Homepage";
import LogoCarousel from "./components/LogoCarousel";
import About from "./components/About";
import ImpactPage from "./components/Impact";
import ServicesPage from "./components/Services";
import Webinars from "./components/Webinars";
import Attendees from "./components/Attendees";
import Video from "./components/Video";


export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Main Content */}
      <div className="flex justify-center items-center mt-40 px-5 md:mt-20 md:px-20 custom-radial-bg">
        <Homepage />
      </div>
      <div className="flex justify-center items-center mt-20 gap-2 px-5 md:mt-10 md:px-20">
        <LogoCarousel />
      </div>
      <About />
      <ImpactPage />
      <section id="services" className="w-full">
        <ServicesPage />
      </section>
      <Webinars />
      <Attendees />
      <Video />
     <NewsLetter />

    </main>
  );
}