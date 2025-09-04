"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close both mobile menu and dropdown on link clicks
    const handleNavItemClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-sm z-50">
            {/* Outer container with grid layout */}
            <div className="grid grid-cols-3 items-center px-4 h-full">
                {/* Left column (Desktop Nav or Hamburger) */}
                <div className="flex items-center space-x-4">
                    {/* Desktop Nav Links (hidden below md) */}
                    <div className="hidden md:flex space-x-4">
                        <Link
                            href="/"
                            onClick={handleNavItemClick}
                            className="px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                        >
                            Home
                        </Link>

                        {/* Destinations Dropdown (desktop) */}
                        <div
                            className="relative inline-flex items-center"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <Link
                                href="/destinations"
                                className="px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                            >
                                Destinations
                            </Link>
                            {isDropdownOpen && (
                                <div className="absolute left-0 top-full bg-white rounded-lg shadow-lg font-bold min-w-[160px]">
                                    <Link
                                        href="/destinations/berlin"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Βερολίνο
                                    </Link>
                                    <Link
                                        href="/destinations/barcelona"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Βαρκελώνη
                                    </Link>
                                    <Link
                                        href="/destinations/vienna"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Βιέννη
                                    </Link>
                                    <Link
                                        href="/destinations/bucharest"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Βουκουρέστι
                                    </Link>
                                    <Link
                                        href="/destinations/london"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Λονδίνο
                                    </Link>
                                    <Link
                                        href="/destinations/budapest"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Βουδαπέστη
                                    </Link>
                                    <Link
                                        href="/destinations/krakow"
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        Κρακοβία
                                    </Link>
                                    {/* Add more dropdown links as needed */}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/about"
                            onClick={handleNavItemClick}
                            className="px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/"
                            onClick={handleNavItemClick}
                            className="px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808] transition-colors duration-200"
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Hamburger / X Button (mobile only) */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <HiOutlineX className="w-7 h-7 text-[#2E2E2F]" />
                        ) : (
                            <HiOutlineMenu className="w-7 h-7 text-[#2E2E2F]" />
                        )}
                    </button>
                </div>

                {/* Middle column (Centered Logo) */}
                <div className="flex justify-center">
                    <Link href="/" onClick={handleNavItemClick}>
                        <Image
                            src="/travelmpomps.png"
                            alt="Travel Tips Logo"
                            width={60}
                            height={60}
                            className="h-auto w-14 sm:w-16 md:w-16"
                        />
                    </Link>
                </div>

                {/* Right column (Desktop Social Icons) */}
                <div className="flex justify-end items-center space-x-4">
                    <div className="hidden md:flex space-x-6">
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
                </div>
            </div>

            {/* MOBILE MENU OVERLAY (below md breakpoint) */}
            {isMobileMenuOpen && (

                <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-40 bg-white/80 flex items-center justify-center">
                    {/* Centered menu panel */}
                    <div className="w-3/4 max-w-sm p-6">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                onClick={handleNavItemClick}
                                className="block px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808]"
                            >
                                Home
                            </Link>
                            <Link
                                href="/destinations"
                                onClick={handleNavItemClick}
                                className="block px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808]"
                            >
                                Destinations
                            </Link>
                            <Link
                                href="/about"
                                onClick={handleNavItemClick}
                                className="block px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808]"
                            >
                                About
                            </Link>
                            <Link
                                href="/"
                                onClick={handleNavItemClick}
                                className="block px-3 py-2 font-bold text-[#2E2E2F] hover:text-[#F76808]"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
