import { NavbarDemo } from "@/components/Navbar";

import FeaturesSection from "@/components/FeaturesSection";
import HeroGeometric from "@/components/HeroGeo";
import Footer from "@/components/Footer";
import ContributionGraph from "@/components/ContributionGraph";
import { MarqueeDemo } from "@/components/Review";
import { generatedContributionData } from "@/data/contributions";
import { Projects } from "@/components/Projects";
import { BadgeFormation } from "@/components/Tools";

import CTA2 from "@/components/GetInTouch";

export default function GradientHero() {
  return (
    <>
      <NavbarDemo />

      <HeroGeometric />

      <FeaturesSection />
      <Projects />
      <BadgeFormation />
      <ContributionGraph data={generatedContributionData} year={2025} />
      <MarqueeDemo />

      <CTA2 />
      <Footer />
    </>
  );
}
