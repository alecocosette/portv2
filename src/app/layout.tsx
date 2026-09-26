import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  title: "Alejandro Jaimes",
  
  description: "Software Engineer Intern at BNY & SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
  keywords:[
    "Alejandro Jaimes",
    "Software Engineer",
    "Software Developer",
    "Software Engineer Intern",
    "C++",
    "Knight Hacks",
    "UCF",
    "Graphics Programming Knights",
    "Venezuela",
    "Machine Learning",
    "Computer Science",
    "Game Development",
    "Computer Vision",
    "Computer Graphics",
    "GPU Programming",
    "Outreach",
    "Unity",
    "BNY",


  ],
  authors:[{
    name: "Alejandro Jaimes"
  }],
  creator: "Alejandro Jaimes",
  publisher: "Alejandro Jaimes",
  icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
  },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://alejaimes.dev",
        title: "Alejandro Jaimes",
        description:
            "Software Engineer Intern at BNY & SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
        siteName: "Alejandro Jaimes",
        images: [
             {url: "https://alejaimes.dev/thinkingale.jpg", width: 800, height: 600, alt: "Alejandro Jaimes" },
            
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Alejandro Jaimes",
        description: "Software Engineer Intern at BNY & SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
        images: ["https://alejaimes.dev/thinkingale.jpg"],
    },
  
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,

};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alejaimes.dev/#person",
      "name": "Alejandro Jaimes",
      "url": "https://alejaimes.dev",
      "image": "https://alejaimes.dev/thinkingale.jpg",
      "jobTitle": "Software Engineer Intern",
      "worksFor": {
        "@type": "Organization",
        "name": "Bank of New York"
        
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "University of Central Florida"
      },
      "nationality": "Venezuelan",
      "knowsAbout": [
        "Software Engineering",
        "C++",
        "Machine Learning",
        "Computer Vision",
        "Computer Graphics",
        "GPU Programming",
        "Game Development",
        "Unity"
      ],
      "sameAs": [
        "https://www.github.com/alecocosette",
        "https://www.linkedin.com/in/alejaimes/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://alejaimes.dev/#website",
      "url": "https://alejaimes.dev",
      "name": "Alejandro Jaimes",
      "publisher": { "@id": "https://alejaimes.dev/#person" }
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Home",
      "url": "https://alejaimes.dev/"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Projects",
      "url": "https://alejaimes.dev/projects"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Experience",
      "url": "https://alejaimes.dev/experience"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "About",
      "url": "https://alejaimes.dev/about"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
