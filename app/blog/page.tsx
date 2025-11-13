import React from 'react';
import Navbar from '../components/Navbar';
import { PageFooter } from "../components/Footer";
import Image from 'next/image'; // Import the Image component from Next.js
import Head from 'next/head';
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
    title: "Συμβουλές για τα ταξίδια σας | Travel tips",
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
            <Head>
                <title>Συμβουλές για ένα οικονομικό ταξίδι</title>
                <link
                    rel="canonical"
                    href="https://travelmpomps.gr/blog"
                    key="canonical"
                />
                <meta
                    name="description"
                    content="Travel tips"
                    key="desc"
                />
            </Head>
            {/* Navbar */}
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-18 pt-24 pb-2 mt-12">
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
