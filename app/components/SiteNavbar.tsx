"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const destinationLinks = [
    { name: "Βερολίνο", slug: "berlin" },
    { name: "Βαρκελώνη", slug: "barcelona" },
    { name: "Βιέννη", slug: "vienna" },
    { name: "Βουκουρέστι", slug: "bucharest" },
    { name: "Λονδίνο", slug: "london" },
    { name: "Βουδαπέστη", slug: "budapest" },
    { name: "Κρακοβία", slug: "krakow" },
    { name: "Βαρσοβία", slug: "warsaw" },
    { name: "Ρώμη", slug: "rome" },
    { name: "Μπολόνια", slug: "bologna" },
    { name: "Μαδρίτη", slug: "madrid" },
    { name: "Μιλάνο", slug: "milan" },
    { name: "Βρότσλαβ", slug: "wroclaw" },
];

type SiteNavbarProps = {
    /** "solid" = always a white, opaque bar (use on pages with no hero image).
     *  "transparent" = starts see-through over a hero photo, then solidifies once scrolled past it. */
    variant?: "solid" | "transparent";
};

function SiteNavbar({ variant = "solid" }: SiteNavbarProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(variant === "solid");

    useEffect(() => {
        if (variant !== "transparent") return;
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [variant]);

    const isSolid = variant === "solid" || scrolled;

    const handleNavItemClick = () => {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
    };

    const linkColor = isSolid ? "text-[#2E2E2F]" : "text-white";
    const iconClass = isSolid
        ? "text-[#2E2E2F] w-10 h-10 flex items-center justify-center"
        : "text-white bg-[rgba(190,188,188,0.3)] rounded-full w-10 h-10 flex items-center justify-center";

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid ? "bg-white shadow-sm py-3" : "bg-transparent py-4 md:py-6"
                }`}
        >
            <div className="relative flex items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
                {/* Mobile menu button */}
                <button
                    className={`md:hidden ${linkColor}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Άνοιγμα μενού"
                >
                    {isMobileMenuOpen ? (
                        <HiOutlineX className="w-7 h-7" />
                    ) : (
                        <HiOutlineMenu className="w-7 h-7" />
                    )}
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        onClick={handleNavItemClick}
                        className={`px-3 py-2 font-bold ${linkColor} hover:text-[#F76808] transition-colors duration-200`}
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
                            className={`px-3 py-2 font-bold ${linkColor} hover:text-[#F76808] transition-colors duration-200`}
                        >
                            Destinations
                        </Link>
                        {isDropdownOpen && (
                            <div className="absolute left-0 top-full bg-white rounded-lg shadow-lg font-bold min-w-[160px] py-1">
                                {destinationLinks.map((d) => (
                                    <Link
                                        key={d.slug}
                                        href={`/destinations/${d.slug}`}
                                        onClick={handleNavItemClick}
                                        className="block px-4 py-2 text-[#2E2E2F] hover:bg-gray-100"
                                    >
                                        {d.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <Link
                        href="/about"
                        onClick={handleNavItemClick}
                        className={`px-3 py-2 font-bold ${linkColor} hover:text-[#F76808] transition-colors duration-200`}
                    >
                        About
                    </Link>
                    <Link
                        href="/blog"
                        onClick={handleNavItemClick}
                        className={`px-3 py-2 font-bold ${linkColor} hover:text-[#F76808] transition-colors duration-200`}
                    >
                        Blog
                    </Link>
                </div>

                {/* Logo - always centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Link href="/" onClick={handleNavItemClick}>
                        <Image
                            src="/travelmpomps.png"
                            alt="Travel Tips Logo"
                            width={60}
                            height={60}
                            className="h-auto w-12 sm:w-14 md:w-16"
                        />
                    </Link>
                </div>

                {/* Social icons (desktop) */}
                <div className="hidden md:flex items-center space-x-2">
                    <a
                        href="https://tiktok.com/@travelmpomps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClass} hover:text-black transition-colors duration-200`}
                    >
                        <FaTiktok className="w-5 h-5" />
                    </a>
                    <a
                        href="https://instagram.com/travelmpomps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClass} hover:text-[#E101A7] transition-colors duration-200`}
                    >
                        <FaInstagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://youtube.com/@Travelmpomps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${iconClass} hover:text-[#FE0032] transition-colors duration-200`}
                    >
                        <FaYoutube className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Mobile menu overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center">
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
                                href="/blog"
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

export default SiteNavbar;
