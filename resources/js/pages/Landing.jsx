import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Link, Head } from '@inertiajs/react';

export default function Landing() {
    const appName = import.meta.env.VITE_APP_NAME || 'Printwell, Inc.';

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {/* SEO & Title Handling with Inertia Head */}
            <Head title={`Landing - ${appName}`} />

            <nav className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tight">Printwell, Inc.</div>
                <div className="space-x-4 flex items-center">
                    <Link
                        href={route('login')}
                        className="text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                        Log in
                    </Link>

                    {/* Using a Button component as a Link for the Register action */}
                    <Button asChild variant="outline">
                        <Link href={route('register')}>
                            Register
                        </Link>
                    </Button>
                </div>
            </nav>

            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl font-extrabold mb-4 tracking-tighter sm:text-6xl">
                    Welcome to Printwell, Inc.
                </h1>
                <p className="max-w-[600px] text-lg text-gray-600 dark:text-gray-400 mb-8">
                    A simple prototype landing page built with Tailwind and Inertia.
                </p>

                <div className="flex gap-4">
                    <Button size="lg" asChild>
                        <Link href={route('register')}>
                            Get Started
                        </Link>
                    </Button>
                    <Button variant="ghost" size="lg">
                        Learn More
                    </Button>
                </div>
            </main>

            <footer className="w-full text-center py-6 text-sm text-gray-500 border-t border-gray-100 dark:border-gray-800">
                © {new Date().getFullYear()} Printwell, Inc. All rights reserved.
            </footer>
        </div>
    );
}
