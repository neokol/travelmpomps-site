import React from 'react';
import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { AiFillTikTok } from 'react-icons/ai';
import { SiYoutubeshorts } from 'react-icons/si';
import Image from 'next/image';


export const PageFooter = () => {
    return (
        <div className="w-full py-8 bg-[#F5F1ED] text-center">
            {/* Section with text and lines */}
            <div className="flex items-center justify-center mb-8">
                <hr className="w-20 border-t border-gray-300 mr-4" />
                <div className="text-xl font-semibold mx-4 text-[#22333B]">Follow us</div>
                <hr className="w-20 border-t border-gray-300 ml-4" />
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-8 mb-8">
                <a href="https://instagram.com/travelmpomps/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="text-4xl text-[#22333B] hover:text-[#E101A7] transition-all duration-300" />
                </a>
                <a href="https://tiktok.com/@travelmpomps" target="_blank" rel="noopener noreferrer">
                    <AiFillTikTok className="text-4xl text-[#22333B] hover:text-black transition-all duration-300" />
                </a>
                <a href="https://youtube.com/@Travelmpomps" target="_blank" rel="noopener noreferrer">
                    <SiYoutubeshorts className="text-4xl text-[#22333B] hover:text-[#FE0032] transition-all duration-300" />
                </a>
            </div>

            {/* Copyright Text */}
            <div className="text-sm text-gray-600 mb-4">
                <p>© {new Date().getFullYear()} travelmpomps.gr – All rights reserved – Republishing the content of this page is strictly forbidden</p>
                <p className="mt-2">
                    <Link href="/privacy-policy" className="hover:text-[#F76808] hover:underline transition-colors">
                        Πολιτική Απορρήτου
                    </Link>
                </p>
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-4">
                <Image
                    src="/travelmpomps.png"
                    alt="Travel Tips Logo"
                    width={60}
                    height={60}
                />
            </div>
        </div>
    );
};
