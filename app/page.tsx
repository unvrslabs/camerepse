import { HomeHero } from "@/components/sections/home-hero";
import { FillManifesto, StatsBand, HorizontalGallery } from "@/components/sections/home-wow";
import { Localita, Strutture, Indirizzi, Confronto, AdattoA } from "@/components/sections/home-sections";
import { AvailabilityCta } from "@/components/availability-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FillManifesto />
      <Localita />
      <StatsBand />
      <Strutture />
      <HorizontalGallery />
      <Indirizzi />
      <Confronto />
      <AdattoA />
      <AvailabilityCta />
    </>
  );
}
