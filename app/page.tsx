import NewsLetter from "./components/NewsLetter";
import Homepage from "./components/Homepage";
import LogoCarousel from "./components/LogoCarousel";
import About from "./components/About";
import ImpactPage from "./components/Impact";
import ServicesPage from "./components/Services";
import Webinars from "./components/Webinars";
import Trust from "./components/Trust";


export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen pt-40 flex flex-col items-center justify-between px-6 md:px-20 py-12 bg-[radial-gradient(60%_40%_at_top_left,_#22c55e_0%,_white_50%,_white_100%)]">
      <Homepage />
      <LogoCarousel />
      <About />
      <ImpactPage />
      <ServicesPage />
      <Webinars />
      <Trust />
      <NewsLetter />
    </main>
  );
}