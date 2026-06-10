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
  
  description: "Software Engineer Intern at SREAL in the Institute of Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
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
            "Software Engineer Intern at SREAL in the Institute of Simulation and Training, President of Graphics Programming Knights, Outreach Member of Knight Hacks, UCF Student of Computer Science, and a Venezuelan in Tech",
        siteName: "Alejandro Jaimes",
        images: [
            {
                url: "/propcrop.jpg",
                alt: "Alejandro Jaimes - Software Engineer",
            },
        ],
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
