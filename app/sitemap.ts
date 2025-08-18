import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://travelmpomps.gr';
    const destinations = [
        {
            slug: 'berlin',
            name: 'Berlin',
            lastUpdated: '2025-07-31'
        },
        {
            slug: 'barcelona',
            name: 'Barcelona',
            lastUpdated: '2025-07-31'
        },
        {
            slug: 'vienna',
            name: 'Vienna',
            lastUpdated: '2025-07-31'
        },
        {
            slug: 'bucharest',
            name: 'Bucharest',
            lastUpdated: '2025-07-31'
        }
    ];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/destinations`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        ...destinations.map(dest => ({
            url: `${baseUrl}/destinations/${dest.slug}`,
            lastModified: new Date(dest.lastUpdated),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        {
            url: `${baseUrl}/about`,
            lastModified: new Date('2025-07-31'),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        }
    ]
}