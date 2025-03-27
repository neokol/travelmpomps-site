'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 z-10 flex items-center w-full h-18 px-5 bg-white shadow-sm">
            {/* Logo */}
            <Link href="/" onClick={() => setIsDropdownOpen(false)}>
                <div className="mr-6">
                    <Image
                        src="/travelmpomps.png"
                        alt="Travel Tips Logo"
                        width={60}
                        height={60}
                    />
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4 sm:space-x-2 sm:hidden md:flex">
                {/* Destinations Dropdown */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <Link
                        href="/destinations"
                        className="px-3 py-2 text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200 font-bold"
                    >
                        Προορισμοί
                    </Link>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute bg-white shadow-lg rounded-lg mt-1 min-w-[160px] font-bold">
                            <Link
                                href="/destinations/berlin"
                                className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                            >
                                Βερολίνο
                            </Link>
                            {/* Add more cities or links here as needed */}
                        </div>
                    )}
                </div>

                <Link
                    href="/about"
                    className="px-3 py-2 text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200 font-bold"
                    onClick={() => setIsDropdownOpen(false)}
                >
                    Σχετικά με εμάς
                </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-auto sm:space-x-2 sm:hidden md:flex">
                <a
                    href="https://tiktok.com/@travelmpomps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                >
                    <FaTiktok className="w-6 h-6" />
                </a>
                <a
                    href="https://instagram.com/travelmpomps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                >
                    <FaInstagram className="w-6 h-6" />
                </a>
                <a
                    href="https://youtube.com/@Travelmpomps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                >
                    <FaYoutube className="w-6 h-6" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
