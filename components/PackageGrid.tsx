// components/PackageGrid.tsx
import { FaCheck, FaClock } from 'react-icons/fa';

const PackageCard: React.FC<{
    title: string;
    description: string;
    price: string;
    originalPrice?: string;
    deadline?: string;
    isEarlyBird?: boolean;
    features: string[];
}> = ({ title, description, price, originalPrice, deadline, isEarlyBird, features }) => (
    <div className={`rounded-3xl border-2 p-10 space-y-6 text-left relative ${isEarlyBird ? 'border-[#D34A26]' : 'border-black'}`}>
        {isEarlyBird && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#D34A26] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Early Bird Special
            </div>
        )}

        <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>

        <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#D34A26]">{price}</span>
            {originalPrice && (
                <span className="text-xl text-gray-400 line-through">{originalPrice}</span>
            )}
        </div>

        {deadline && (
            <div className="flex items-center gap-2 text-orange-600">
                <FaClock size={16} />
                <span className="text-sm font-medium">Deadline: {deadline}</span>
            </div>
        )}

        <div className="space-y-3">
            <h3 className="font-semibold text-lg">What's Included:</h3>
            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <FaCheck className="text-green-500 mt-1 flex-shrink-0" size={14} />
                        <span className="text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default function PackageGrid() {
    const earlyBirdFeatures = [
        "Round-trip economy flights (Accra-Istanbul-Accra)",
        "5 nights in 3-5 star hotels",
        "All meals and ground transportation",
        "Factory visits and guided tours",
        "Trade fair access (Zuchex & TTM)",
        "B2B matchmaking sessions",
        "Visa support and documentation",
        "Bilingual tour guides",
        "Cultural attractions and Bosphorus cruise"
    ];

    const regularFeatures = [
        "Round-trip economy flights (Accra-Istanbul-Accra)",
        "5 nights in 3-5 star hotels",
        "All meals and ground transportation",
        "Factory visits and guided tours",
        "Trade fair access (Zuchex & TTM)",
        "B2B matchmaking sessions",
        "Visa support and documentation",
        "Bilingual tour guides",
        "Cultural attractions and Bosphorus cruise"
    ];

    return (
        <div className="md:w-[1200px] p-4">
            <div className="grid lg:grid-cols-2 gap-8">
                <PackageCard
                    title="Early Bird Package"
                    description="Secure your spot with our limited-time early bird pricing. Save $89.50 when you book before July 31st, 2025."
                    price="USD $2,610.50"
                    originalPrice="USD $2,700.00"
                    deadline="July 31st, 2025"
                    isEarlyBird={true}
                    features={earlyBirdFeatures}
                />
                <PackageCard
                    title="Regular Package"
                    description="Complete business exploration experience with all activities, accommodations, and networking opportunities included."
                    price="USD $2,700.00"
                    features={regularFeatures}
                />
            </div>

            <div className="mt-8 p-6">
                <h3 className="font-bold text-xl mb-4 text-left">Target Industries:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Manufacturing & Textiles
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Construction Materials
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Kitchen & Homeware
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Machinery & Agro-processing
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Packaging & Printing
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#D34A26] rounded-full"></div>
                        Electronics & Automotive
                    </div>
                </div>
            </div>
        </div>
    );
}