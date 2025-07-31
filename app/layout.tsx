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
  title: "Travelmpomps | Travel Tips",
  description: "Travel Tips",
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
    description: "Δωρεάν Ολοκληρωμένος ταξιδιωτικός οδηγός για προορισμούς στην Ευρώπη και την Ελλάδα. Ανακαλύψτε τα καλύτερα μέρη για να επισκεφθείτε, να φάτε και να διασκεδάσετε.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          <meta name="google-site-verification" content="7q-1UM39MUG1YlU0DE2iqnmXXicGjIZtUAtc3C7Nokk" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
