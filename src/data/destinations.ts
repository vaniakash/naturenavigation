export interface SubDestination {
    name: string;
    image: string;
    description: string;
}

export interface DestinationPackage {
    id: string;
    slug: string;
    title: string;
    description: string;
    bannerImage: string;
    subDestinations: SubDestination[];
}

export const destinationPackages: DestinationPackage[] = [
    {
        id: 'char-dham',
        slug: 'char-dham-yatra',
        title: 'Char Dham Yatra',
        description: 'The Journey to Moksha in the Himalayas',
        bannerImage: '/char-dham-yatra.jpg',
        subDestinations: [
            {
                name: 'Yamunotri',
                image: '/yamunotri-dham.webp',
                description: 'The source of the holy Yamuna River and seat of Goddess Yamuna. It is the first stop in the Char Dham circuit.'
            },
            {
                name: 'Gangotri',
                image: '/gangotridham.jpg',
                description: 'The origin of the River Ganges (Bhagirathi) and the seat of Goddess Ganga, set amidst pine forests.'
            },
            {
                name: 'Kedarnath',
                image: '/kedarnath.jpeg',
                description: 'One of the 12 Jyotirlingas of Lord Shiva, located near the Mandakini river with a backdrop of snow-clad peaks.'
            },
            {
                name: 'Badrinath',
                image: '/badrinath-dham.webp',
                description: 'The abode of Lord Vishnu, situated between the Nar and Narayana mountain ranges along the Alaknanda river.'
            },
        ]
    },
    {
        id: 'panch-kedar',
        slug: 'panch-kedar-yatra',
        title: 'Panch Kedar Yatra',
        description: 'Tracing the Divine Steps of Lord Shiva',
        bannerImage: '/panch-kedar-yatra.webp',
        subDestinations: [
            {
                name: 'Kedarnath',
                image: '/kedarnath.jpeg',
                description: 'The hump of Lord Shiva is worshipped here. It is the most significant temple among the Panch Kedar.'
            },
            {
                name: 'Madhyamaheshwar',
                image: '/MadhyaMaheshwar.jpg',
                description: 'The navel or middle part of the bull (Shiva) is worshipped here in a scenic meadow setting.'
            },
            {
                name: 'Tungnath',
                image: '/tungnath-banner4.webp',
                description: 'The arms of Lord Shiva are worshipped here. At 3,680m, it is the highest Shiva temple in the world.'
            },
            {
                name: 'Rudranath',
                image: '/rudranath.jpg',
                description: 'The face of Lord Shiva is worshipped here. It involves a challenging trek through alpine meadows.'
            },
            {
                name: 'Kalpeshwar',
                image: '/kalpesar.jpg',
                description: 'The matted hair (Jata) of Lord Shiva is worshipped here. It is the only Kedar accessible throughout the year.'
            },
        ]
    }
];
