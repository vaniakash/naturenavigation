// Extended Interface for Detailed Trek Page
export interface Trek {
    id: number;
    name: string;

    // Hero Section
    heroTitle?: string;
    heroSubtitle?: string;
    image: string;

    // Quick Facts
    region: string;
    difficulty: string;
    duration: string; // Display: "6 Days"
    durationDays: number;
    altitude: string; // "12,500 ft"
    bestSeason: string; // "Dec–Apr, Oct–Nov"
    seasons?: string[];

    // About
    description: string; // Short desc
    longDescription?: string; // Full "About The Trek" text

    // Highlights
    highlights?: string[];

    // Price Card
    price: string; // "₹11,450"
    priceDetails?: {
        gst: string;
        insurance: string;
        transport: string;
    };

    // Itinerary
    itinerary?: {
        day: string;
        title: string;
        description: string;
    }[];

    // Other Sections
    inclusions?: string[];
    exclusions?: string[];
    fitnessRequirements?: string[];
    faqs?: {
        question: string;
        answer: string;
    }[];

    // Legacy fields (keeping for compatibility with existing components if needed)
    trekType?: string[];
    groupType?: string[];
    fitness?: string;
    accessibility?: string;
}

export const treksData: Trek[] = [
    {
        id: 1,
        name: 'Kedarkantha Trek',
        heroTitle: 'EXPLORE HIMALAYAN PEAKS',
        heroSubtitle: 'A classic Himalayan summit trek offering snow trails, forest walks, and a rewarding peak climb—ideal for beginners.',

        region: 'Himalaya (Uttarakhand)',
        difficulty: 'Easy – Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '12,500 ft',
        bestSeason: 'Dec–Apr, Oct–Nov',

        image: '/kedarkantha.webp',

        description: 'A classic Himalayan summit trek offering snow trails, forest walks, and a rewarding peak climb—ideal for beginners.',
        longDescription: `The Kedarkantha Trek is one of the most popular Himalayan treks in India. Known for its scenic forest trails, snow-covered paths in winter, and a thrilling summit climb, it is ideal for first-time trekkers who want to experience a true mountain ascent.

The summit offers panoramic views of major Himalayan peaks, making the climb both challenging and deeply rewarding.`,

        highlights: [
            'One of the best beginner-friendly summit treks',
            'Snow trekking during winter months',
            'Dense pine and oak forests',
            'Clear summit views of Himalayan ranges',
            'Well-planned campsites and gradual ascent'
        ],

        price: '₹11,450',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹180 Trek Insurance',
            transport: '₹2,200 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival',
                description: 'Arrival at Sankri / Kotgaon area. Briefing and preparation.'
            },
            {
                day: 'Day 2',
                title: 'Trek to Camp',
                description: 'Trek through forest trails to the first campsite.'
            },
            {
                day: 'Day 3–5',
                title: 'Trek Days',
                description: 'Gradual ascent, acclimatization, and summit attempt.'
            },
            {
                day: 'Day 6',
                title: 'Departure',
                description: 'Descent and return to Dehradun.'
            }
        ],

        inclusions: [
            'Accommodation during the trek',
            'All meals while on trek (Veg)',
            'Trek permits and forest camping charges',
            'Mountaineering qualified and experienced Trek Leader, Guide, and Support Staff',
            'First aid medical kits, stretcher, and oxygen cylinder'
        ],
        exclusions: [
            'Meals during transit',
            'Any personal expenses',
            'Mules or porters to carry personal luggage'
        ],

        fitnessRequirements: [
            'Ability to trek 5–6 hours daily',
            'Basic cardio fitness',
            'Preparation before the trek is recommended'
        ],

        faqs: [
            {
                question: 'What is generally included?',
                answer: 'Accommodation, meals, permits, and expert guides are included.'
            },
            {
                question: 'How fit do I need to be?',
                answer: 'You should be able to walk 5-6 hours a day. Basic cardio exercises 1 month prior are recommended.'
            },
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, Kedarkantha is considered one of the best treks for beginners due to its gradual ascent and rewarding views.'
            }
        ],

        // Legacy/Existing fields
        seasons: ['Winter', 'Spring'],
        trekType: ['Snow trek', 'Summit'],
        groupType: ['Beginners', 'Solo-friendly'],
        fitness: 'Medium',
        accessibility: 'Easy road access'
    },
    {
        id: 2,
        name: 'Valley of Flowers Trek',
        region: 'Uttarakhand',
        difficulty: 'Easy–Moderate',
        duration: '6 Days / 5 Nights',
        durationDays: 6,
        bestSeason: 'Monsoon (Jul–Sep)',
        seasons: ['Monsoon', 'Summer'],
        altitude: '10,000–14,000 ft',
        trekType: ['Meadows', 'Flowers'],
        groupType: ['Beginners', 'Families'],
        fitness: 'Medium',
        accessibility: 'Moderate',
        price: '₹9,500',
        image: '/kedarkantha.webp', // Using placeholder for now as requested previously
        description: 'A fairyland in the high Himalayas of Uttarakhand, offering a breathtaking display of blooming flowers.'
    },
    {
        id: 3,
        name: 'Har Ki Dun Trek',
        region: 'Uttarakhand',
        difficulty: 'Moderate',
        duration: '7 Days / 6 Nights',
        durationDays: 7,
        bestSeason: 'Summer (Apr–Jun) & Autumn (Sep–Nov)',
        seasons: ['Summer', 'Autumn'],
        altitude: '11,800 ft',
        trekType: ['Valley', 'Cultural'],
        groupType: ['History Buffs', 'Nature Lovers'],
        fitness: 'Medium',
        accessibility: 'Remote',
        price: '₹12,500',
        image: '/kedarkantha.webp',
        description: 'A cradle shaped hanging valley in the Garhwal Himalayas, known for its rich culture and ancient villages.'
    },
    {
        id: 4,
        name: 'Rupin Pass Trek',
        region: 'Uttarakhand/Himachal',
        difficulty: 'Moderate-Difficult',
        duration: '8 Days',
        durationDays: 8,
        bestSeason: 'May-Jun, Sep-Oct',
        seasons: ['Summer', 'Autumn'],
        altitude: '15,250 ft',
        trekType: ['High Altitude Pass'],
        groupType: ['Experienced'],
        fitness: 'High',
        accessibility: 'Moderate',
        price: '₹15,450',
        image: '/kedarkantha.webp',
        description: 'A high altitude crossover trek full of surprises, waterfalls, and changing scenery.'
    },
    {
        id: 5,
        name: 'Brahmatal Trek',
        region: 'Uttarakhand',
        difficulty: 'Moderate',
        duration: '6 Days',
        durationDays: 6,
        bestSeason: 'Dec-Mar',
        seasons: ['Winter'],
        altitude: '12,250 ft',
        trekType: ['Winter', 'Lake'],
        groupType: ['Beginners', 'Solo'],
        fitness: 'Medium',
        accessibility: 'Easy',
        price: '₹10,450',
        image: '/kedarkantha.webp',
        description: 'A winter wonderland with grand views of Mt. Trishul and Nanda Ghunti.'
    },
    {
        id: 6,
        name: 'Dayara Bugyal Trek',
        region: 'Uttarakhand',
        difficulty: 'Easy',
        duration: '4 Days',
        durationDays: 4,
        bestSeason: 'All Year',
        seasons: ['Winter', 'Summer', 'Spring', 'Autumn'],
        altitude: '11,181 ft',
        trekType: ['Meadows'],
        groupType: ['Families', 'Beginners'],
        fitness: 'Low-Medium',
        accessibility: 'Easy',
        price: '₹8,500',
        image: '/kedarkantha.webp',
        description: 'One of the most beautiful high altitude meadows in India.'
    }
];
