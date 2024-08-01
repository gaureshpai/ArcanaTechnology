import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.png';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '@/styles/globals.css';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="BSS Logo"
                  className="max-h-[12vh] w-auto"
                  width={0}
                  height={0}
                  priority
                />
              </Link>
            </div>
            <p className="text-sm text-gray-300 text-center">&copy; {new Date().getFullYear()} Border Security System.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:bangerakrishna7@gmail.com" className="hover:text-blue-400 transition duration-200">bangerakrishna7@gmail.com</a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:9535891636" className="hover:text-blue-400 transition duration-200">9535891636</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Bantwal, Dakshina Kannada, Karnataka, India 574211</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
