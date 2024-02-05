import Navbar from "@/components/navbar/navbar";
import LandingSection from "./first-section/page";
import SecondSection from "./second-section/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingSection />
      <SecondSection />
    </div>
  );
}
