import { About } from "@/components/About";
import { EnquiryBand } from "@/components/EnquiryBand";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { HowToJoin } from "@/components/HowToJoin";
import { Location } from "@/components/Location";
import { Mentor } from "@/components/Mentor";
import { Programs } from "@/components/Programs";
import { Stats } from "@/components/Stats";
import { WhyManat } from "@/components/WhyManat";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Programs />
      <About />
      <WhyManat />
      <Mentor />
      <HowToJoin />
      <Location />
      <Faq />
      <EnquiryBand />
    </>
  );
}
