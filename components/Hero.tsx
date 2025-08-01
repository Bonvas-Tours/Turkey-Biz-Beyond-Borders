// components/Hero.tsx
import Button from './Button'
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="relative padding-container px-20 md:flexCenter flex items-end gap-20 pt-20 md:pb-32 pb-10 md:gap-28 lg:py-20 xl:flex-row h-screen bg-hero-bg-1 bg-no-repeat bg-cover bg-bottom">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex flex-col justify-end p-6"></div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 text-white">
        <h1 className="bold-40 md:bold-64">Turkey Biz Beyond Borders</h1>
        <p className="regular-40 mt-6 xl:max-w-[600px]">
          International Business Exploration Tour 2025
        </p>
        <p className="regular-20 mt-4 xl:max-w-[600px]">
          Sept 9-15, 2025 | Istanbul • Bursa • Kocaeli
        </p>
        <p className="regular-18 mt-2 xl:max-w-[600px]">
          Expand your trade reach and forge lasting global partnerships
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row pt-5">
          <Button
            link="/booking-form"
            title="Book Now"
            variant="btn_orange"
          />
          <Button
            link="/#explore-more"
            title="Explore More"
            icon={<IoIosArrowRoundForward size={24} />}
            variant="btn_white_text"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero