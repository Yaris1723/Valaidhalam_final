import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
   verification: {
    google: "GqCTbxgNZU2Wlmq1mKdMeovCSmNOJOXZ3k0Bywjkp2M",
  },
  title: "Valaidhalam | Affordable Web Design & Digital Services in Tamil Nadu",
  description:
    "Premium tech services studio in Tamil Nadu crafting scalable web applications, full-stack solutions, and digital growth strategies. Get expert web development, UI/UX design, and digital marketing services.",
  keywords: ["web development", "full-stack", "React", "Next.js", "Tamil Nadu", "tech services", "web design", "digital marketing", "UI/UX design"],
  authors: [{ name: "Valaidhalam" }],
  creator: "Valaidhalam",
  publisher: "Valaidhalam",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://valaidhalam.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://valaidhalam.com",
    siteName: "Valaidhalam",
    title: "Valaidhalam | Affordable Web Design & Digital Services in Tamil Nadu",
    description: "Premium tech services studio in Tamil Nadu crafting scalable web applications, full-stack solutions, and digital growth strategies.",
    images: [
      {
        url: "/uploads/VALAITHALAM_Logo-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Valaidhalam - Digital Experiences That Scale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valaidhalam | Affordable Web Design & Digital Services in Tamil Nadu",
    description: "Premium tech services studio crafting scalable web applications and digital growth strategies.",
    images: ["/uploads/VALAITHALAM_Logo-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://valaidhalam.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Valaidhalam",
              "url": "https://valaidhalam.com",
              "logo": "https://valaidhalam.com/uploads/VALAITHALAM_Logo-removebg-preview.png",
              "description": "Premium tech services studio crafting scalable web applications and digital growth strategies.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "valaidhalam03@gmail.com",
                "telephone": "+919487739484",
                "contactType": "customer service"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61587538686893",
                "https://www.instagram.com/valaidhalam.in/"
              ]
            })
          }}
        />
      </head>
      <body className={`${bricolage.variable} ${jakarta.variable} font-jakarta antialiased`}>
        {children}
      </body>
    </html>
  );
}
