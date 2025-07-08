// components/Activities.tsx
import Image from 'next/image'
import Button from './Button'
import { activities } from '@/constants'

interface ActivityCardProps {
    title: string
    imageSrc: string
    className?: string
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, imageSrc, className = "" }) => (
    <div className={`relative overflow-hidden group ${className} rounded-xl`}>
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
        <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/100 to-transparent">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
    </div>
)

export default function Activities() {
    return (
        <section className="2xl:max-container relative lg:mb-10 xl:mb-20 flex justify-start">
            <div className="padding-container w-full pb-24 flex flex-col gap-5">
                <h2 className="text-4xl font-bold mb-8">Business Activities & Experiences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-8">
                    <ActivityCard {...activities[0]} className="md:col-span-1 lg:col-span-2 lg:row-span-3 h-[300px]" />
                    <ActivityCard {...activities[1]} className="md:col-span-2 lg:row-span-6" />
                    <ActivityCard {...activities[2]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                    <ActivityCard {...activities[3]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                    <ActivityCard {...activities[4]} className="md:col-span-1 lg:col-span-2 h-[300px] lg:row-span-3" />
                </div>

                <div className="p-6">
                    <h3 className="font-bold text-xl mb-4">7-Day Itinerary Highlights:</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h4 className="font-semibold mb-2">Day 1: Departure</h4>
                            <ul>
                                <li>Departure from Accra to Istanbul</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Day 2: Arrival</h4>
                            <p>Welcome dinner & cultural briefing</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Day 3: Bursa</h4>
                            <p>Site visits to Textile, construction & furniture factory visits and Networking Dinner with Turkish business leaders</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Day 4: Kocaeli</h4>
                            <p>Visit to Kocaeli (Automotive & Agro-Machinery factories), Grand Bazaar & Bosphorus Dinner Cruise</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Day 5: Trade Fairs</h4>
                            <p>Full-day at Zuchex & TTM trade fairs, B2B meetings and Farewell Dinner</p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Day 6-7: Departure</h4>
                            <p>Final Trade Fair Visits, Shopping, Logistics briefing and departure</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="w-fit text-center">
                        <Button
                            link='/booking-form'
                            title="Book Now"
                            variant="btn_dark"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}