'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import BookingModal from '@/components/BookingModal';

interface BookNowButtonProps {
    trekId: string;
    trekName: string;
    price: number;
}

export default function BookNowButton({ trekId, trekName, price }: BookNowButtonProps) {
    const { data: session } = useSession();
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleBookNow = () => {
        if (!session) {
            // Redirect to login if not authenticated
            router.push('/auth/signin?callbackUrl=/treks/' + trekId);
        } else {
            setIsModalOpen(true);
        }
    };

    // Extract numeric price from string like "₹11,450"
    const numericPrice = typeof price === 'string'
        ? parseInt(price.replace(/[₹,]/g, ''))
        : price;

    return (
        <>
            <button
                onClick={handleBookNow}
                style={{
                    width: '100%',
                    padding: '1.25rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                }}
            >
                Book Now
            </button>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                trekId={trekId}
                trekName={trekName}
                trekPrice={numericPrice}
            />
        </>
    );
}
