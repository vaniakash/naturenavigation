// Extended Interface for Detailed Trek Page
export interface Trek {
    id: number;
    slug: string; // SEO-friendly URL slug
    name: string;

    // Hero Section
    heroTitle?: string;
    heroSubtitle?: string;
    image: string;
    routeMap?: string; // Route map image path

    // Quick Facts
    region: string;
    difficulty: string;
    duration: string; // Display: "6 Days"
    durationDays: number;
    altitude: string; // "12,500 ft"
    bestSeason: string; // "Dec–Apr, Oct–Nov"
    seasons?: string[];

    // New Fields
    totalDistance?: string; // "Approx. 23 km"
    baseCamp?: string; // "Kotgaon / Gaichawan Gaon"
    gallery?: string[]; // Array of image paths

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
        heroTitle: 'THE PERFECT HIMALAYAN SUMMIT',
        heroSubtitle: 'A classic Himalayan summit trek offering snow trails, forest walks, and a rewarding peak climb—ideal for beginners.',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy – Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '12,500 ft',
        bestSeason: 'Dec–Apr',
        seasons: ['Winter', 'Spring'],

        totalDistance: 'Approx. 23 km',
        baseCamp: 'Kotgaon / Gaichawan Gaon, Uttarakhand',

        image: '/kedarkantha.webp',
        routeMap: '/himachal/AI/kedarkantha-route.webp',
        gallery: ['/kedar.webp', '/kedarkantha.webp', '/kedarkanthab.webp'],

        description: 'A classic Himalayan summit trek offering snow trails, forest walks, and a rewarding peak climb—ideal for beginners.',
        longDescription: `The Kedarkantha Trek is one of the most popular and rewarding Himalayan treks in India, especially for beginners who want to experience their first summit climb. Located in the Garhwal Himalayas of Uttarakhand, this trek offers a perfect balance of adventure, scenic beauty, and accessibility.

What makes Kedarkantha special is that the summit remains visible for most of the trek, constantly motivating trekkers as they walk through dense forests, open clearings, and snow-covered trails.

**The Kedarkantha Experience**

*Forest Trails & Clearings*
The trek begins from picturesque Himalayan villages and quickly enters dense forests of pine, oak, and maple. These forests feel untouched and peaceful, offering a raw Himalayan experience. Along the way, trekkers come across wide open clearings that serve as stunning campsites with panoramic mountain views.

*The Summit Climb*
The final ascent to the Kedarkantha summit is steep and thrilling, especially in winter when the trail is covered in snow. While challenging, it is well within reach for beginners with basic fitness. Standing at the summit provides a deep sense of achievement, with sweeping views of the surrounding Himalayan ranges.

*Seasonal Beauty*
• Winter: Snow-covered trails and magical white landscapes
• Spring: Blooming rhododendrons and vibrant forests
• Summer: Lush meadows and clear mountain views
• Autumn: Golden forests and crystal-clear skies`,

        highlights: [
            'Non-technical summit climb ideal for beginners',
            'Constant views of the summit throughout the trek',
            'Dense pine, oak, and maple forests',
            'Stunning campsites in open clearings',
            'Thrilling summit climb with 360° Himalayan views',
            'Accessible in winter with beautiful snow landscapes'
        ],

