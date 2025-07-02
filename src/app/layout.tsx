import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Veridity - Privacy-First Digital Identity for Nepal",
  description: "Zero-knowledge proof based identity verification system empowering Nepali citizens with privacy-preserving digital identity solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <footer className="border-t bg-background">
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Veridity</h3>
                  <p className="text-sm text-muted-foreground">
                    Privacy-first digital identity verification for Nepal using zero-knowledge proofs.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Product</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/demo" className="hover:text-foreground">Demo</a></li>
                    <li><a href="/app" className="hover:text-foreground">User App</a></li>
                    <li><a href="/admin" className="hover:text-foreground">Admin Dashboard</a></li>
                    <li><a href="/api-docs" className="hover:text-foreground">API Docs</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/pitch" className="hover:text-foreground">Investor Pitch</a></li>
                    <li><a href="/onboarding" className="hover:text-foreground">Get Started</a></li>
                    <li><a href="/about" className="hover:text-foreground">About</a></li>
                    <li><a href="/contact" className="hover:text-foreground">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><a href="/privacy" className="hover:text-foreground">Privacy Policy</a></li>
                    <li><a href="/terms" className="hover:text-foreground">Terms of Service</a></li>
                    <li><a href="/security" className="hover:text-foreground">Security</a></li>
                  </ul>
                </div>
              </div>
              <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-muted-foreground">
                  © 2025 <a href="https://fintex.au" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline">Fintex Australia</a>. All rights reserved.
                </p>
                <p className="text-sm text-muted-foreground">
                  Made with privacy and inclusion in mind.
                </p>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
