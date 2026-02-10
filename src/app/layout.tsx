import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "MovieRent - Tu cine en casa",
  description: "Renta las mejores películas online",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <nav className="flex justify-between items-center px-10 py-5 bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
          <Link href="/" className="text-2xl font-black tracking-tighter text-blue-500">
            Pelisplus.cO
          </Link>
          <div className="flex gap-8 font-medium">
            <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
            <Link href="/catalogo" className="hover:text-blue-400 transition">Películas</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}