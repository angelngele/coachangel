import NewsLetter from "./components/NewsLetter";
import Homepage from "./components/Homepage";
import LogoCarousel from "./components/LogoCarousel";
import About from "./components/About";
import ImpactPage from "./components/Impact";
import ServicesPage from "./components/Services";
import Webinars from "./components/Webinars";

import Attendees from "./components/Attendees";


export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen pt-40 flex flex-col items-center justify-between px-6 md:px-20 py-12 custom-radial-bg">
      {/* Main Content */}
      <Homepage />
      <LogoCarousel />
      <About />
      <ImpactPage />
      <section id="services" className="w-full">
        <ServicesPage />
      </section>
      <Webinars />
      <Attendees />
      <NewsLetter />
    </main>
  );
}