import Link from 'next/link';
import { Mountain, Map, Compass } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-50 px-6">
            <div className="text-center max-w-lg">
                <div className="flex justify-center mb-6 text-green-600">
                    <Compass size={80} strokeWidth={1.5} />
                </div>

                <h1 className="text-6xl font-bold text-green-800 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Looks like you're lost in the woods.</h2>
                <p className="text-gray-600 mb-8">
                    The trail you are looking for doesn't exist. It might have been moved, or you may have taken a wrong turn.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all hover:-translate-y-1 shadow-lg"
                >
                    <Map size={20} />
                    Return to Base Camp
                </Link>
            </div>
        </div>
    );
}
