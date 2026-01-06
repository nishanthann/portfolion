import FeaturesSection from "@/components/FeaturesSection";
import HeroGeometric from "@/components/HeroGeo";

import ContributionGraph from "@/components/ContributionGraph";
import { MarqueeDemo } from "@/components/Review";
import { generatedContributionData } from "@/data/contributions";
import { Projects } from "@/components/Projects";
import { BadgeFormation } from "@/components/Tools";

import CTA2 from "@/components/GetInTouch";
import AboutSection from "@/components/AboutSection";

export default function GradientHero() {
  return (
    <>
      <HeroGeometric />
      <AboutSection />
      <FeaturesSection />
      <Projects />
      <BadgeFormation />
      <ContributionGraph data={generatedContributionData} year={2025} />
      <MarqueeDemo />

      <CTA2 />
    </>
  );
}
