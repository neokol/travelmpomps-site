"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function LandingNavbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavItemClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="absolute top-0 left-0 right-0 z-10 p-4 md:p-6">
            {/* Main container */}
            <div className="flex items-center justify-between h-full">
                {/* Mobile menu button (left side on mobile) */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <HiOutlineX className="w-7 h-7" />
                    ) : (
                        <HiOutlineMenu className="w-7 h-7" />
                    )}
                </button>

                {/* Navigation links - left side (hidden on mobile) */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        onClick={handleNavItemClick}
                        className="px-3 py-2 font-bold text-white hover:text-[#F76808] transition-colors duration-200"
                    >
                        Home
                    </Link>
                    <div
                            className="relative inline-flex items-center"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <Link
                                href="/destinations"
                                className="px-3 py-2 font-bold text-white hover:text-[#F76808] transition-colors duration-200"
                            >
                                Destinations
                            </Link>
                            {isDropdownOpen && (
                                <div className="absolute left-0 top-full bg-[rgba(190,188,188,0.3)] rounded-lg shadow-lg font-bold min-w-[160px]">
                                    <Link
                                        href="/destinations/berlin"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-white"
                                    >
                                        Βερολίνο
                                    </Link>
                                    <Link
                                        href="/destinations/barcelona"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-white 0"
                                    >
                                        Βαρκελώνη
                                    </Link>
                                    <Link
                                        href="/destinations/vienna"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-white "
                                    >
                                        Βιέννη
                                    </Link>
                                    <Link
                                        href="/destinations/bucharest"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-white"
                                    >
                                        Βουκουρέστι
                                    </Link>
                                    {/* Add more dropdown links as needed */}
                                </div>
                            )}
                        </div>
                    <Link
                        href="/about"
                        onClick={handleNavItemClick}
                        className="px-3 py-2 font-bold text-white hover:text-[#F76808] transition-colors duration-200"
                    >
                        About
                    </Link>
                    <Link
                        href="/"
                        onClick={handleNavItemClick}
                        className="px-3 py-2 font-bold text-white hover:text-[#F76808] transition-colors duration-200"
                    >
                        Blog
                    </Link>
                </div>

                {/* Navigation links - right side (hidden on mobile) */}
                {/* <div className="hidden md:flex items-center space-x-8">
                </div> */}

                {/* Logo - always centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" onClick={handleNavItemClick}>
                        <Image
                            src="/travelmpomps.png"
                            alt="Travel Tips Logo"
                            width={80}
                            height={80}
                            className="h-auto w-14 sm:w-16 md:w-20"
                        />
                    </Link>
                </div>

                {/* Social icons (right side on desktop, hidden on mobile) */}
                <div className="hidden md:flex items-center space-x-6 ">
                    <a
                        href="https://tiktok.com/@travelmpomps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-black transition-colors duration-200 bg-[rgba(190,188,188,0.3)] rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <FaTiktok className="w-6 h-6" />
                    </a>
                    <a
                        href="https://instagram.com/travelmpomps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#E101A7] transition-colors duration-200 bg-[rgba(190,188,188,0.3)] rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                        href="https://youtube.com/@Travelmpomps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FE0032] transition-colors duration-200 bg-[rgba(190,188,188,0.3)] rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <FaYoutube className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center pt-24">
                    <div className="w-full max-w-xs">
                        <div className="flex flex-col space-y-6 text-center">
                            <Link
                                href="/"
                                onClick={handleNavItemClick}
                                className="block px-4 py-3 font-bold text-white hover:text-[#F76808] text-xl"
                            >
                                Home
                            </Link>
                            <Link
                                href="/destinations"
                                onClick={handleNavItemClick}
                                className="block px-4 py-3 font-bold text-white hover:text-[#F76808] text-xl"
                            >
                                Destinations
                            </Link>
                            <Link
                                href="/about"
                                onClick={handleNavItemClick}
                                className="block px-4 py-3 font-bold text-white hover:text-[#F76808] text-xl"
                            >
                                About
                            </Link>
                            <Link
                                href="/"
                                onClick={handleNavItemClick}
                                className="block px-4 py-3 font-bold text-white hover:text-[#F76808] text-xl"
                            >
                                Blog
                            </Link>
                        </div>
                        <div className="flex justify-center space-x-8 pt-8">
                            <a
                                href="https://tiktok.com/@travelmpomps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#F76808] transition-colors duration-200"
                            >
                                <FaTiktok className="w-7 h-7" />
                            </a>
                            <a
                                href="https://instagram.com/travelmpomps/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#F76808] transition-colors duration-200"
                            >
                                <FaInstagram className="w-7 h-7" />
                            </a>
                            <a
                                href="https://youtube.com/@Travelmpomps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#F76808] transition-colors duration-200"
                            >
                                <FaYoutube className="w-7 h-7" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default LandingNavbar;