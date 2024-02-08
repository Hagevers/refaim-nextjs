import Navbar from "@/components/navbar/navbar";
import LandingSection from "./first-section/page";
import SecondSection from "./second-section/page";
import ThirdSection from "./third-section/page";
import LandingPage from "./landing-page/page";

export default function Home() {
  return (
    <div>
      <LandingPage />
      <LandingSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
