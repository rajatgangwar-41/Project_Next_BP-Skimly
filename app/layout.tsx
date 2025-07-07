import type { Metadata } from "next"
import { Source_Sans_3 as FontSans } from "next/font/google"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { ORIGIN_URL } from "@/utils/helpers"

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Skimly: AI-Powered Content Summarization",
  description:
    "Save time and enhance your productivity with Skimly's AI-driven content summarization. Quickly digest articles, documents, and more with our advanced AI-Powered summarization technology.",
  icons: {
    icon: "/icon.io",
  },
  openGraph: {
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontSans.variable} font-sans antialiased`}>
          <div className="relative flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </body>
      </html>
    </ClerkProvider>
  )
}
