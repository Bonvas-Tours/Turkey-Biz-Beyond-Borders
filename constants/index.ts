// constants/index.ts

export const trip = [
    {
        title: 'Manufacturing & Textiles',
        description: 'Tour world-class textile and manufacturing facilities in Istanbul and Bursa',
        imageUrl: '/textile.jpg',
    },
    {
        title: 'International Trade Fairs',
        description: 'Attend top-tier trade fairs including Zuchex & TTM with exclusive access',
        imageUrl: '/trade-fair.jpg',
    },
    {
        title: 'Factory Visitations',
        description: 'Visit automotive, agro-machinery, and electronics facilities in Kocaeli',
        imageUrl: '/factory.jpg',
    },
    {
        title: 'B2B Networking',
        description: 'Engage in exclusive matchmaking sessions with Turkish manufacturers and entrepreneurs',
        imageUrl: '/networking.jpg',
    },
];

export const packages = {
    EarlyBird: {
        name: "Early Bird Package",
        description: "Secure your spot with our early bird pricing - limited time offer until July 31st, 2025.",
        pricing: {
            Standard: {
                single: "USD 2,610.50",
                double: "USD 2,610.50"
            }
        }
    },
    Regular: {
        name: "Regular Package",
        description: "Full access to all business exploration activities, factory visits, and trade fairs.",
        pricing: {
            Standard: {
                single: "USD 2,700.00",
                double: "USD 2,700.00"
            }
        }
    }
};

export const sourceOptions = [
    { label: "Facebook", value: "Facebook" },
    { label: "Instagram", value: "Instagram" },
    { label: "Twitter", value: "Twitter" },
    { label: "Friend", value: "Friend" },
    { label: "Family", value: "Family" },
    { label: "Website", value: "website" },
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Business Network", value: "business-network" },
    { label: "Other", value: "other" },
];

export const experiences = [
    {
        title: "Manufacturing Excellence",
        description: "Tour world-class textile, furniture, and construction material factories",
                imageSrc: "/manufacturing.jpg"
    },
    {
        title: "Trade Fair Access",
        description: "Exclusive entry to Zuchex & TTM international trade fairs",
        imageSrc: "/trade-fair.jpg"
    },
    {
        title: "Strategic Networking",
        description: "Connect with Turkish manufacturers and business leaders",
        imageSrc: "/networking.jpg"
    },
    {
        title: "Cultural Immersion",
        description: "Experience Istanbul's rich culture with Bosphorus cruises and guided city tours",
        imageSrc: "/istanbul.jpg"
    }
]

export const activities = [
    { title: "Factory Tours", imageSrc: "/factory-tour.jpg" },
    { title: "Trade Fair Exhibitions", imageSrc: "/exhibition.jpg" },
    { title: "Business Matchmaking", imageSrc: "/matchmaking.jpg" },
    { title: "Bosphorus Cruise", imageSrc: "/bosphorus.jpg" },
    { title: "Cultural City Tours", imageSrc: "/city-tour.jpg" },
]

export const industries = [
    "Manufacturing & Textiles",
    "Construction Materials", 
    "Kitchen & Homeware",
    "Machinery & Agro-processing",
    "Packaging & Printing",
    "Electronics & Automotive"
]