import DestinationsSection from "./components/DestinationSection";
import { PageFooter } from "./components/Footer";
import JourneySection from "./components/JourneySection";
import LandingHero from "./components/LandingHero";
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  // Ο κεντρικός τίτλος που βγαίνει στα αποτελέσματα
  title: "Travelmpomps | Οδηγοί Πόλης & Tips για Οικονομικά Ταξίδια",

  // Η κεντρική περιγραφή του site
  description: "Καλώς ήρθατε στο Travelmpomps. Ο προσωπικός σας οδηγός για ταξίδια στην Ευρώπη. Βρείτε αναλυτικούς οδηγούς για Ρώμη, Λονδίνο, Βιέννη και tips για budget holidays.",

  // Κεντρικό URL
  alternates: {
    canonical: 'https://travelmpomps.gr',
  },

  // Keywords (προαιρετικό αλλά καλό να υπάρχει στην αρχική)
  keywords: ["ταξίδια", "travel blog", "οικονομικά ταξίδια", "οδηγοί πόλης", "Ευρώπη", "travelmpomps"],

  // Open Graph (Πώς φαίνεται όταν το κάνεις share στο Facebook/Viber)
  openGraph: {
    title: 'Travelmpomps | Ταξιδεύουμε οικονομικά στην Ευρώπη',
    description: 'Οργάνωσε το επόμενο ταξίδι σου με τους οδηγούς του Travelmpomps.',
    url: 'https://travelmpomps.gr',
    siteName: 'Travelmpomps',
    locale: 'el_GR',
    type: 'website',
    // images: [
    //   {
    //     url: '/images/travelmpomps-og.jpg', // Καλό είναι να φτιάξεις μια γενική εικόνα για το site (1200x630px)
    //     width: 1200,
    //     height: 630,
    //     alt: 'Travelmpomps Logo & Travel Collage',
    //   },
    // ],
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Travelmpomps',
    url: 'https://travelmpomps.gr/',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://travelmpomps.gr/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
  return (
    <main>
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingHero />
      {/* Other sections of your page will go here */}
      <JourneySection />
      <section className="w-full">
        <div className="relative w-full h-[100px] md:h-[300px] bg-[#F7F7F7]"> {/* Adjust height as needed */}
          <Image
            src="/images/travel_quote.png" // Replace with your image path
            alt="Travel Quote"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
      <DestinationsSection />
      <div className="pt-6 md:pt-10">
        <PageFooter />
      </div>
    </main>
  );
}
