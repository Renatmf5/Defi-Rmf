import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ThemeProvider } from "./_components/theme-provider";
import NavBar from "./_components/NavBar";


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: "Defi RMF",
  description: "Defi criada para aprendizado ",
  keywords: ["Defi", "next", "blockchain", "arbitrum", "FullStack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable,
        fontHeading.variable
      )}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <NavBar />
          <main className='h-screen p-16'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
