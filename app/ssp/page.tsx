import Head from 'next/head';
import Link from 'next/link';

export default function AboutSSP() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-2">
            <Head>
                <title>About SSP - Arcana Technology PVT LTD</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="w-full py-4 bg-gray-800 text-white">
                <nav className="max-w-7xl mx-auto px-4 flex justify-between">
                    <div className="text-lg font-bold">Arcana Technology PVT LTD</div>
                    <div>
                        <Link href="/" className="px-4">Home
                        </Link>
                        <Link href="/about-bss" className="px-4">About BSS
                        </Link>
                        <Link href="/about-ssp" className="px-4">About SSP
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-4xl font-bold">About SSP</h1>
                <p className="mt-3 text-xl">
                    SSP is a smart pole based on the principle of IoT. The SSP can be used in many different fields like bank security, airport, agriculture fields, and some important buildings of the country.
                </p>
                <p className="mt-3 text-xl">
                    The SSP is mainly focusing on providing a cheaper, advanced, and high-security surveillance system for the locals.
                </p>
                <p className="mt-3 text-xl">
                    The SSP is controlled by an app called BSS Companion. Using this app, a user can control the SSP from any place and monitor it.
                </p>
                <p className="mt-3 text-xl">
                    The SSP is multifunctional, featuring a 360-degree camera for full coverage video capture. A solar panel provides electricity to all the sensors and cameras.
                </p>
                <p className="mt-3 text-xl">
                    <a href="https://www.tinkercad.com/things/jZUUDnZYl12-smart-fencing-system?sharecode=67UhYE7yyTF1jTYtpDwadg5um4ysAngX6VoKdB_r_aU" className="text-blue-500 underline">
                        View 3D Design of SSP
                    </a>
                </p>
            </main>

            <footer className="w-full py-4 bg-gray-800 text-white text-center">
                © 2024 Arcana Technology PVT LTD
            </footer>
        </div>
    );
}