        price: '₹6,999',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹180 Trek Insurance',
            transport: '₹2,200 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival',
                description: 'Arrival at Sankri / Kotgaon / Gaichawan Gaon. Briefing and preparation.'
            },
            {
                day: 'Day 2',
                title: 'Trek to First Campsite',
                description: 'Trek through dense forests of pine and oak. Reach the first campsite in a clearing.'
            },
            {
                day: 'Day 3',
                title: 'Trek to Base Camp',
                description: 'Ascend further to the base camp. Enjoy panoramic views and acclimatize.'
            },
            {
                day: 'Day 4',
                title: 'Summit Day',
                description: 'Early morning push for the summit. Experience the sunrise from the top and descend to camp.'
            },
            {
                day: 'Day 5',
                title: 'Descend to Base Village',
                description: 'Trek back down to the base village through the beautiful forest trails.'
            },
            {
                day: 'Day 6',
                title: 'Departure',
                description: 'Departure from Sankri / Kotgaon.'
            }
        ],

        inclusions: [
            'Accommodation (Tents)',
            'All meals while on trek (Veg)',
            'Trek permits and forest camping charges',
            'Mountaineering qualified Trek Leader, Guide, and Support Staff',
            'First aid medical kits, stretcher, and oxygen cylinder'
        ],
        exclusions: [
            'Meals during transit',
            'Any personal expenses',
            'Mules or porters to carry personal luggage'
        ],

        fitnessRequirements: [
            'Walk 5 km in 38–40 minutes',
            'Carry a light backpack',
            'Be comfortable with daily walking for multiple days',
            'Basic cardio preparation for 4–6 weeks is recommended'
        ],

        faqs: [
            {
                question: 'Why is Kedarkantha perfect for beginners?',
                answer: 'It offers a non-technical summit climb, well-defined trails, excellent campsites, safe altitude gain, and stunning summit views.'
            },
            {
                question: 'What is the best time to do this trek?',
                answer: 'December to February is best for snow lovers. March to April for spring forests. May to June for green landscapes.'
            },
            {
                question: 'What is the accommodation like?',
                answer: 'Accommodation is in tents during the trek.'
            }
        ],

        // Legacy/Existing fields

        trekType: ['Snow trek', 'Summit', 'Forest'],
        groupType: ['Beginners', 'Solo-friendly', 'Family'],
        fitness: 'Easy to Moderate',
        accessibility: 'Easy road access'
    },
    {
        id: 2,
        slug: 'valley-of-flowers',
        name: 'Valley of Flowers Trek',
        heroTitle: 'EXPLORE HIMALAYAN MEADOWS',
        heroSubtitle: 'A UNESCO World Heritage Site trek famous for its vibrant alpine flowers, scenic valleys, and serene Himalayan landscapes—perfect for nature lovers and beginners.',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy – Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '14,100 ft',
        bestSeason: 'Jul – Sep',
        seasons: ['Monsoon', 'Summer'],

        image: '/valley.webp',
        routeMap: '/himachal/AI/valley-of-flowers-rout.webp',

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

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Moderate',
        duration: '7 Days',
        durationDays: 7,
        altitude: '11,800 ft',
        bestSeason: 'Apr – Jun, Sep – Nov',
        seasons: ['Summer', 'Autumn'],

        image: '/harkidun.webp',
        routeMap: '/himachal/AI/harkidun-route.webp',

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
        heroTitle: 'Rupin Pass Trek',
        heroSubtitle: 'The Waterfall Trail - Himachal\'s Most Scenic Pass',
        image: '/RupinPassTrek/rupinpass.webp',
        routeMap: '/himachal/AI/rupin-pass-route.webp',

        region: 'Himachal Pradesh',
        difficulty: 'Mod to Dif',
        duration: '8 Days',
        durationDays: 8,
        altitude: '15,250 ft',
        bestSeason: 'May – Jun, Sep – Oct',
        seasons: ['Summer', 'Autumn'],

        description: 'An incredibly scenic trek featuring waterfalls, hanging villages, meadows, snow bridges, and a thrilling high-altitude pass crossing.',

        longDescription: `The Rupin Pass Trek is often hailed as one of the most beautiful treks in the Indian Himalayas. This cross-over trek from Uttarakhand to Himachal Pradesh offers an incredibly diverse landscape, changing dramatically with each passing day - from dense forests to cascading waterfalls, from hanging villages to vast meadows, from snow bridges to steep glacier climbs.

The trek follows the Rupin River valley, featuring the spectacular Rupin Waterfall - one of the highest waterfalls in the Himalayas. You'll walk through ancient villages like Jhaka, where houses seem to defy gravity by hanging on steep slopes. The trail takes you across snow bridges, through rhododendron forests, and over alpine meadows before the final challenging climb to Rupin Pass (4,650m).

The pass crossing itself is an adventure - a steep snow and scree ascent that rewards trekkers with breathtaking 360-degree views of Kinnaur peaks including Kailash range. The descent into the Sangla valley is equally dramatic, making this one of the most complete Himalayan trekking experiences.

Rupin Pass is recommended for trekkers with prior experience, good fitness, and a spirit of adventure. The trek combines technical challenges with stunning beauty, making it a favorite among serious trekking enthusiasts.`,

        highlights: [
            'Cross from Uttarakhand to Himachal Pradesh',
            'Witness the magnificent Rupin Waterfall',
            'Visit hanging villages of Jhaka and Saruwas Thatch',
            'Walk on snow bridges over the Rupin River',
            'Challenging climb to Rupin Pass (15,250 ft)',
            '360° views of Kinnaur Kailash range',
            'Diverse terrain - forests, meadows, glaciers, waterfalls',
            'Descend into the beautiful Sangla Valley'
        ],

        price: '₹16,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Recommended but not included',
            transport: 'Available from Dehradun'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Dhaula',
                description: 'Drive from Dehradun to Dhaula village (8-9 hours). Cross through Mussoorie, Nainbagh, and Nowgaon. Overnight in guesthouse/tents. Altitude: 5,340 ft.'
            },
            {
                day: 'Day 2',
                title: 'Dhaula to Sewa',
                description: 'Begin trek through villages and forests alongside Rupin River. First views of snow peaks. Reach Sewa campsite (7,200 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 3',
                title: 'Sewa to Jhaka via Rupin Waterfall',
                description: 'Trek past the spectacular Rupin Waterfall. Cross snow bridges and reach the hanging village of Jhaka (9,450 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 4',
                title: 'Jhaka to Saruwas Thatch',
                description: 'Steep climb through meadows and forests. Reach the beautiful campsite of Saruwas Thatch (12,100 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 5',
                title: 'Saruwas Thatch to Dhanderas Thatch',
                description: 'Trek through vast alpine meadows with stunning mountain views. Reach Dhanderas Thatch (13,100 ft), the base camp for pass crossing. Trek duration: 4-5 hours.'
            },
            {
                day: 'Day 6',
                title: 'Dhanderas Thatch to Rupin Pass to Ronti Gad',
                description: 'Summit day! Very early start for steep climb to Rupin Pass (15,250 ft). Challenging snow and scree ascent. After crossing, steep descent to Ronti Gad campsite (11,150 ft). Trek duration: 10-12 hours.'
            },
            {
                day: 'Day 7',
                title: 'Ronti Gad to Sangla',
                description: 'Descend through meadows and forests to reach Sangla village. Drive to Sangla town. Trek duration: 3-4 hours.'
            },
            {
                day: 'Day 8',
                title: 'Sangla to Dehradun',
                description: 'Drive back to Dehradun via Shimla. Long but scenic journey. Arrive by evening.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals from Day 1 dinner to Day 8 breakfast',
            'Trek permits and forest fees',
            'Experienced trek leader and technical guides',
            'High-altitude camping equipment',
            'First aid, oxygen cylinder, and safety gear',
            'Porter support for common equipment',
            'Micro-spikes and technical gear for pass crossing'
        ],

        exclusions: [
            'Transport from Dehradun',
            'Personal trekking gear and equipment',
            'Personal porter/offloading charges',
            'Trekking insurance',
            'Meals during transit days',
            'Emergency evacuation costs',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Very good physical fitness required',
            'Ability to trek 8-10 hours on challenging terrain',
            'Prior high-altitude trekking experience recommended',
            'Good stamina for steep ascents and snow walking',
            'Should have completed at least 2 moderate treks'
        ],

        faqs: [
            {
                question: 'Is Rupin Pass suitable for beginners?',
                answer: 'No. Rupin Pass requires good fitness and prior trekking experience. The pass crossing day is particularly challenging with steep snow slopes.'
            },
            {
                question: 'What makes Rupin Pass special?',
                answer: 'Rupin Pass offers incredible diversity - you experience waterfalls, hanging villages, snow bridges, meadows, and a challenging high pass, all in one trek. It\'s a complete Himalayan experience.'
            },
            {
                question: 'Do I need technical equipment?',
                answer: 'Yes, micro-spikes are essential for the pass crossing. These are usually provided by trek operators. Trekking poles are highly recommended.'
            },
            {
                question: 'When is the best time?',
                answer: 'May-June offers snow-covered pass crossing and full waterfalls. September-October has clearer weather but less snow. Both seasons are excellent.'
            }
        ],

        trekType: ['Pass', 'Waterfall', 'Cross-over', 'Technical'],
        groupType: ['Experienced Trekkers', 'Adventure Seekers', 'Photographers'],
        fitness: 'High',
        accessibility: 'Moderate to Difficult'
    },
    {
        id: 5,
        slug: 'brahmatal',
        name: 'Brahmatal Trek',
        heroTitle: 'Brahmatal Trek',
        heroSubtitle: 'Winter\'s Hidden Gem - Lake of Brahma',
        image: '/brahmatal.webp',
        routeMap: '/himachal/AI/Brahmtal-trek-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy to Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '12,250 ft',
        bestSeason: 'Dec – Mar',
        seasons: ['Winter'],

        description: 'A stunning winter trek to a high-altitude glacial lake, offering spectacular mountain views and pristine snow-covered landscapes.',

        longDescription: `Brahmatal Trek is one of the most beautiful winter treks in Uttarakhand, taking you to the serene Brahmatal Lake at an altitude of 12,250 feet. Legend has it that Lord Brahma meditated at this lake, hence the name. This trek offers an incredible winter wonderland experience with oak and rhododendron forests completely covered in snow.

What sets Brahmatal apart from other winter treks is the 360-degree mountain panorama it offers. Throughout the trek, you're treated to stunning views of Mt. Trishul (7,120m) and Mt. Nanda Ghunti (6,309m) - two of the most beautiful peaks in the Kumaon region. The views become even more spectacular as you climb higher.

The trek passes through beautiful campsites like Bekaltal (another pristine lake) and Brahmatal, each offering unique charm. The ridge walk before Brahmatal summit is particularly breathtaking, with unobstructed views of the Himalayan peaks. The summit climb rewards trekkers with a magnificent 360-degree panorama.

Brahmatal is perfect for both beginners looking for their first winter trek and experienced trekkers seeking beautiful snow trekking. The well-defined trail, moderate altitude, and gradual ascent make it accessible while still offering a true Himalayan winter experience.`,

        highlights: [
            'Trek to the sacred Brahmatal Lake (12,250 ft)',
            '360° views of Mt. Trishul and Nanda Ghunti',
            'Beautiful winter wonderland with snow-covered forests',
            'Visit Bekaltal - another pristine high-altitude lake',
            'Spectacular ridge walk with mountain panoramas',
            'Perfect beginner-friendly winter trek',
            'Views of Chaukhamba, Nilkantha, and other peaks',
            'Walk through oak and rhododendron forests'
        ],

        price: '₹8,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Kathgodam/Rishikesh'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Kathgodam to Lohajung',
                description: 'Drive from Kathgodam to Lohajung base camp (7-8 hours). Scenic journey through Kumaon valleys. Overnight in guesthouse. Altitude: 7,700 ft.'
            },
            {
                day: 'Day 2',
                title: 'Lohajung to Bekaltal',
                description: 'Begin trek through oak forests. Gradual ascent with increasing snow cover. Reach Bekaltal lake campsite (9,600 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 3',
                title: 'Bekaltal to Brahmatal via Telandi',
                description: 'Trek through dense forests and open meadows. Pass Telandi ridge with first spectacular views of Trishul. Reach Brahmatal campsite (10,400 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 4',
                title: 'Brahmatal to Summit and back to Brahmatal',
                description: 'Early morning summit climb to Brahmatal peak (12,250 ft). Spectacular 360° views of Himalayan giants. Visit Brahmatal Lake. Return to camp. Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 5',
                title: 'Brahmatal to Lohajung',
                description: 'Descend back to Lohajung base camp via Bekaltal or alternative route. Trek duration: 6-7 hours. Overnight in guesthouse.'
            },
            {
                day: 'Day 6',
                title: 'Lohajung to Kathgodam',
                description: 'Drive back to Kathgodam. Journey ends with beautiful winter trek memories.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals from Day 1 dinner to Day 6 breakfast',
            'Trek permits and forest fees',
            'Experienced trek leader and guides',
            'Winter camping equipment and sleeping bags',
            'Micro-spikes for snow walking',
            'First aid kit and safety equipment'
        ],

        exclusions: [
            'Transport from Kathgodam',
            'Personal trekking gear',
            'Personal porter/offloading charges',
            'Insurance',
            'Meals during transit',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Moderate fitness level required',
            'Ability to trek 5-6 hours in snow',
            'Suitable for beginners with good fitness',
            'First winter trek can be attempted here'
        ],

        faqs: [
            {
                question: 'Is Brahmatal good for a first winter trek?',
                answer: 'Absolutely! Brahmatal is one of the best winter treks for beginners. The moderate altitude, gradual ascent, and well-defined trail make it perfect for your first snow trekking experience.'
            },
            {
                question: 'What are the views like?',
                answer: 'Spectacular! You get 360-degree views of Mt. Trishul, Nanda Ghunti, Chaukhamba, Nilkantha, and many other peaks. The views from the summit are particularly breathtaking.'
            },
            {
                question: 'How cold does it get?',
                answer: 'Temperatures can drop to -10°C to -15°C at night during peak winter (Dec-Jan). Proper winter gear including a -10°C rated sleeping bag is essential.'
            },
            {
                question: 'Is the trail safe in winter?',
                answer: 'Yes, the trail is well-established and safe. With micro-spikes and proper guidance, even beginners can complete this trek safely. Follow your guide\'s instructions carefully.'
            }
        ],

        trekType: ['Lake', 'Summit', 'Winter', 'Scenic'],
        groupType: ['Beginners', 'Winter Trekkers', 'Photographers'],
        fitness: 'Medium',
        accessibility: 'Easy to Moderate'
    },
    {
        id: 6,
        slug: 'dayara-bugyal',
        name: 'Dayara Bugyal Trek',
        heroTitle: 'Dayara Bugyal Trek',
        heroSubtitle: 'The Velvet Meadows of Uttarakhand',
        image: '/dayara-bugyal.webp',
        routeMap: '/himachal/AI/dayarabugyal-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy',
        duration: '5 Days',
        durationDays: 5,
        altitude: '12,000 ft',
        bestSeason: 'Apr – Jun, Sep – Nov',
        seasons: ['Summer', 'Autumn', 'Winter'],

        description: 'Trek to one of India\'s most beautiful high-altitude meadows, offering stunning mountain views and a carpet of alpine flowers.',

        longDescription: `Dayara Bugyal is one of the most beautiful and accessible high-altitude meadow treks in the Indian Himalayas. "Bugyal" means high-altitude meadow, and Dayara Bugyal is often called the "velvet meadows" due to its incredibly soft, lush grass that feels like walking on a green carpet.

The trek offers a perfect introduction to high-altitude trekking without being too challenging. The trail gradually ascends through dense oak and pine forests before opening up to vast, rolling meadows that stretch as far as the eye can see. During summer (May-June), these meadows burst into a riot of colors with countless alpine flowers blooming.

The views from Dayara Bugyal are spectacular - you're surrounded by mighty Himalayan peaks including Bandarpunch, Draupadi Ka Danda, Srikanth, Jaonli, and Gangotri ranges. The best views are from Bakaria Top (12,000 ft), the highest point of the trek, where you get a complete 360-degree panorama.

What makes Dayara Bugyal special is its versatility - it's beautiful in every season. Summer offers green meadows and wildflowers, autumn brings clear skies and golden grasslands, and winter transforms it into a pristine snow wonderland. It's perfect for families, beginners, and anyone who wants to experience the magic of Himalayan meadows.`,

        highlights: [
            'Walk on vast, pristine high-altitude meadows',
            '360° views from Bakaria Top (12,000 ft)',
            'Views of Bandarpunch, Draupadi Ka Danda, Srikanth peaks',
            'Beautiful alpine flowers in summer',
            'Oak and pine forest trails',
            'Perfect beginner and family-friendly trek',
            'Beautiful in all seasons - summer, autumn, and winter',
            'Easy access from Uttarkashi'
        ],

        price: '₹7,999',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Dehradun/Uttarkashi'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Barsu',
                description: 'Drive from Dehradun to Barsu village via Uttarkashi (7-8 hours). Beautiful journey along the Bhagirathi River. Overnight in guesthouse/camps. Altitude: 7,600 ft.'
            },
            {
                day: 'Day 2',
                title: 'Barsu to Gui',
                description: 'Begin trek through dense oak forests. Gradual ascent with increasing meadow views. First glimpses of the bugyals. Reach Gui campsite (10,200 ft). Trek duration: 4-5 hours.'
            },
            {
                day: 'Day 3',
                title: 'Gui to Dayara Bugyal and Bakaria Top',
                description: 'Trek across the vast Dayara meadows. Continue to Bakaria Top (12,000 ft) for spectacular 360° mountain views. Return to Dayara Bugyal camp (11,150 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 4',
                title: 'Dayara Bugyal to Barsu',
                description: 'Descend through meadows and forests back to Barsu village. Enjoy the changing landscapes. Trek duration: 5-6 hours. Overnight at Barsu.'
            },
            {
                day: 'Day 5',
                title: 'Barsu to Dehradun',
                description: 'Drive back to Dehradun. Arrive by evening with wonderful meadow trek memories.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals during the trek',
            'Trek permits and forest fees',
            'Experienced trek leader and guides',
            'Camping equipment and sleeping bags',
            'First aid kit'
        ],

        exclusions: [
            'Transport from Dehradun',
            'Personal trekking gear',
            'Personal porter/offloading charges',
            'Insurance',
            'Meals during transit',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Basic fitness level sufficient',
            'Ability to trek 4-5 hours daily',
            'Perfect for first-time trekkers',
            'Suitable for children above 8 years',
            'Great for families and beginners'
        ],

        faqs: [
            {
                question: 'Is Dayara Bugyal suitable for beginners and families?',
                answer: 'Absolutely! Dayara Bugyal is one of the best beginner and family-friendly treks. The gradual ascent, moderate altitude, and beautiful scenery make it perfect for first-time trekkers and children.'
            },
            {
                question: 'What is the best season to visit?',
                answer: 'Each season has its charm. Summer (May-June) offers green meadows and wildflowers. Autumn (Sep-Nov) has clear skies and golden grasslands. Winter (Dec-Mar) transforms it into a snow paradise.'
            },
            {
                question: 'Can I see alpine flowers?',
                answer: 'Yes! During May and June, the meadows are covered with beautiful alpine flowers including primulas, potentillas, and countless other wild blooms.'
            },
            {
                question: 'How are the campsites?',
                answer: 'The campsites are stunning! You camp in the middle of vast meadows with 360° mountain views. The sunrise and sunset views from the camps are absolutely magical.'
            }
        ],

        trekType: ['Meadow', 'Beginner', 'Family', 'Scenic'],
        groupType: ['Beginners', 'Families', 'Nature Lovers', 'Photographers'],
        fitness: 'Low',
        accessibility: 'Very Easy'
    },
    {
        id: 7,
        slug: 'bhrigu-lake',
        name: 'Bhrigu Lake Trek',
        heroTitle: 'EXPLORE SACRED HIMALAYAN LAKES',
        heroSubtitle: 'A high-altitude alpine lake trek near Manali, known for vast grasslands, snow patches, and strong mythological significance—perfect for beginners seeking quick Himalayan exposure.',

        region: 'Himachal Pradesh (Kullu Valley)',
        difficulty: 'Easy – Moderate',
        duration: '2–3 Days',
        durationDays: 3,
        altitude: '14,100 ft',
        bestSeason: 'May – October',
        seasons: ['Summer', 'Autumn'],

        image: '/himachal/bhrigu-lake-trek-himachal.webp',
        routeMap: '/himachal/AI/BHRIGU-LAKE-ROUTE.webp',

        description: 'A high-altitude alpine lake trek near Manali, known for vast grasslands and mythological significance.',
        longDescription: `The Bhrigu Lake Trek is one of the easiest high-altitude lake treks in the Indian Himalayas. Located near Manali, this trek is famous for its wide alpine meadows, panoramic views of snow-covered peaks, and the sacred Bhrigu Lake, believed to be the meditation site of Maharishi Bhrigu.

The short duration and gradual ascent make this trek ideal for beginners who want to experience high altitude without long trekking days.`,

        highlights: [
            'High-altitude alpine lake at 14,100 ft',
            'Vast green meadows and open landscapes',
            'Mythological significance of Bhrigu Rishi',
            'Perfect weekend trek from Manali',
            'Ideal for first-time trekkers'
        ],

        price: '₹11,999',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹180 Trek Insurance',
            transport: '₹1,800 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival & Trek to Campsite',
                description: 'Arrival at Manali. Drive to Gulaba and trek through meadows to the campsite.'
            },
            {
                day: 'Day 2',
                title: 'Bhrigu Lake Summit',
                description: 'Early morning trek to Bhrigu Lake. Spend time at the lake and descend to campsite.'
            },
            {
                day: 'Day 3',
                title: 'Descent & Departure',
                description: 'Trek down to Gulaba and drive back to Manali.'
            }
        ],

        inclusions: [
            'Accommodation during the trek',
            'All meals while on trek (Veg)',
            'Trek permits and local forest fees',
            'Certified Trek Leader and support staff',
            'First aid medical support'
        ],

        exclusions: [
            'Meals during transit',
            'Personal expenses',
            'Porter or mule charges',
            'Anything not mentioned in inclusions'
        ],

        fitnessRequirements: [
            'Ability to trek 4–5 hours daily',
            'Basic fitness level',
            'Walking practice recommended'
        ],

        faqs: [
            {
                question: 'What is generally included?',
                answer: 'Accommodation, meals, permits, and professional guides.'
            },
            {
                question: 'How fit do I need to be?',
                answer: 'Basic fitness is enough. You should be able to walk 4–5 hours comfortably.'
            },
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, Bhrigu Lake is ideal for beginners.'
            }
        ],

        trekType: ['Lake', 'Meadows', 'Sacred'],
        groupType: ['Beginners', 'Weekend Trekkers'],
        fitness: 'Low-Medium',
        accessibility: 'Easy'
    },
    {
        id: 8,
        slug: 'dainkund-dkd',
        name: 'Dainkund Trek (DKD)',
        heroTitle: 'EXPERIENCE THE SINGING HILLS',
        heroSubtitle: 'A peaceful and scenic trek near Dalhousie, offering panoramic Himalayan views, gentle trails, and serene meadows—perfect for beginners and families.',

        region: 'Himachal Pradesh (Dalhousie)',
        difficulty: 'Easy',
        duration: '1–2 Days',
        durationDays: 2,
        altitude: '9,300 ft',
        bestSeason: 'Mar – Nov',

        image: '/himachal/dainkund-trek-himachal.webp',
        routeMap: '/himachal/AI/daikund-route.webp',

        description: 'A peaceful trek near Dalhousie offering panoramic Himalayan views and gentle trails.',
        longDescription: `The Dainkund Trek, often referred to as DKD, is a short and easy Himalayan trek located near Dalhousie. Also known as the Singing Hill, Dainkund offers stunning 360-degree views of the surrounding valleys and snow-capped peaks.

The gentle terrain and short duration make it ideal for beginners, families, and travelers looking for a peaceful mountain experience.`,

        highlights: [
            '360° panoramic Himalayan views',
            'Calm meadows and forest trails',
            'Beginner-friendly terrain',
            'Ideal short trek near Dalhousie',
            'Minimal altitude challenges'
        ],

        price: '₹6,500',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹150 Trek Insurance',
            transport: '₹1,200 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival & Trek',
                description: 'Arrival at Dalhousie. Short drive to trekking point followed by trek to Dainkund summit.'
            },
            {
                day: 'Day 2',
                title: 'Descent & Departure',
                description: 'Optional sunrise view. Descend and return to Dalhousie.'
            }
        ],

        inclusions: [
            'Accommodation (if overnight)',
            'Meals during trek',
            'Trek leader and guide',
            'Local permits'
        ],

        exclusions: [
            'Personal expenses',
            'Transport to base point',
            'Anything not mentioned above'
        ],

        fitnessRequirements: [
            'Very basic fitness sufficient',
            'Can walk 2-3 hours comfortably',
            'Suitable for all ages'
        ],

        faqs: [
            {
                question: 'What is generally included?',
                answer: 'Meals, guides, and accommodation (if opted).'
            },
            {
                question: 'How fit do I need to be?',
                answer: 'Very basic fitness is sufficient.'
            },
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, this is one of the easiest Himalayan treks.'
            }
        ],

        trekType: ['Easy', 'Scenic', 'Short'],
        groupType: ['Beginners', 'Families', 'Seniors'],
        fitness: 'Low',
        accessibility: 'Very Easy'
    },
    {
        id: 9,
        slug: 'hamta-pass',
        name: 'Hamta Pass Trek',
        heroTitle: 'CROSS THE HIMALAYAN PASS',
        heroSubtitle: 'A dramatic crossover trek connecting lush Kullu Valley with the stark landscapes of Lahaul—offering changing terrains, river crossings, and stunning views.',

        region: 'Himachal Pradesh',
        difficulty: 'Easy – Moderate',
        duration: '5–6 Days',
        durationDays: 6,
        altitude: '14,100 ft',
        bestSeason: 'Jun – Sep',
        seasons: ['Summer', 'Monsoon'],

        image: '/himachal/hamta-pass-trek-himachal.webp',
        routeMap: '/himachal/AI/hamtapass-route.webp',

        description: 'A dramatic crossover trek connecting lush valleys with stark desert landscapes.',
        longDescription: `The Hamta Pass Trek is one of the most popular crossover treks in Himachal Pradesh. Starting from the green meadows of Kullu Valley, the trail gradually leads into the cold desert of Lahaul, offering a striking contrast in landscapes.

With river crossings, snow bridges, and panoramic mountain views, Hamta Pass is perfect for trekkers looking to step up from beginner to moderate treks.`,

        highlights: [
            'Dramatic landscape transition',
            'River crossings and snow trails',
            'Ideal progression trek for beginners',
            'Stunning views of Lahaul valley',
            'Option to visit Chandratal Lake'
        ],

        price: '₹12,999',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹200 Trek Insurance',
            transport: '₹2,400 Transport (Basecamp)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival',
                description: 'Arrival at Manali. Briefing and preparation.'
            },
            {
                day: 'Day 2',
                title: 'Trek to Campsite',
                description: 'Trek from Jobra to first campsite through forest trails.'
            },
            {
                day: 'Day 3–5',
                title: 'Trek Days',
                description: 'Gradual ascent, river crossings, and Hamta Pass summit.'
            },
            {
                day: 'Day 6',
                title: 'Descent & Departure',
                description: 'Descend to Chatru and drive back to Manali.'
            }
        ],

        inclusions: [
            'Accommodation during the trek',
            'All meals while on trek (Veg)',
            'Trek permits and forest fees',
            'Experienced Trek Leader and staff',
            'First aid and emergency support'
        ],

        exclusions: [
            'Meals during transit',
            'Personal expenses',
            'Porter/mule charges',
            'Anything not mentioned above'
        ],

        fitnessRequirements: [
            'Ability to trek 5–6 hours daily',
            'Good cardio fitness',
            'Prior trekking experience helpful'
        ],

        faqs: [
            {
                question: 'What is generally included?',
                answer: 'Accommodation, meals, permits, and certified guides.'
            },
            {
                question: 'How fit do I need to be?',
                answer: 'You should be able to walk 5–6 hours daily. Cardio preparation is recommended.'
            },
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'Yes, but prior trekking experience is helpful.'
            }
        ],

        trekType: ['Pass', 'Crossover', 'Moderate'],
        groupType: ['Intermediate', 'Adventure Seekers'],
        fitness: 'Medium',
        accessibility: 'Moderate'
    },

    // Kuari Pass Trek
    {
        id: 10,
        slug: 'kuari-pass',
        name: 'Kuari Pass Trek',
        heroTitle: 'Kuari Pass Trek',
        heroSubtitle: 'The Curzon Trail - Gateway to Himalayan Majesty',
        image: '/trekkkie/Kuari-Pass-Winter-Trek.webp',
        routeMap: '/himachal/AI/kauripass-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy to Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '12,763 ft',
        bestSeason: 'Dec – Apr',
        seasons: ['Winter', 'Spring'],

        description: 'A classic Himalayan trail offering breathtaking views of Nanda Devi and surrounding peaks, perfect for trekkers seeking scenic mountain panoramas.',

        longDescription: `The Kuari Pass Trek, also known as the Lord Curzon Trail, is one of the most beautiful winter treks in the Indian Himalayas. This classic trail offers unparalleled 360-degree views of some of India's highest peaks including Nanda Devi, Dronagiri, Kamet, and Chaukhamba.

Named after Lord Curzon who trekked this route in 1905, this trail takes you through pristine oak and rhododendron forests, vast meadows blanketed in snow (during winter), and charming Garhwali villages. The trek is especially stunning in winter when the entire landscape transforms into a white wonderland.

The Kuari Pass Trek is ideal for both beginners and experienced trekkers, offering a perfect blend of scenic beauty, moderate challenge, and cultural immersion. The sunrise views from the summit are truly unforgettable, with the golden rays illuminating the snow-capped peaks.`,

        highlights: [
            'Panoramic views of Nanda Devi, Dronagiri, Kamet, and Chaukhamba peaks',
            'Walk through dense oak and rhododendron forests',
            'Experience traditional Garhwali village life',
            'Spectacular sunrise and sunset views from campsites',
            'Winter wonderland experience with snow-covered meadows',
            'Historic Lord Curzon Trail route'
        ],

        price: '₹9,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Rishikesh/Haridwar'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Rishikesh to Joshimath',
                description: 'Scenic drive along the Alaknanda River through Devprayag and Rudraprayag. Reach Joshimath (6,150 ft) by evening. Overnight in hotel.'
            },
            {
                day: 'Day 2',
                title: 'Joshimath to Dhak via Auli',
                description: 'Short drive to Auli, then begin trek through meadows and forests. Reach Dhak campsite (9,022 ft). Trek duration: 4-5 hours.'
            },
            {
                day: 'Day 3',
                title: 'Dhak to Gulling via Chitrakantha',
                description: 'Trek through rhododendron forests to Chitrakantha ridge with first views of major peaks. Continue to Gulling Top campsite (11,024 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 4',
                title: 'Gulling to Kuari Pass and back to Tali',
                description: 'Summit day! Early morning trek to Kuari Pass (12,763 ft) for magnificent sunrise views. Descend to Tali campsite via forests. Trek duration: 8-9 hours.'
            },
            {
                day: 'Day 5',
                title: 'Tali to Auli',
                description: 'Descend through beautiful meadows back to Auli. Drive to Joshimath for overnight stay. Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 6',
                title: 'Joshimath to Rishikesh',
                description: 'Drive back to Rishikesh with memories of the stunning Kuari Pass trek. Arrive by evening.'
            }
        ],

        inclusions: [
            'Accommodation in hotels and tents',
            'All meals from Day 1 dinner to Day 6 breakfast',
            'Trek permits and forest fees',
            'Experienced trek leader and support staff',
            'First aid kit and oxygen cylinder',
            'All camping equipment and sleeping bags'
        ],

        exclusions: [
            'Transport to/from Rishikesh',
            'Personal trekking gear',
            'Porter/offloading charges',
            'Insurance',
            'Any meals during transit',
            'Personal expenses'
        ],

        fitnessRequirements: [
            'Ability to trek 5-7 hours daily',
            'Basic cardiovascular fitness',
            'Suitable for beginners with good fitness',
            'Prior trekking experience helpful but not mandatory'
        ],

        faqs: [
            {
                question: 'Is Kuari Pass suitable for beginners?',
                answer: 'Yes! Kuari Pass is one of the best treks for beginners with good fitness. The gradual ascent and moderate altitude make it ideal for first-time trekkers.'
            },
            {
                question: 'What is the best time to do this trek?',
                answer: 'Winter (December to February) offers snow-covered landscapes, while spring (March-April) provides clear skies and blooming rhododendrons. Both seasons are spectacular.'
            },
            {
                question: 'Can I see Nanda Devi from this trek?',
                answer: 'Yes! Kuari Pass offers one of the best views of Nanda Devi (India\'s second-highest peak) along with 20+ other major Himalayan peaks.'
            }
        ],

        trekType: ['Pass', 'Ridge', 'Scenic'],
        groupType: ['Beginners', 'Photographers', 'Nature Lovers'],
        fitness: 'Medium',
        accessibility: 'Easy to Moderate'
    },

    // Chopta Chandrashila Trek
    {
        id: 11,
        slug: 'chopta-chandrashila',
        name: 'Chopta – Chandrashila Trek',
        heroTitle: 'Chopta – Chandrashila Trek',
        heroSubtitle: 'Temple of the Gods & 360° Himalayan Panorama',
        image: '/trekkkie/Chopta-Tungnath-Chandrashila-trek.webp',
        routeMap: '/himachal/AI/chopta-chandrashila-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy to Moderate',
        duration: '4 Days',
        durationDays: 4,
        altitude: '13,123 ft',
        bestSeason: 'Dec – Apr',
        seasons: ['Winter', 'Spring'],

        description: 'A scenic and spiritual trek leading to the Tungnath Temple and Chandrashila summit, known for its 360° Himalayan views.',

        longDescription: `The Chopta-Chandrashila Trek is a perfect blend of spirituality, adventure, and natural beauty. This short but incredibly rewarding trek takes you to Tungnath, the world's highest Shiva temple (part of the sacred Panch Kedar), and then to the majestic Chandrashila summit.

Chopta, often called the "Mini Switzerland of India," serves as the base camp with its lush meadows and coniferous forests. The trek to Tungnath temple (3,680m) is a gentle climb through rhododendron and deodar forests, offering glimpses of snow-capped peaks throughout the journey.

The final ascent to Chandrashila summit (4,000m) is steep but short, rewarding trekkers with breathtaking 360-degree views of the Himalayan giants including Nanda Devi, Trishul, Kedar Peak, Bandarpunch, and Chaukhamba. The trek is especially magical during winter when the entire landscape is covered in pristine snow.`,

        highlights: [
            'Visit Tungnath Temple - world\'s highest Shiva temple',
            '360° views from Chandrashila summit',
            'Views of Nanda Devi, Trishul, Chaukhamba, and 20+ peaks',
            'Walk through rhododendron and deodar forests',
            'Beautiful meadows of Chopta',
            'Spectacular sunrise from the summit',
            'Winter wonderland experience with snow trekking'
        ],

        price: '₹6,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Haridwar/Rishikesh'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Haridwar to Chopta',
                description: 'Drive from Haridwar to Chopta (8,790 ft) via Devprayag and Rudraprayag. Approximately 8-9 hours journey through scenic mountain roads. Overnight in camps/guesthouse.'
            },
            {
                day: 'Day 2',
                title: 'Chopta to Tungnath to Chandrashila Summit',
                description: 'Early morning trek to Tungnath Temple (3.5 km, 3-4 hours). After darshan, continue to Chandrashila summit (1.5 km steep climb, 1.5-2 hours). Enjoy panoramic views and return to Chopta. Total trek: 6-7 hours.'
            },
            {
                day: 'Day 3',
                title: 'Explore Deoria Tal (Optional)',
                description: 'Optional trek to the beautiful Deoria Tal lake or rest day at Chopta. Explore the meadows and forests. Overnight at Chopta.'
            },
            {
                day: 'Day 4',
                title: 'Chopta to Haridwar',
                description: 'Drive back to Haridwar/Rishikesh. Arrive by evening with beautiful memories.'
            }
        ],

        inclusions: [
            'Accommodation in camps/guesthouses',
            'All meals during the trek',
            'Trek permits and temple entry fees',
            'Experienced trek leader',
            'First aid and safety equipment',
            'Forest camping fees'
        ],

        exclusions: [
            'Transport from Haridwar/Rishikesh',
            'Personal trekking gear',
            'Porter charges',
            'Insurance',
            'Meals during transit',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Ability to trek 4-5 hours',
            'Basic fitness level required',
            'Suitable for beginners and families',
            'Children above 10 years can participate'
        ],

        faqs: [
            {
                question: 'Can children do this trek?',
                answer: 'Yes! The trek is suitable for children above 10 years with reasonable fitness. The well-maintained trail makes it family-friendly.'
            },
            {
                question: 'Is the Tungnath temple open in winter?',
                answer: 'The temple closes around Diwali and reopens in May. However, you can still visit the temple area and continue to Chandrashila summit during winter.'
            },
            {
                question: 'How difficult is the final climb to Chandrashila?',
                answer: 'The final 1.5 km from Tungnath to Chandrashila is steep but short. Take it slow with regular breaks, and it\'s very doable.'
            }
        ],

        trekType: ['Summit', 'Spiritual', 'Scenic'],
        groupType: ['Beginners', 'Families', 'Pilgrims'],
        fitness: 'Low to Medium',
        accessibility: 'Easy'
    },

    // Nag Tibba Trek
    {
        id: 12,
        slug: 'nag-tibba',
        name: 'Nag Tibba Trek',
        heroTitle: 'Nag Tibba Trek',
        heroSubtitle: 'The Serpent\'s Peak - Perfect Weekend Himalayan Escape',
        image: '/trekkkie/nag-tibba-trek.webp',
        routeMap: '/himachal/AI/nag-tibba-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Easy',
        duration: '2 Days',
        durationDays: 2,
        altitude: '9,915 ft',
        bestSeason: 'Dec – Mar',
        seasons: ['Winter'],

        description: 'A short and beginner-friendly trek near Mussoorie, offering forest trails, snow walks in winter, and beautiful summit views.',

        longDescription: `Nag Tibba, meaning "Serpent's Peak," is the perfect weekend getaway trek for beginners and seasoned trekkers alike. Located just 90 km from Dehradun and 57 km from Mussoorie, this is one of the most accessible Himalayan treks, making it ideal for first-timers and those short on time.

Despite being a short trek, Nag Tibba doesn't compromise on the Himalayan experience. The trail takes you through dense oak and rhododendron forests, charming Garhwali villages, and pristine meadows. During winter (December to March), the trek transforms into a snow wonderland, perfect for those wanting their first snow trekking experience.

The summit rewards trekkers with stunning views of Himalayan giants including Swargarohini, Bandarpunch, Kedarnath, Gangotri, and even distant views of Nanda Devi. The ancient Nag Tibba temple at the summit adds a spiritual dimension to this beautiful trek.`,

        highlights: [
            'Perfect weekend trek - just 2 days',
            'Easily accessible from Delhi/Dehradun',
            'Ideal first Himalayan trek for beginners',
            'Beautiful snow trekking experience in winter',
            'Views of Bandarpunch, Swargarohini, Kedarnath peaks',
            'Walk through oak and rhododendron forests',
            'Visit the ancient Nag Tibba temple',
            'Experience traditional Garhwali village life'
        ],

        price: '₹4,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Dehradun'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Pantwari to Nag Tibba Base',
                description: 'Drive from Dehradun to Pantwari village (3-4 hours). Begin trek through forests and meadows to Nag Tibba base camp (7,940 ft). Trek duration: 4-5 hours. Overnight in tents.'
            },
            {
                day: 'Day 2',
                title: 'Summit & Descent',
                description: 'Early morning summit climb to Nag Tibba peak (9,915 ft) - 2 hours. Enjoy 360° views, visit the temple, and descend to Pantwari. Drive back to Dehradun. Total trek: 6-7 hours.'
            }
        ],

        inclusions: [
            'Accommodation in tents',
            'All meals from Day 1 lunch to Day 2 lunch',
            'Trek permits and forest fees',
            'Experienced trek leader and guide',
            'First aid kit',
            'Camping equipment and sleeping bags'
        ],

        exclusions: [
            'Transport from Dehradun to Pantwari',
            'Personal trekking gear (shoes, backpack)',
            'Porter/offloading charges',
            'Insurance',
            'Any meals except mentioned',
            'Personal expenses'
        ],

        fitnessRequirements: [
            'Ability to walk 4-5 hours',
            'Basic fitness sufficient',
            'Perfect for first-time trekkers',
            'No prior trekking experience needed'
        ],

        faqs: [
            {
                question: 'Is Nag Tibba good for first-time trekkers?',
                answer: 'Absolutely! Nag Tibba is one of the best treks for beginners. The short duration, moderate difficulty, and beautiful scenery make it perfect for your first Himalayan experience.'
            },
            {
                question: 'Can I do this trek in 2 days from Delhi?',
                answer: 'Yes! You can easily do a weekend trip from Delhi. Drive/travel on Friday night, trek on Saturday-Sunday, and return Sunday evening.'
            },
            {
                question: 'Will there be snow?',
                answer: 'December to March usually sees good snowfall. The trail and summit are covered in beautiful snow, making it a winter wonderland.'
            }
        ],

        trekType: ['Summit', 'Weekend', 'Beginner'],
        groupType: ['Beginners', 'Weekend Warriors', 'First-timers'],
        fitness: 'Low',
        accessibility: 'Very Easy'
    },

    // Kedartal Trek
    {
        id: 13,
        slug: 'kedartal',
        name: 'Kedartal Trek',
        heroTitle: 'Kedartal Trek',
        heroSubtitle: 'The Emerald Lake at the Feet of Thalay Sagar',
        image: '/trekkkie/Kedartal-Trek-Uttarkashi.webp',
        routeMap: '/himachal/AI/kedar-tal-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Difficult',
        duration: '7 Days',
        durationDays: 7,
        altitude: '15,600 ft',
        bestSeason: 'May – Jun',
        seasons: ['Summer'],

        description: 'A challenging high-altitude trek to a stunning glacial lake surrounded by towering Himalayan peaks, ideal for experienced trekkers.',

        longDescription: `Kedartal Trek is one of the most challenging and rewarding high-altitude treks in the Indian Himalayas. This demanding trail takes you to the pristine glacial Kedartal Lake (4,750m), nestled at the foot of the mighty Thalay Sagar peak (6,904m), one of the most beautiful mountains in the Himalayas.

The emerald-green lake, believed to be the source of the sacred Kedar Ganga, holds immense religious significance and is often called "Shiva's Lake." The trek is particularly challenging due to its steep ascents, rocky terrain, high altitude, and exposure to harsh mountain weather.

This trek is recommended only for experienced trekkers with good fitness and prior high-altitude experience. The reward, however, is unparalleled - crystal clear glacial waters reflecting the towering peaks of Thalay Sagar, Bhrigupanth, Jogin, and Manda peaks. The raw, rugged beauty of this trek leaves an indelible mark on every adventurer who completes it.`,

        highlights: [
            'Stunning Kedartal Lake at 15,600 ft',
            'Close-up views of majestic Thalay Sagar peak',
            'Views of Bhrigupanth, Jogin, and Manda peaks',
            'Walk on glacial moraines and boulder fields',
            'Source of the Kedar Ganga river',
            'Pristine high-altitude camping experience',
            'One of the most challenging treks in Garhwal',
            'Minimal crowds - true wilderness experience'
        ],

        price: '₹12,999',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Mandatory and not included',
            transport: 'Available from Dehradun/Rishikesh'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Gangotri',
                description: 'Drive from Dehradun to Gangotri (10,203 ft) via Uttarkashi. Approximately 10-11 hours journey. Overnight in guesthouse. Acclimatization and preparation.'
            },
            {
                day: 'Day 2',
                title: 'Gangotri to Bhoj Kharak',
                description: 'Begin trek from Gangotri village. Steep ascent through birch and rhododendron forests to Bhoj Kharak campsite (11,482 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 3',
                title: 'Bhoj Kharak to Kedar Kharak',
                description: 'Continue steep ascent through boulder sections and moraine. Cross Kedar Ganga multiple times. Reach Kedar Kharak (13,940 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 4',
                title: 'Kedar Kharak to Kedartal & Back',
                description: 'Summit day! Very early start for steep climb to Kedartal (15,600 ft). Difficult terrain with boulders and loose rocks. Spend time at the lake, then descend to Kedar Kharak. Trek duration: 8-9 hours.'
            },
            {
                day: 'Day 5',
                title: 'Kedar Kharak to Bhoj Kharak',
                description: 'Descend back to Bhoj Kharak. Trek duration: 5-6 hours. Rest and recover.'
            },
            {
                day: 'Day 6',
                title: 'Bhoj Kharak to Gangotri',
                description: 'Final descent to Gangotri. Trek duration: 4-5 hours. Overnight in guesthouse.'
            },
            {
                day: 'Day 7',
                title: 'Gangotri to Dehradun',
                description: 'Drive back to Dehradun. Arrive by evening.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals during the trek',
            'Trek permits and forest fees',
            'Highly experienced trek leader and guides',
            'High-altitude camping equipment',
            'First aid, oxygen cylinder, and safety gear',
            'Porter support for common equipment'
        ],

        exclusions: [
            'Transport from Dehradun',
            'Personal trekking gear and equipment',
            'Personal porter/offloading charges',
            'Mandatory trekking insurance',
            'Meals during transit',
            'Emergency evacuation costs',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Excellent physical fitness required',
            'Ability to trek 7-8 hours on difficult terrain',
            'Prior high-altitude trekking experience mandatory',
            'Good acclimatization and stamina',
            'Should have completed at least 2-3 moderate to difficult treks'
        ],

        faqs: [
            {
                question: 'Is this trek suitable for beginners?',
                answer: 'No. Kedartal is one of the most difficult treks in India. It requires prior high-altitude trekking experience, excellent fitness, and mental determination.'
            },
            {
                question: 'When is the best time to trek?',
                answer: 'May to June is ideal when the trail is accessible and weather is relatively stable. Avoid monsoon season (July-September) due to landslides and heavy rain.'
            },
            {
                question: 'Do I need insurance?',
                answer: 'Yes, trekking insurance covering high-altitude adventure activities is mandatory for this trek due to the high risk and remote location.'
            },
            {
                question: 'How do I prepare for this trek?',
                answer: 'Start cardiovascular training 2-3 months before. Do strength training, especially legs. Complete 1-2 moderate Himalayan treks beforehand. Mental preparation is equally important.'
            }
        ],

        trekType: ['Lake', 'High Altitude', 'Challenging', 'Glacial'],
        groupType: ['Experienced Trekkers', 'Adventure Seekers'],
        fitness: 'Very High',
        accessibility: 'Difficult'
    },

    // Gaumukh Tapovan Trek
    {
        id: 14,
        slug: 'gaumukh-tapovan',
        name: 'Gaumukh – Tapovan Trek',
        heroTitle: 'Gaumukh – Tapovan Trek',
        heroSubtitle: 'Source of the Ganga - Where Heaven Meets Earth',
        image: '/trekkkie/gaumukh_tapovan.webp',
        routeMap: '/himachal/AI/gaumukh-route.webp',

        region: 'Garhwal Himalaya (Uttarakhand)',
        difficulty: 'Moderate to Difficult',
        duration: '7 Days',
        durationDays: 7,
        altitude: '14,203 ft',
        bestSeason: 'May – Jun',
        seasons: ['Summer'],

        description: 'A spiritually significant trek to the source of the River Ganga, featuring vast alpine meadows and dramatic mountain views.',

        longDescription: `The Gaumukh-Tapovan Trek is one of the most sacred and spectacular treks in the Indian Himalayas. This challenging yet incredibly rewarding journey takes you to Gaumukh, the glacial snout of the Gangotri glacier where the holy River Ganga originates, and then to the pristine alpine meadows of Tapovan.

Gaumukh (literally "cow's mouth") is where you witness the birth of India's most sacred river. The sight of the mighty Gangotri glacier calving ice into the freezing waters is both humbling and awe-inspiring. From Gaumukh, the trek ascends to Tapovan (4,350m), a vast high-altitude meadow that offers breathtaking close-up views of Mt. Shivling, often called the "Matterhorn of India."

Tapovan is a surreal landscape - a green meadow surrounded by towering peaks and glaciers. The area is also dotted with sadhus' huts who meditate in this harsh yet beautiful environment. This trek combines spirituality, adventure, and unparalleled natural beauty, making it a bucket-list trek for serious Himalayan enthusiasts.`,

        highlights: [
            'Visit Gaumukh - the sacred source of River Ganga',
            'Witness the massive Gangotri Glacier',
            'Camp at Tapovan meadows (14,203 ft)',
            'Close-up views of Mt. Shivling (21,467 ft)',
            'Views of Bhagirathi peaks, Meru, and Sudarshan Parbat',
            'Walk on glacial moraines and high-altitude meadows',
            'Spiritual experience at the source of Ganga',
            'Interact with sadhus meditating in Tapovan'
        ],

        price: '₹14,999',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Recommended but not included',
            transport: 'Available from Dehradun/Rishikesh'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Gangotri',
                description: 'Drive from Dehradun to Gangotri (10,203 ft) via Uttarkashi. Approximately 10-11 hours. Check permits, rest, and acclimatize. Overnight in guesthouse.'
            },
            {
                day: 'Day 2',
                title: 'Gangotri to Chirbasa',
                description: 'Begin trek alongside Bhagirathi River. Gradual ascent through birch forests to Chirbasa campsite (11,700 ft). Trek duration: 4-5 hours.'
            },
            {
                day: 'Day 3',
                title: 'Chirbasa to Bhojbasa',
                description: 'Continue trek above the tree line. Sparse vegetation and rocky terrain. Reach Bhojbasa (12,467 ft) with views of Bhagirathi peaks. Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 4',
                title: 'Bhojbasa to Gaumukh to Tapovan',
                description: 'Trek to Gaumukh glacier (13,000 ft). Pay respects and witness the source of Ganga. Challenging ascent on glacier and moraine to reach Tapovan meadows (14,203 ft). Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 5',
                title: 'Explore Tapovan',
                description: 'Rest and acclimatization day. Explore Tapovan meadows, visit nearby viewpoints for Shivling views, interact with sadhus. Optional exploration of surrounding areas.'
            },
            {
                day: 'Day 6',
                title: 'Tapovan to Bhojbasa',
                description: 'Descend from Tapovan to Bhojbasa. Trek duration: 5-6 hours. Overnight at camp.'
            },
            {
                day: 'Day 7',
                title: 'Bhojbasa to Gangotri to Dehradun',
                description: 'Descend to Gangotri (4-5 hours trek). Drive back to Dehradun. Arrive late evening.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals during the trek',
            'Trek permits and Inner Line Permits',
            'Experienced trek leader and guides',
            'High-altitude camping equipment',
            'First aid and oxygen support',
            'Porter support for common gear'
        ],

        exclusions: [
            'Transport from Dehradun/Rishikesh',
            'Personal trekking gear',
            'Personal porter/offloading charges',
            'Trekking insurance',
            'Meals during transit days',
            'Any personal expenses',
            'Emergency evacuation charges'
        ],

        fitnessRequirements: [
            'Good to excellent physical fitness',
            'Ability to trek 6-7 hours daily',
            'Prior high-altitude experience recommended',
            'Good acclimatization and endurance',
            'The glacier crossing requires care and stamina'
        ],

        faqs: [
            {
                question: 'Do I need special permits?',
                answer: 'Yes, you need Inner Line Permit (ILP) for this trek as it enters sensitive areas. Your trek operator will arrange this, but carry valid ID proof.'
            },
            {
                question: 'Is the glacier crossing safe?',
                answer: 'The glacier crossing to Tapovan requires care and proper guidance. Our experienced guides will ensure safe crossing. Following instructions is crucial.'
            },
            {
                question: 'When is the best time for this trek?',
                answer: 'May to June is ideal when the route is open and weather is stable. Early September is also possible but riskier due to unpredictable weather.'
            },
            {
                question: 'Will I see sadhus at Tapovan?',
                answer: 'Yes, usually 2-3 sadhus stay at Tapovan during summer months, meditating in this sacred space. You can interact with them respectfully.'
            }
        ],

        trekType: ['Glacier', 'Spiritual', 'High Altitude', 'Meadow'],
        groupType: ['Experienced Trekkers', 'Pilgrims', 'Photographers'],
        fitness: 'High',
        accessibility: 'Moderate to Difficult'
    },

    // Pindari Glacier Trek
    {
        id: 15,
        slug: 'pindari-glacier',
        name: 'Pindari Glacier Trek',
        heroTitle: 'Pindari Glacier Trek',
        heroSubtitle: 'Journey to the Heart of Kumaon Himalayas',
        image: '/trekkkie/Pindari_Glacier_Trek.webp',
        routeMap: '/himachal/AI/pindari-route.webp',

        region: 'Kumaon Himalaya (Uttarakhand)',
        difficulty: 'Easy to Moderate',
        duration: '6 Days',
        durationDays: 6,
        altitude: '12,300 ft',
        bestSeason: 'Apr – Jun, Sep – Oct',
        seasons: ['Summer', 'Autumn'],

        description: 'A classic glacier trek through scenic valleys and villages, offering a balanced mix of adventure and natural beauty.',

        longDescription: `The Pindari Glacier Trek is one of the most beautiful and accessible glacier treks in the Kumaon region of Uttarakhand. This classic Himalayan trek takes you through picturesque villages, dense forests, lush meadows, and alongside the roaring Pindar River to the magnificent Pindari Glacier.

What makes this trek special is the perfect balance it offers - it's challenging enough to give you a true Himalayan trekking experience, yet accessible enough for trekkers with moderate fitness. The trail passes through charming Kumaoni villages like Khati, where you can experience the warm hospitality and unique culture of the local people.

The glacier itself is a stunning sight - a massive river of ice nestled between towering peaks like Nanda Devi, Nanda Kot, and Panwali Dwar. The trek offers spectacular views throughout, especially from Pindari Zero Point where you witness the glacier's snout up close.

Unlike the more touristy routes in Garhwal, Pindari retains a sense of pristine wilderness and authentic mountain culture, making it a favorite among seasoned trekkers and nature lovers.`,

        highlights: [
            'Trek to the spectacular Pindari Glacier',
            'Views of Nanda Devi, Nanda Kot, and Panwali Dwar',
            'Walk through traditional Kumaoni villages',
            'Experience unique Kumaoni culture and hospitality',
            'Trek alongside the beautiful Pindar River',
            'Walk through rhododendron and oak forests',
            'Visit Pindari Zero Point - closest view of glacier',
            'Relatively uncrowded trail - peaceful trekking experience'
        ],

        price: '₹12,950',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Kathgodam/Haldwani'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Kathgodam to Khati',
                description: 'Drive from Kathgodam to Loharkhet (6-7 hours). Trek 6 km to Khati village (7,600 ft), the last inhabited village on the trail. Trek duration: 3-4 hours. Overnight in guesthouse/homestay.'
            },
            {
                day: 'Day 2',
                title: 'Khati to Dwali',
                description: 'Trek through beautiful forests alongside Pindar River. Cross small streams and enjoy mountain views. Reach Dwali campsite (8,760 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 3',
                title: 'Dwali to Phurkiya',
                description: 'Continue through dense forests and open meadows. The trail becomes steeper with stunning views emerging. Reach Phurkiya (10,366 ft). Trek duration: 5-6 hours.'
            },
            {
                day: 'Day 4',
                title: 'Phurkiya to Pindari Glacier & Back',
                description: 'Summit day! Trek to Pindari Zero Point (12,300 ft) for close-up glacier views. Spend time at the glacier, take photos, and soak in the majesty. Return to Phurkiya. Trek duration: 6-7 hours.'
            },
            {
                day: 'Day 5',
                title: 'Phurkiya to Khati',
                description: 'Begin descent back to Khati village. Trek duration: 7-8 hours. Overnight at Khati.'
            },
            {
                day: 'Day 6',
                title: 'Khati to Loharkhet to Kathgodam',
                description: 'Trek down to Loharkhet (3-4 hours). Drive back to Kathgodam. Journey ends with amazing memories.'
            }
        ],

        inclusions: [
            'Accommodation in guesthouses and tents',
            'All meals during the trek',
            'Trek permits and forest fees',
            'Experienced trek leader and guides',
            'Camping equipment and sleeping bags',
            'First aid kit',
            'Porter support for common equipment'
        ],

        exclusions: [
            'Transport from Kathgodam',
            'Personal trekking gear',
            'Personal porter/offloading charges',
            'Trekking insurance',
            'Meals during transit',
            'Any personal expenses'
        ],

        fitnessRequirements: [
            'Ability to trek 5-7 hours daily',
            'Moderate fitness level required',
            'Suitable for beginners with good fitness',
            'Some prior trekking experience helpful'
        ],

        faqs: [
            {
                question: 'Is Pindari Glacier good for first-time trekkers?',
                answer: 'While doable for fit beginners, it\'s better suited for those with at least one prior trek. The duration and altitude make it moderately challenging.'
            },
            {
                question: 'How is the accommodation on this trek?',
                answer: 'The first night is usually in a guesthouse/homestay at Khati village. After that, it\'s camping. The local hospitality in Khati is wonderful!'
            },
            {
                question: 'What is the best season for Pindari Glacier?',
                answer: 'April-June offers clear skies and blooming rhododendrons. September-October provides post-monsoon clarity. Avoid July-August (monsoon).'
            },
            {
                question: 'Can I see Nanda Devi from this trek?',
                answer: 'Yes! On clear days, you get magnificent views of Nanda Devi, Nanda Kot, Nanda Khat, and other Kumaon peaks.'
            }
        ],

        trekType: ['Glacier', 'Valley', 'Village', 'Scenic'],
        groupType: ['Intermediate Trekkers', 'Nature Lovers', 'Culture Enthusiasts'],
        fitness: 'Medium',
        accessibility: 'Moderate'
    },
    // Gidara Bugyal Trek
    {
        id: 17,
        slug: 'gidara-bugyal',
        name: 'Gidara Bugyal Trek',
        heroTitle: 'Gidara Bugyal',
        heroSubtitle: 'The Highest Alpine Meadow in India',
        image: '/gidara-bugyal-trek.webp',
        routeMap: '/gidara-bugyal-route.png',

        region: 'Uttarakhand (Garhwal)',
        difficulty: 'Moderate',
        duration: '7 Days',
        durationDays: 7,
        altitude: '13,900 ft',
        bestSeason: 'Jun, Sep – Oct',
        seasons: ['Summer', 'Autumn'],

        description: 'Explore one of the largest and highest alpine meadows in India, offering untouched beauty and solitude.',
        longDescription: `Gidara Bugyal is often considered one of the most beautiful and expansive high-altitude meadows in Uttarakhand, larger and more pristine than the famous Dayara and Bedni Bugyals.

        Located near Gangotri, this trek takes you through dense forests to vast, rolling green meadows that seem to touch the sky. It offers unobstructed views of Gangotri, Jogin, and Srikanth peaks. Being less commercialized, it offers a raw and peaceful Himalayan experience.`,

        highlights: [
            'One of the largest high-altitude meadows',
            'Pristine and uncrowded',
            'Spectacular views of Gangotri range',
            'Golden meadows in autumn',
            'Challenging ridge walks'
        ],

        price: '₹8,999',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Not included',
            transport: 'Available from Dehradun'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Dehradun to Bhangeli',
                description: 'Drive to Bhangeli village via Uttarkashi.'
            },
            {
                day: 'Day 2',
                title: 'Bhangeli to Rikoda',
                description: 'Trek through forests to Rikoda campsite.'
            },
            {
                day: 'Day 3',
                title: 'Rikoda to Dokrani',
                description: 'Ascend to the Dokrani Bugyal area.'
            },
            {
                day: 'Day 4',
                title: 'Dokrani to Gidara Top',
                description: 'Trek to the Gidara Bugyal top. Explore the vast meadows.'
            },
            {
                day: 'Day 5',
                title: 'Gidara to Thirya',
                description: 'Descend to Thirya campsite.'
            },
            {
                day: 'Day 6',
                title: 'Thirya to Bhangeli',
                description: 'Trek back to Bhangeli village.'
            },
            {
                day: 'Day 7',
                title: 'Bhangeli to Dehradun',
                description: 'Drive back to Dehradun.'
            }
        ],

        inclusions: ['Accommodation', 'Meals', 'Permits', 'Guide'],
        exclusions: ['Transport', 'Personal Gear'],
        fitnessRequirements: ['Good fitness required'],
        trekType: ['Meadow', 'High Altitude'],
        groupType: ['Experienced Trekkers'],
        fitness: 'Medium',
        accessibility: 'Remote'
    },
    // Kashmir Great Lakes Trek
    {
        id: 18,
        slug: 'kashmir-great-lakes',
        name: 'Kashmir Great Lakes Trek',
        heroTitle: 'Kashmir Great Lakes',
        heroSubtitle: 'Paradise on Earth - Seven Alpine Lakes',
        image: '/kashmir-great-lakes-trek.webp',
        routeMap: '/great-kashmier-lake-route.png',

        region: 'Kashmir',
        difficulty: 'Moderate to Difficult',
        duration: '8 Days',
        durationDays: 8,
        altitude: '13,750 ft',
        bestSeason: 'Jul – Sep',
        seasons: ['Summer', 'Monsoon'],

        description: 'The most beautiful trek in India, featuring seven turquoise alpine lakes and lush maple forests.',
        longDescription: `The Kashmir Great Lakes Trek is widely regarded as the prettiest trek in India. It validates Kashmir's title as "Paradise on Earth." The trek takes you through five lush valleys and seven turquoise high-altitude lakes, including the famous Vishansar, Kishansar, Gadsar, Satsar, and Gangabal lakes.

        Every day on this trek offers a new view – from maple forests to alpine meadows and snow-patched passes.`,

        highlights: [
            'Seven stunning turquoise alpine lakes',
            'Lush green meadows of Kashmir',
            'Cross the Gadsar Pass (13,750 ft)',
            'Views of Mt. Haramukh',
            'Maple and pine forests'
        ],

        price: '₹15,800',
        priceDetails: {
            gst: '5% applicable',
            insurance: 'Mandatory',
            transport: 'From Srinagar'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Srinagar to Sonamarg',
                description: 'Drive from Srinagar to Sonamarg camp.'
            },
            {
                day: 'Day 2',
                title: 'Sonamarg to Nichnai',
                description: 'Trek through maple forests to Nichnai valley.'
            },
            {
                day: 'Day 3',
                title: 'Nichnai to Vishansar Lake',
                description: 'Cross Nichnai Pass to reach the stunning Vishansar Lake.'
            },
            {
                day: 'Day 4',
                title: 'Vishansar to Gadsar',
                description: 'Cross Gadsar Pass, the highest point, and reach Gadsar Lake.'
            },
            {
                day: 'Day 5',
                title: 'Gadsar to Satsar',
                description: 'Trek to Satsar, a collection of seven small lakes.'
            },
            {
                day: 'Day 6',
                title: 'Satsar to Gangabal',
                description: 'Trek to the twin lakes of Gangabal and Nundkol.'
            },
            {
                day: 'Day 7',
                title: 'Gangabal to Naranag',
                description: 'Descend to Naranag and drive to Srinagar.'
            },
            {
                day: 'Day 8',
                title: 'Buffer Day',
                description: 'Buffer day for bad weather.'
            }
        ],

        inclusions: ['Accommodation', 'Meals', 'Permits', 'Guide'],
        exclusions: ['Transport', 'Personal Gear'],
        fitnessRequirements: ['Good fitness required'],
        trekType: ['Lake', 'Scenic'],
        groupType: ['Nature Lovers', 'Photographers'],
        fitness: 'Medium-High',
        accessibility: 'Moderate'
    },
    {
        id: 19,
        slug: 'gulabi-kantha',
        name: 'Gulabi Kantha Trek',
        heroTitle: 'THE HIDDEN HIMALAYAN RIDGE',
        heroSubtitle: 'A lesser-known ridge trek in the Garhwal Himalayas offering vast meadows, dramatic mountain views, and peaceful forest trails—perfect for trekkers seeking solitude.',

        region: 'Garhwal Himalaya',
        difficulty: 'Easy – Moderate',
        duration: '4 Days',
        durationDays: 4,
        altitude: '12,000 ft',
        bestSeason: 'Spring / Summer / Autumn',
        seasons: ['Spring', 'Summer', 'Autumn'],

        totalDistance: 'Approx. 18–20 km',
        baseCamp: 'Khanyasni Village, Uttarkashi, Uttarakhand',

        image: '/gulabi-kantha-trek.jpeg',
        routeMap: '/gulabi-kantha-route.png',
        gallery: [
            '/gulabi-kantha-trek.jpeg',
            '/gulabi-kantha.jpeg',
            '/gulabikantahab.jpeg'
        ],

        description: 'A lesser-known ridge trek in the Garhwal Himalayas offering vast meadows, dramatic mountain views, and peaceful forest trails.',
        longDescription: `The Gulabi Kantha Trek is a hidden gem in the Garhwal Himalayas, offering sweeping ridge walks, dense forest trails, and breathtaking panoramic views. Unlike more crowded Himalayan treks, Gulabi Kantha provides a quieter and more intimate mountain experience.

This trek is ideal for beginners and nature lovers who want to experience alpine meadows without extreme altitude challenges. The summit ridge opens up to stunning views of Bandarpoonch, Srikanth Peak, Black Peak, and the Gangotri range.

The highlight of the trek is walking along the wide, open ridge, where 360° views surround you on all sides.

**The Gulabi Kantha Experience**

*Forest Trails & Meadows*
The trail begins from charming Himalayan villages and enters dense forests of oak and rhododendron. As you ascend, the forest gradually opens into vast alpine meadows offering uninterrupted Himalayan views.

*The Ridge Walk*
The summit ridge of Gulabi Kantha is wide and scenic, making it one of the most rewarding ridge walks in the region. The final stretch is gradual and non-technical, suitable for trekkers with basic fitness.

*Seasonal Beauty*
• Spring: Rhododendron blooms and vibrant greenery
• Summer: Lush meadows and pleasant weather
• Autumn: Clear skies with sharp mountain views
• Winter: Light snow transforms the landscape (season dependent)`,

        highlights: [
            'Peaceful and less-crowded Himalayan trail',
            'Beautiful ridge walk with panoramic views',
            'Dense oak and rhododendron forests',
            'Beginner-friendly summit experience',
            'Ideal for short Himalayan getaway',
            'Perfect mix of forest, meadow, and ridge terrain'
        ],

        price: '₹7,499',
        priceDetails: {
            gst: '5% GST',
            insurance: '₹180 Trek Insurance',
            transport: '₹2,200 Transport (Basecamp – Optional)'
        },

        itinerary: [
            {
                day: 'Day 1',
                title: 'Arrival',
                description: 'Arrival at Khanyasni Village. Trek briefing and preparation.'
            },
            {
                day: 'Day 2',
                title: 'Trek to Campsite',
                description: 'Gradual ascent through forest to alpine meadows.'
            },
            {
                day: 'Day 3',
                title: 'Summit Day',
                description: 'Early morning summit push. Enjoy panoramic ridge views. Return to campsite.'
            },
            {
                day: 'Day 4',
                title: 'Descend & Departure',
                description: 'Descend to base village and departure.'
            }
        ],

        inclusions: [
            'Accommodation in tents',
            'Meals during the trek',
            'Certified trek leader',
            'First aid & safety equipment',
            'Forest permits'
        ],
        exclusions: [
            'Transport to base village (optional add-on)',
            'Personal expenses',
            'Backpack offloading (optional)',
            'Trek insurance'
        ],

        faqs: [
            {
                question: 'Is Gulabi Kantha suitable for beginners?',
                answer: 'Yes. The trek is moderate but manageable with basic fitness preparation.'
            },
            {
                question: 'What is the best time to do this trek?',
                answer: 'Spring (April–June) and Autumn (September–November) offer the best weather and views.'
            },
            {
                question: 'What kind of accommodation is provided?',
                answer: 'Trekkers stay in alpine tents during the trek.'
            }
        ],

        trekType: ['Ridge', 'Meadows', 'Forest'],
        groupType: ['Beginners', 'Nature Lovers', 'Short Duration'],
        fitness: 'Easy to Moderate',
        accessibility: 'Road accessible base'
    }
];
