// Extended Interface for Detailed Trek Page
export interface Trek {
    id: number;
    slug: string; // SEO-friendly URL slug
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
        slug: 'kedarkantha',
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
        slug: 'valley-of-flowers',
        name: 'Valley of Flowers Trek',
        heroTitle: 'EXPLORE HIMALAYAN MEADOWS',
        heroSubtitle: 'A UNESCO World Heritage Site trek famous for its vibrant alpine flowers, scenic valleys, and serene Himalayan landscapes—perfect for nature lovers and beginners.',

        region: 'Garhwal Himalaya',
        difficulty: 'Easy – Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '14,100 ft',
        bestSeason: 'Jul – Sep',
        seasons: ['Monsoon', 'Summer'],

        image: '/valley.webp',

        description: 'A UNESCO World Heritage Site trek famous for its vibrant alpine flowers, scenic valleys, and serene Himalayan landscapes—perfect for nature lovers and beginners.',
        longDescription: `The Valley of Flowers Trek is one of the most scenic and unique treks in India, located in the Chamoli district of Uttarakhand. This trek is renowned for its vast meadows that come alive during the monsoon season with hundreds of rare Himalayan flowers.

Surrounded by snow-capped peaks, waterfalls, and glacial streams, the valley offers a peaceful and visually stunning trekking experience. The trek is ideal for beginners and nature enthusiasts who want to experience the beauty of the Himalayas without extreme difficulty.`,

        highlights: [
            'UNESCO World Heritage Site',
            'Blooming alpine flowers and lush green meadows',
            'Scenic views of waterfalls and glaciers',
            'Ideal trek for beginners and nature lovers',
            'Opportunity to visit Hemkund Sahib (optional)'
        ],

