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
  title: "Alejandro Jaimes",
  
  description: "Software Engineer Intern at SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
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
    "Unity"


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
            "Software Engineer Intern at SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
        siteName: "Alejandro Jaimes",
        images: [
            { url: "https://alejaimes.dev/propcrop.jpg", width: 800, height: 600, alt: "Alejandro Jaimes - Software Engineer" },
            { url: "https://alejaimes.dev/headshot.jpg", width: 800, height: 600, alt: "Alejandro Jaimes Headshot" },
            { url: "https://alejaimes.dev/alejaimes.jpg", width: 800, height: 600, alt: "Alejandro Jaimes" },
            { url: "https://alejaimes.dev/alejandroJaimesTK.jpg", width: 800, height: 600, alt: "Alejandro Jaimes alongside TK" },
            { url: "https://alejaimes.dev/srealShow.webp", width: 800, height: 600, alt: "Alejandro Jaimes at SREAL" },
            { url: "https://alejaimes.dev/shellhacks1.webp", width: 800, height: 600, alt: "Alejandro Jaimes winning at Shell Hacks 2025" },
            { url: "https://alejaimes.dev/WINPROJL.jpg", width: 800, height: 600, alt: "Alejandro Jaimes winning at Project Launch 2026" },
            { url: "https://alejaimes.dev/winBloomKnights.webp", width: 800, height: 600, alt: "Alejandro Jaimes winning at Bloom Knights" },
            { url: "https://alejaimes.dev/bloomknightsale.webp", width: 800, height: 600, alt: "Alejandro Jaimes at Bloom Knights" },
            { url: "https://alejaimes.dev/workshopImage.jpg", width: 800, height: 600, alt: "Alejandro Jaimes presenting Math Workshop" },
            { url: "https://alejaimes.dev/greghouse.webp", width: 800, height: 600, alt: "greghouse project by Alejandro Jaimes" },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Alejandro Jaimes",
        description: "Software Engineer Intern at SREAL in the Institute for Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
        images: ["https://alejaimes.dev/propcrop.jpg"],
    },
  
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
