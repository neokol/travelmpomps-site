export interface Destination {
    name: string;
    slug: string;
    image: string;
    alt: string;
    country: string;
    teaser: string;
    budget: boolean;
    featured?: boolean;
}

// Single source of truth for every published destination guide.
// Used by the /destinations listing, the homepage "where we've been"
// country cards, and each guide's "more from this country" strip —
// add a new guide here once and it shows up everywhere automatically.
export const destinations: Destination[] = [
    {
        name: "Ρώμη",
        slug: "rome",
        image: "/images/rome-hero.png",
        alt: "Ταξιδιωτικός οδηγός για τη Ρώμη και το Κολοσσαίο",
        country: "Ιταλία",
        teaser: "Κολοσσαίο, Βατικανό & Fontana di Trevi",
        budget: false,
        featured: true,
    },
    {
        name: "Βερολίνο",
        slug: "berlin",
        image: "/destinations/berlin1.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βερολίνο και τον Καθεδρικό Ναό",
        country: "Γερμανία",
        teaser: "Ιστορία, τέχνη & νυχτερινή ζωή",
        budget: false,
    },
    {
        name: "Βαρκελώνη",
        slug: "barcelona",
        image: "/destinations/barcelona.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βαρκελώνη και τη Sagrada Familia",
        country: "Ισπανία",
        teaser: "Sagrada Familia & παραλίες",
        budget: false,
    },
    {
        name: "Βιέννη",
        slug: "vienna",
        image: "/destinations/vienna.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βιέννη και τα Αυτοκρατορικά Ανάκτορα",
        country: "Αυστρία",
        teaser: "Αυτοκρατορικά ανάκτορα & καφέ κουλτούρα",
        budget: false,
    },
    {
        name: "Βουκουρέστι",
        slug: "bucharest",
        image: "/bucharest/bucharest-hero.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βουκουρέστι και την Παλιά Πόλη",
        country: "Ρουμανία",
        teaser: "Οικονομικό city break στην Παλιά Πόλη",
        budget: true,
    },
    {
        name: "Λονδίνο",
        slug: "london",
        image: "/destinations/london.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Λονδίνο, Big Ben και αξιοθέατα",
        country: "Ηνωμένο Βασίλειο",
        teaser: "Big Ben & θρυλικά αξιοθέατα",
        budget: false,
    },
    {
        name: "Βουδαπέστη",
        slug: "budapest",
        image: "/destinations/budapest.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βουδαπέστη και το Κοινοβούλιο",
        country: "Ουγγαρία",
        teaser: "Λουτρά & φθηνή διαμονή",
        budget: true,
    },
    {
        name: "Κρακοβία",
        slug: "krakow",
        image: "/destinations/krakow.jpg",
        alt: "Ταξιδιωτικός οδηγός για την Κρακοβία και την κεντρική πλατεία",
        country: "Πολωνία",
        teaser: "Μεσαιωνική πλατεία με μικρό budget",
        budget: true,
    },
    {
        name: "Βαρσοβία",
        slug: "warsaw",
        image: "/destinations/warsaw.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Βαρσοβία και την Παλιά Πόλη",
        country: "Πολωνία",
        teaser: "Ανακατασκευασμένη Παλιά Πόλη",
        budget: true,
    },
    {
        name: "Μαδρίτη",
        slug: "madrid",
        image: "/destinations/madrid.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Μαδρίτη",
        country: "Ισπανία",
        teaser: "Παλιά πόλη, φαγητό & νυχτερινή ζωή",
        budget: false,
    },
    {
        name: "Μπολόνια",
        slug: "bologna",
        image: "/destinations/bologna.jpg",
        alt: "Ταξιδιωτικός οδηγός για τη Μπολόνια",
        country: "Ιταλία",
        teaser: "Φαγητό και παλιά πόλη",
        budget: true,
    },
    {
        name: "Μιλάνο",
        slug: "milan",
        image: "/destinations/milan.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Μιλάνο",
        country: "Ιταλία",
        teaser: "Φαγητό και παλιά πόλη",
        budget: false,
    },
    {
        name: "Βρότσλαβ",
        slug: "wroclaw",
        image: "/destinations/wroclaw.jpg",
        alt: "Ταξιδιωτικός οδηγός για το Βρότσλαβ, τη Βενετία της Πολωνίας",
        country: "Πολωνία",
        teaser: "Η \"Βενετία\" της Πολωνίας & κυνήγι νάνων",
        budget: true,
    },
];
