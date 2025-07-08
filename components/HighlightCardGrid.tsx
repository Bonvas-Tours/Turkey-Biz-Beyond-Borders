// components/HighlightCardGrid.tsx
import React from 'react';
import HighlightCard from './HighlightCard';
import { FaHotel, FaPlane, FaBusAlt, FaIndustry, FaHandshake, FaGlobe } from 'react-icons/fa';

const HighlightCardGrid: React.FC = () => {
    const highlightData = [
        {
            icon: <FaHotel size={40} />,
            title: 'Premium Accommodation',
            description: '6 nights in 3-5 star hotels including Radisson Blu Istanbul Tuzla and Hilton Bursa.',
        },
        {
            icon: <FaPlane size={40} />,
            title: 'Return Flights Included',
            description: 'Economy-class airfare from Accra to Istanbul with all taxes and surcharges included.',
        },
        {
            icon: <FaIndustry size={40} />,
            title: 'Factory Visits',
            description: 'Tour world-class manufacturing facilities in textiles, automotive, and agro-processing.',
        },
        {
            icon: <FaHandshake size={40} />,
            title: 'B2B Matchmaking',
            description: 'Exclusive networking sessions with Turkish manufacturers and entrepreneurs.',
        },
        {
            icon: <FaGlobe size={40} />,
            title: 'Trade Fair Access',
            description: 'Guided experience at international trade fairs including Zuchex & TTM.',
        },
        {
            icon: <FaBusAlt size={40} />,
            title: 'Full Transportation',
            description: 'All local transfers, airport pickups, intercity movement, and site visits included.',
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {highlightData.map((item, index) => (
                    <HighlightCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default HighlightCardGrid;