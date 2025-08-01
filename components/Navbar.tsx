import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="flexBetween padding-container z-30 py-4 bg-white/70 absolute top-5 left-0 right-0">
      <Link href="/" className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
        <Image src="/biz.png" alt="logo" width={120} height={29} />
      </Link>

      <div className="md:flexCenter max-[400px]:w-40 flexCenter gap-3 md:block hidden">
        <Image src="/call-icon.svg" alt="Call Icon" width={24} height={24} />
        <h5 className="md:regular-18 text-[0.8rem]">+233 261 671 686/+233 531 090 068</h5>
      </div>
    </div>
  )
}

export default Navbar