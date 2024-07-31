'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import Image from 'next/image';
import logo from '@/public/images/logo.png'

const Navbar = () => {
    const [isHomePopoutVisible, setIsHomePopoutVisible] = useState(false);
    const [isAboutPopoutVisible, setIsAboutPopoutVisible] = useState(false);
    const [isCareersPopoutVisible, setIsCareersPopoutVisible] = useState(false);
    const [isContactPopoutVisible, setIsContactPopoutVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(1);
    const [isMobileInteracted, setIsMobileInteracted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isMobileInteracted) {
                const currentScrollY = window.scrollY;
                setOpacity(Math.max(0.4, 1 - currentScrollY / 500));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobileInteracted]);

    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => {
        if (!isMobileInteracted) {
            const currentScrollY = window.scrollY;
            setOpacity(Math.max(0.4, 1 - currentScrollY / 500));
        }
    };

    const handleMobileMenuOpen = () => {
        setIsOpen(!isOpen);
        setIsMobileInteracted(true);
    };

    const handleMobileMenuClose = () => {
        setIsOpen(false);
        setIsMobileInteracted(false);
    };

    const navItems = [
        {
            name: 'Home',
            href: '/',
            setPopout: setIsHomePopoutVisible,
            popout: isHomePopoutVisible,
            popoutText: `
        <div class="flex">
          <div class="max-w-max m-4">
            <p class='p-2'><a href="/">Welcome to our homepage!</a></p>
          </div>
          <div class="h-full border-r border-black mx-4"></div>
          <div class="max-w-max">
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/#AboutUs">About Us</a></p>
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/#Epigenics-Study">What is Epigenetics Study?</a></p>
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/#Precision-Study">What is Precision Medicine Study?</a></p>
          </div>
        </div>
      `
        },
        {
            name: 'About Us',
            href: '/about',
            setPopout: setIsAboutPopoutVisible,
            popout: isAboutPopoutVisible,
            popoutText: `
        <div class="flex">
          <div class="max-w-max m-4">
            <p class='p-2'><a href="/about">Learn more about us.</a></p>
          </div>
          <div class="h-full border-r border-black mx-4"></div>
          <div class="max-w-max">
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/about/#vision-mission">Vision Mission</a></p>
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/about/#AboutOurCompany">About Out Company</a></p>
            <p class="hover:bg-blue-100 rounded-lg max-w-max p-2"><a href="/about/#Directors-Info">Directors Info?</a></p>
          </div>
        </div>
      `,
        },
        {
            name: 'Careers',
            href: '/careers',
            setPopout: setIsCareersPopoutVisible,
            popout: isCareersPopoutVisible,
            popoutText: `
        <div class="flex">
          <div class="max-w-max m-4">
            <p class='p-2'><a href="/careers">Join our team.</a></p>
          </div>
          <div class="h-full border-r border-black mx-4"></div>
          <div class="max-w-max m-4">
            <p class="hover:bg-blue-100 rounded-lg p-2"><a href="/careers/#CareerForm">Apply/ Career Form</a></p>
          </div>
        </div>
      `,
        },
        {
            name: 'Contact',
            href: '/contact',
            setPopout: setIsContactPopoutVisible,
            popout: isContactPopoutVisible,
            popoutText: `
        <div class="flex">
          <div class="max-w-max m-4">
            <p class='p-2'><a href="/careers">Get in touch with us.</a></p>
          </div>
          <div class="h-full border-r border-black mx-4"></div>
          <div class="max-w-max m-4">
            <p class="hover:bg-blue-100 rounded-lg p-2"><a href="/contact/#ContactForm">Contact Us</a></p>
          </div>
        </div>
      `,
        },
    ];

    return (
        <>
            <nav
                className="fixed top-0 left-0 right-0 bg-white shadow max-h-[12vh] transition-opacity duration-300 z-50"
                style={{ opacity }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Image
                                    src={logo}
                                    width={200}
                                    height={200}
                                    alt='logo'
                                />
                            </div>
                            <div className="hidden md:block relative">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navItems.map((item) => (
                                        <div
                                            key={item.name}
                                            className="relative group"
                                            onMouseEnter={() => item.setPopout(true)}
                                            onMouseLeave={() => item.setPopout(false)}
                                        >
                                            <Link
                                                href={item.href}
                                                className="text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                            >
                                                {item.name}
                                            </Link>
                                            <span className="absolute -bottom-1 text-black left-0 w-0 h-0.5 bg-blue-500 transition-all duration-700 group-hover:w-full"></span>
                                            {item.popout && (
                                                <div className="absolute top-full mt-2 w-max text-black bg-white border border-gray-200 transition-all duration-700 rounded shadow-lg p-2">
                                                    <p
                                                        className="text-gray-700"
                                                        dangerouslySetInnerHTML={{ __html: item.popoutText }}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={handleMobileMenuOpen}
                                title="Menu"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:text-white transition-colors duration-200"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white shadow">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                    onClick={handleMobileMenuClose}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
            <div className="h-[12vh]"></div>
        </>
    );
};

export default Navbar;
