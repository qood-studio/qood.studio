'use client'

import Footer from "@/components/footer/Footer";
import Hero from "@/components/sections/hero/Hero";
import AboutHorizontal from "@/components/sections/video-editing/VideoEditingSectionScroll";
import VideoMaskSection from "@/components/sections/video-mask/VideoMaskSection";
import SlidingImages from "@/components/SlidingImages/index";

export default function Page() {
  return (
    <div className="min-h-screen w-full">
      <Hero />
      <VideoMaskSection />
      <SlidingImages />
      <Footer />
    </div>
  )
}
