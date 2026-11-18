import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ganesh | Web Developer & Creative Builder",
  description: "Explore Ganesh's web development projects, skills, services and contact information. Based in Andhra Pradesh, India.",
  openGraph: {
    title: "Ganesh | Web Developer",
    description: "Building useful, engaging digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
