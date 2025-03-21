import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

function Destinations() {
    return (
        <div className="min-h-screen">
            <div><Navbar /></div>
            <div className="p-30">
                <Link href="/destinations/berlin">
                    <Image className="rounded-lg shadow-xl"
                        src="/Berlin_post.png"
                        width={300}
                        height={300}
                        alt="Picture of the author"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Destinations