import React from 'react';
import Navbar from '../components/Navbar';
import { PageFooter } from "../components/Footer";
import Image from 'next/image'; // Import the Image component from Next.js
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Travel Blog: Οδηγοί Πόλης & Συμβουλές | Travelmpomps",
    description: "Διαβάστε τους αναλυτικούς ταξιδιωτικούς οδηγούς μας για Ευρώπη και κόσμο. Tips για οικονομικά ταξίδια, φαγητό και αξιοθέατα.",
    alternates: {
        canonical: 'https://travelmpomps.gr/blog',
    },
    openGraph: {
        title: 'Travel Blog & Tips | Travelmpomps',
        description: 'Ολοι οι ταξιδιωτικοί οδηγοί συγκεντρωμένοι.',
        url: 'https://travelmpomps.gr/blog',
        siteName: 'Travelmpomps',
        locale: 'el_GR',
        type: 'website',
    },
}


function Blog() {

    const Posts = [
        {
            name: "Χριστούγεννα στο Λονδίνο",
            slug: "christougenna-londino",
            image: "/blog_images/london_christmas.jpg",
            title: "Χριστούγεννα στο Λονδίνο",
            description: "Τα καλύτερα μέρη για να επισκεφθείτε και να απολαύσετε τη μαγεία των Χριστουγέννων στο Λονδίνο."
        }
    ];


    return (
        <div className="min-h-screen bg-[#F8F6FE]">
            {/* Navbar */}
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-18 pt-24 pb-2 mt-12">
                <div className="text-center mb-12">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#2E2E2F] mb-4">
                        Travel Blog & Συμβουλές για οικονομικά ταξίδια
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Συμβουλές, οδηγοί πόλης και εμπειρίες από τα ταξίδια μας στην Ευρώπη.
                    </p>
                </div>
                <div className="border-t border-gray-300 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {Posts.map((blog) => (
                            <article key={blog.slug} className="relative">
                                <Link
                                    href={`/blog/${blog.slug}`}
                                    className="block overflow-hidden rounded-xl shadow-lg group"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] md:aspect-[3/4]">
                                        <Image
                                            src={blog.image}
                                            alt={blog.title}
                                            fill
                                            sizes="(min-width: 768px) 33vw, 100vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                                    </div>

                                    {/* Text over image */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                                        <h2 className="text-white text-xl font-bold leading-tight">
                                            {blog.title}
                                        </h2>
                                        <p className="mt-2 text-white/90">
                                            {blog.description}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </main>





            {/* Footer Section */}
            <div className="pt-70">
                <PageFooter />
            </div>
        </div>
    );
}

export default Blog;
