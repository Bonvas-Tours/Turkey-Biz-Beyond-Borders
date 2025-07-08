
import React from 'react';

interface HighlightCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor?: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon, title, description }) => {
    return (
        <div className={`bg-[#D34A26] p-6 text-white flex items-start space-x-4`}>
            <div className="flex-shrink-0 text-[#D34A26] p-5 bg-white rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm mt-2">{description}</p>
            </div>
        </div>
    );
};

export default HighlightCard;
