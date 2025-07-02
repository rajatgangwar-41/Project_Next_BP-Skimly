import type { Metadata } from "next"
import { Source_Sans_3 as FontSans } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Skimly: AI-Powered Content Summarization",
  description:
    "Save time and enhance your productivity with Skimly's AI-driven content summarization. Quickly digest articles, documents, and more with our advanced AI-Powered summarization technology.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
