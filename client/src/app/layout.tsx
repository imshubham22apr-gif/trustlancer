import type { Metadata } from "next";
import "./globals.css";
import WalletProvider from "@/components/wallet/WalletProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import FloatingShapes from "@/components/ui/FloatingShapes";
import Toast from "@/components/ui/Toast";

export const metadata: Metadata = {
  title: "TrustLancer - Aashish Pandit Edition",
  description: "Trustless escrow, instant payments, and 0.5% fees. The future of work is on Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans transition-colors duration-300 relative overflow-x-hidden bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <WalletProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <Toast />
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
