"use client";

import LandingSection from "./first-section/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import LandingPage from "./landing-page/page";
import ContactSection from "./contact-section/page";
import FourthSection from "./fourth-section/page";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <LandingSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <ContactSection />
    </div>
  );
}
