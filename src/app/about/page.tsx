import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <main>
            {/* Hero Section */}
            <div className={styles.hero} style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.8)), url('/back.webp')" }}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>ABOUT NATURE NAVIGATION</h1>
                    <p className={styles.heroSubtitle}>Himalayan Expertise & Leadership.</p>
                </div>
            </div>

            <div className={styles.container}>
                {/* Mission Section */}
                <section className={styles.section}>
                    <div className={styles.missionGrid}>
                        <div>
                            <h2 className={styles.heading}>OUR MISSION</h2>
                            <p className={styles.text}>
                                Nature Navigation is a Himalayan trekking company founded in early 2026 by a professional high-altitude mountaineer with deep roots in the mountains of Uttarakhand. Built on years of hands-on experience in extreme terrain, the company was created with a clear purpose: to offer safe, authentic, and professionally guided trekking experiences in the Himalayas.
                            </p>
                            <p className={styles.text}>
                                From high-altitude expeditions to scenic alpine trails, Nature Navigation represents discipline, leadership, and respect for the mountains. We do not follow trends—we follow terrain, weather, and mountain ethics.
                            </p>
                            <p className={styles.text}>
                                Our mission is to promote safe, sustainable, and responsible trekking in the Himalayas. We aim to create meaningful mountain experiences while maintaining the highest standards of safety, environmental responsibility, and professionalism. Every trek is designed to balance adventure with preparedness—ensuring that trekkers not only reach destinations, but return with confidence, knowledge, and respect for nature.
                            </p>
                        </div>
                        <div className={styles.missionImages}>
                            <div style={{ position: 'relative', height: '200px' }}>
                                <Image src="/about.png" alt="Trekking" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                            </div>
                            <div style={{ position: 'relative', height: '200px' }}>
                                <Image src="/aboutc.png" alt="Mountains" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                            </div>
                            <div style={{ position: 'relative', height: '200px' }}>
                                <Image src="/aboutd.png" alt="Nature" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className={styles.section}>
                    <div className={styles.expertiseGrid}>
                        <div className={styles.expertiseImages}>
                            <div style={{ position: 'relative', height: '400px' }}>
                                <Image src="/harkidun.webp" alt="Expert Guide" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                            </div>
                            <div style={{ position: 'relative', height: '400px', marginTop: '2rem' }}>
                                <Image src="/back.webp" alt="Expedition" fill style={{ objectFit: 'cover', borderRadius: '4px' }} />
                            </div>
                        </div>
                        <div>
                            <h2 className={styles.heading}>OUR EXPERTISE</h2>
                            <p className={styles.text}>
                                Nature Navigation is led by a Professional High Altitude Mountaineer with successful ascents and expeditions including:
                            </p>
                            <ul className={styles.expertiseList}>
                                <li>Dhoomdhar Kandi</li>
                                <li>Gomukh–Tapovan</li>
                                <li>Dayara Bugyal</li>
                                <li>Bhrigu Lake</li>
                                <li>Multiple high-altitude Himalayan routes</li>
                            </ul>
                            <p className={styles.text}>
                                With years of field experience in snow, ice, glacier travel, and alpine conditions, our leadership understands the real demands of the Himalayas. Our treks are guided by trained professionals using proper technical equipment, established safety protocols, and route-specific planning.
                            </p>
                            <p className={styles.text}>
                                This experience allows us to manage terrain, weather challenges, altitude risks, and group safety with precision.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className={styles.founderSection}>
                    <div className={styles.founderGrid}>
                        <div className={styles.founderImageWrapper}>
                            <Image
                                src="/rahul.png"
                                alt="Rahul Rawat - Founder"
                                fill
                                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                            />
                        </div>
                        <div>
                            <h2 className={styles.heading}>LEADERSHIP</h2>
                            <h3 className={styles.founderName}>RAHUL RAWAT</h3>
                            <p className={styles.founderRole}>FOUNDER & LEAD GUIDE</p>

                            <p className={styles.text}>
                                Rahul Rawat is the founder of Nature Navigation and a Professional High Altitude Mountaineer with extensive experience in the Indian Himalayas. Born and based in Uttarkashi, Uttarakhand, Rahul has spent years navigating challenging mountain terrain, developing a deep understanding of high-altitude conditions, glacier travel, weather patterns, and expedition safety.
                            </p>
                            <p className={styles.text}>
                                He has successfully completed multiple Himalayan expeditions and treks, including Dhoomdhar Kandi, Gomukh–Tapovan, Dayara Bugyal, and Bhrigu Lake, gaining hands-on experience in snow, ice, and alpine environments. His journey in the mountains is built on discipline, preparation, and respect for nature—values that now form the foundation of Nature Navigation.
                            </p>
                            <p className={styles.text}>
                                Founded in early 2026, Nature Navigation reflects Rahul Rawat’s vision to bring professionalism, safety, and authenticity to trekking. His leadership focuses on responsible exploration, proper training, and ethical mountain practices, ensuring that every trek is guided with experience rather than shortcuts.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Why Choose Us */}
            <div className={styles.whyChooseSection}>
                <div className={styles.container}>
                    <h2 className={styles.heading} style={{ textAlign: 'center' }}>WHY CHOOSE US</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Safety First</h3>
                            <p className={styles.featureText}>
                                Safety is our foundation. From route planning and weather assessment to equipment checks and emergency readiness, every trek follows strict safety standards.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Premium Equipment</h3>
                            <p className={styles.featureText}>
                                We use reliable, professional-grade trekking and camping equipment suitable for high-altitude Himalayan conditions, ensuring comfort and durability on every journey.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Local Knowledge</h3>
                            <p className={styles.featureText}>
                                Based in Uttarkashi (Gangotri Road, Bhatwari, Uttarakhand), our deep local knowledge allows us to navigate routes responsibly, respect local culture, and choose the safest paths through the mountains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy */}
            <section className={styles.philosophySection}>
                <h2 className={styles.heading}>OUR PHILOSOPHY</h2>
                <p className={styles.text}>
                    We believe the Himalayas demand humility, preparation, and respect. Nature Navigation exists for trekkers who value real mountains, real leadership, and real experiences—not shortcuts or mass tourism.
                </p>
            </section>
        </main >
    );
}