        price: '₹9,950',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹180 Trek Insurance',
            transport: '₹2,200 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival',
                description: 'Arrival at Govindghat / Joshimath. Briefing and trek preparation.'
            },
            {
                day: 'Day 2',
                title: 'Trek to Ghangaria',
                description: 'Trek from Govindghat to Ghangaria via Pulna village, passing through river valleys and forest trails.'
            },
            {
                day: 'Day 3',
                title: 'Valley of Flowers Exploration',
                description: 'Trek to Valley of Flowers and explore the meadows. Return to Ghangaria.'
            },
            {
                day: 'Day 4',
                title: 'Optional Hemkund Sahib',
                description: 'Visit Hemkund Sahib early morning (optional). Return to Ghangaria.'
            },
            {
                day: 'Day 5',
                title: 'Trek Back',
                description: 'Descend from Ghangaria to Govindghat. Drive to Joshimath.'
            },
            {
                day: 'Day 6',
                title: 'Departure',
                description: 'Departure to Dehradun / Rishikesh.'
            }
        ],

        inclusions: [
            'Accommodation during the trek',
            'All meals while on trek (Veg)',
            'Trek permits and forest entry fees',
            'Certified Trek Leader, Guide, and Support Staff',
            'First aid medical kits and emergency support'
        ],

        exclusions: [
            'Meals during transit',
            'Any personal expenses',
            'Porters or mules for personal luggage',
            'Anything not mentioned in inclusions'
        ],

        fitnessRequirements: [
            'Ability to trek 5–6 hours daily',
            'Light cardio fitness recommended',
            '3–4 weeks of walking practice is beneficial'
        ],

        faqs: [
            {
                question: 'What is generally included?',
                answer: 'Accommodation, meals during the trek, permits, and experienced guides are included.'
            },
            {
                question: 'How fit do I need to be?',
                answer: 'You should be able to walk 5–6 hours daily. Light cardio and walking practice for 3–4 weeks is recommended.'
            },
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, Valley of Flowers is beginner-friendly with gradual ascents and well-marked trails.'
            }
        ],

        trekType: ['Meadows', 'Flowers', 'UNESCO Site'],
        groupType: ['Beginners', 'Families', 'Nature Lovers'],
        fitness: 'Medium',
        accessibility: 'Moderate'
    },
    {
        id: 3,
        slug: 'har-ki-dun',
        name: 'Har Ki Dun Trek',
        heroTitle: 'EXPLORE THE VALLEY OF GODS',
        heroSubtitle: 'An ancient trail through pristine Himalayan valleys, offering rich culture, stunning landscapes, and a glimpse of traditional mountain life.',

        region: 'Garhwal Himalaya',
        difficulty: 'Moderate',
        duration: '7 Days',
        durationDays: 7,
        altitude: '11,800 ft',
        bestSeason: 'Apr – Jun, Sep – Nov',
        seasons: ['Summer', 'Autumn'],

        image: '/harkidun.webp',

        description: 'An ancient trail through pristine Himalayan valleys, known for its rich culture and stunning landscapes.',
        longDescription: `Har Ki Dun is a cradle-shaped hanging valley in the Garhwal Himalayas, often called the "Valley of Gods." This trek takes you through ancient villages, dense pine forests, and alongside gushing rivers.

The valley is steeped in mythology and offers stunning views of Swargarohini peaks. It's an ideal trek for those who want to experience both natural beauty and cultural richness of the Himalayas.`,

        highlights: [
            'Cradle-shaped hanging valley',
            'Ancient villages with rich Himalayan culture',
            'Views of Swarg Rohini peaks',
            'Dense pine and deodar forests',
            'Ideal for photography and nature lovers'
        ],

        price: '₹12,500',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹200 Trek Insurance',
            transport: '₹2,500 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival at Sankri',
                description: 'Arrive at Sankri village. Acclimatization and briefing.'
            },
            {
                day: 'Day 2',
                title: 'Sankri to Taluka',
                description: 'Trek through villages and forests to reach Taluka campsite.'
            },
            {
                day: 'Day 3',
                title: 'Taluka to Osla',
                description: 'Trek to Osla, passing through beautiful meadows and riverside trails.'
            },
            {
                day: 'Day 4',
                title: 'Osla to Har Ki Dun',
                description: 'Trek to Har Ki Dun valley, explore the meadows and surrounding peaks.'
            },
            {
                day: 'Day 5',
                title: 'Exploration Day',
                description: 'Optional exploration or rest day at Har Ki Dun.'
            },
            {
                day: 'Day 6',
                title: 'Return Journey',
                description: 'Begin descent back to Sankri via Taluka.'
            },
            {
                day: 'Day 7',
                title: 'Departure',
                description: 'Departure from Sankri to Dehradun.'
            }
        ],

        inclusions: [
            'Accommodation during the trek',
            'All meals while on trek (Veg)',
            'Trek permits and camping fees',
            'Experienced Trek Leader and Support Staff',
            'First aid and emergency support'
        ],

        exclusions: [
            'Meals during transit',
            'Personal expenses',
            'Porter charges for personal luggage',
            'Anything not mentioned in inclusions'
        ],

        fitnessRequirements: [
            'Ability to trek 6-7 hours daily',
            'Medium to good fitness level',
            'Prior trekking experience helpful but not mandatory'
        ],

        faqs: [
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, with moderate fitness and preparation, beginners can complete this trek.'
            },
            {
                question: 'What is the best time to visit?',
                answer: 'April to June and September to November offer the best weather and views.'
            },
            {
                question: 'Are there villages on the route?',
                answer: 'Yes, you will pass through several ancient Himalayan villages with unique culture.'
            }
        ],

        trekType: ['Valley', 'Cultural', 'Moderate'],
        groupType: ['History Buffs', 'Nature Lovers', 'Photographers'],
        fitness: 'Medium',
        accessibility: 'Remote'
    },
    {
        id: 4,
        slug: 'rupin-pass',
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
        slug: 'brahmatal',
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
        slug: 'dayara-bugyal',
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
