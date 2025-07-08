import Activities from "@/components/Activities";
import BookNow from "@/components/BookNow";
import Hero from "@/components/Hero";
import HighlightTrip from "@/components/HightlightTrip";
import JoinUs from "@/components/JoinUs";
import Packages from "@/components/Packages";
import WhyTrip from "@/components/WhyTrip";

export default function Home() {
  return (
    <>
      <Hero />
      <JoinUs />
      <WhyTrip />
      <HighlightTrip />
      <Activities />
      <Packages />
      <BookNow />
    </>
  )
}
