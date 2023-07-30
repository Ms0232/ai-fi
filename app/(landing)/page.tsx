"use client";

import LandingHero from "@/components/Landing-hero";
import { LandingNavbar } from "@/components/Landing-navbar";
import LandingContent from "@/components/LandingContent";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
};

export default LandingPage;
