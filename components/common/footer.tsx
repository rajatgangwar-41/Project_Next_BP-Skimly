import Link from "next/link"
import {
  FileText,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const quickLinks = [
    { href: "/#try-skimly", label: "Try Skimly" },
    { href: "/#watch-demo", label: "Watch Demo" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
  ]

  const legalLinks = [
    { href: "/", label: "Privacy Policy" },
    { href: "/", label: "Terms of Service" },
    { href: "/", label: "Cookie Policy" },
  ]

  const socialLinks = [
    {
      href: "https://twitter.com/yourskimly",
      label: "Twitter",
      icon: Twitter,
    },
    {
      href: "https://www.linkedin.com/in/rajatgangwar41/",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/rajatgangwar-41",
      label: "GitHub",
      icon: Github,
    },
    {
      href: "mailto:rajat.gangwar41@gmail.com",
      label: "Email",
      icon: Mail,
    },
  ]

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-center md:text-left">
        {/* Column 1: Brand and Description */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="flex items-center justify-center md:justify-start gap-2 mb-4"
          >
            <FileText className="w-7 h-7 text-gray-900 hover:rotate-6 transform transition duration-200 ease-in-out" />
            <span className="font-extrabold text-2xl text-gray-900">
              Skimly
            </span>
          </Link>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
            Transform lengthy documents into clear, actionable insights with our
            AI-powered summarizer.
          </p>
          <div className="flex space-x-4 mt-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                {" "}
                {/* Unique key for mapping */}
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">Legal</h3>
          <ul className="space-y-3">
            {legalLinks.map((link) => (
              <li key={link.label}>
                {" "}
                {/* Unique key for mapping */}
                <Link
                  href={link.href}
                  scroll={false}
                  replace={true}
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter/Contact */}
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-gray-900 mb-4 text-lg">
            Stay Updated
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Join our newsletter to get the latest updates and tips on efficient
            reading.
          </p>
          <form className="w-full max-w-sm flex flex-col sm:max-md:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email"
              className="grow rounded-md border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              aria-label="Email for newsletter"
            />

            <Button
              size="lg"
              variant="link"
              className="w-full sm:w-auto bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:text-white text-white text-base transition-all duration-300"
            >
              <Link
                href="/#pricing"
                className="flex items-center justify-center"
              >
                Subscribe <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
              </Link>
            </Button>
          </form>
        </div>
      </div>

      {/* Copyright at the very bottom */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-100 text-center">
        <p className="text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Skimly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
