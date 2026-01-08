"use client";

import NewsLetter from "./components/NewsLetter";
import Homepage from "./components/Homepage";
import LogoCarousel from "./components/LogoCarousel";
import About from "./components/About";
import ImpactPage from "./components/Impact";
import ServicesPage from "./components/Services";
import Webinars from "./components/Webinars";
import Attendees from "./components/Attendees";
import Video from "./components/Video";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";


export default function Home() {
  const [showNewsletter, setShowNewsletter] = useState(false);

  useEffect(() => {
    // Show popup when user first lands on home page
    const hasSeenPopup = sessionStorage.getItem("newsletterPopupSeen");

    if (!hasSeenPopup) {
      setShowNewsletter(true);
      sessionStorage.setItem("newsletterPopupSeen", "true");
    }
  }, []);

  return (
    <main className="overflow-hidden custom-radial-bg">
      {/* Main Content */}
      <div className="">
        <Homepage />
      </div>
      <div className="flex justify-center items-center mt-20 gap-2 px-5 md:mt-10 md:px-20">
        <LogoCarousel />
      </div>
      <About />
      <ImpactPage />
      <section id="services">
        <ServicesPage />
      </section>
      <Webinars />
      <Attendees />
      <Video />
      {/* Newsletter Popup */}
      <Modal isOpen={showNewsletter} onClose={() => setShowNewsletter(false)}>
        <NewsLetter />
      </Modal>

    </main>
  );
}