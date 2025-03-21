'use client'
import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import {  FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';


function Navbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <nav className="fixed top-0 left-0 z-10 flex items-center w-full h-18 px-5 bg-[#ffffff] shadow-sm">
            {/* Logo */}
            <Link href="/" onClick={closeDropdown}>
                <div className="mr-6">
                    <Image src="/travelmpomps.png" alt="Travel Tips Logo" width={60} height={60} />
                </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                {/* Destinations Dropdown */}
                <div className="relative">
                    <Link href="/destinations">
                    <button
                        onClick={toggleDropdown}
                        className="px-3 py-2 text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200 font-bold"
                    >
                        Προορισμοί
                    </button>
                    </Link>
                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div className="absolute bg-white shadow-lg rounded-lg mt-2 min-w-[160px] font-bold">
                            <Link
                                href="/destinations/berlin"
                                className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                onClick={closeDropdown}
                            >
                                Βερολίνο
                            </Link>
                        </div>
                    )}
                </div>

                <Link href="/about" className="px-3 py-2 text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200 font-bold" onClick={closeDropdown} >
                    Σχετικά με εμάς
                </Link>
            </div>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-auto">
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
    )
}

export default Navbar