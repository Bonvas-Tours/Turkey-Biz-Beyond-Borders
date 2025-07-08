// components/Card.tsx
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 lg:pr-20">
                <h2 className="text-white bold-20">{title}</h2>
                <p className="text-white regular-14">{description}</p>
            </div>
        </div>
    );
};

export default Card;
