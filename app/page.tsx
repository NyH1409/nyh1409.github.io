"use client";

import PhotoGallery from "@/components/gallery/gallery";
import { HeroSection } from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PhotoGallery />
    </div>
  );
}
