import { useEffect } from 'react';

export default function Landing() {
    useEffect(() => {
        document.title = 'Landing - ' + (import.meta.env.VITE_APP_NAME || 'Printwell, Inc.');
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
            <nav className="w-full max-w-7xl mx-auto p-6 flex justify-between items-center">
                <div className="text-2xl font-bold">Printwell, Inc.</div>
                <div>
                    <a
                        href="/login"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white mx-2"
                    >
                        Log in
                    </a>
                    <a
                        href="/register"
                        className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white mx-2"
                    >
                        Register
                    </a>
                </div>
            </nav>
            <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-5xl font-extrabold mb-4">Welcome to Printwell, Inc.</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    A simple prototype landing page built with Tailwind and Inertia.
                </p>
                <a
                    href="/register"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Get Started
                </a>
            </main>
            <footer className="w-full text-center py-4 text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} Printwell, Inc. All rights reserved.
            </footer>
        </div>
    );
}
