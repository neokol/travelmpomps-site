import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://travelmpomps.gr"),
  title: {
    default: "Travelmpomps | Ταξιδιωτικοί Οδηγοί & Tips", // Ο τίτλος της Αρχικής (αν δεν ορίσεις άλλον)
    template: "%s | Travelmpomps", // Αυτό μπαίνει αυτόματα στις υπόλοιπες σελίδες!
  },
  description: "Δωρεάν Ολοκληρωμένος ταξιδιωτικός οδηγός για προορισμούς στην Ευρώπη και την Ελλάδα.",
  keywords: [
    "travel",
    "tips",
    "advice",
    "destinations",
    "travelmpomps",
    "travel guide",
    "ταξιδιωτικός οδηγός",
    "ταξίδια",
    "τι να κάνω",
    "τι να δω",
    "προορισμοί",
    "ταξιδιωτικές συμβουλές",
    "ταξιδιωτικά tips",
    "ταξίδια στην Ευρώπη",
    "ταξίδια στην Ελλάδα"
  ],
  openGraph: {
    title: 'Travelmpomps',
    description: "Δωρεάν Ολοκληρωμένος ταξιδιωτικός οδηγός για προορισμούς στην Ευρώπη και την Ελλάδα.",
    url: 'https://travelmpomps.gr',
    siteName: 'Travelmpomps',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: "/travelmpomps.png",
        width: 1200,
        height: 630,
        alt: "Travelmpomps Travel Guide",
      }
    ]
  },
  icons: {
    icon: "/travelmpomps.png"
  },
  verification: {
    google: "7q-1UM39MUG1YlU0DE2iqnmXXicGjIZtUAtc3C7Nokk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
        {/* <head>
          <meta name="google-site-verification" content="7q-1UM39MUG1YlU0DE2iqnmXXicGjIZtUAtc3C7Nokk" />
      </head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
