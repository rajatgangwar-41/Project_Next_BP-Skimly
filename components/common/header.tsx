import { FileText } from "lucide-react"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import NavLink from "./nav-links"
import PlanBadge from "./plan-badge"

export default function Header() {
  return (
    <nav className="container flex justify-between items-center px-2 lg:px-8 py-4 mx-auto">
      <div className="flex">
        <NavLink
          href="/"
          className="flex items-center justify-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText className="w-5 lg:w-8 h-5 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-bold lg:text-xl text-gray-900">Skimly</span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center lg:items-center gap-4 lg:gap-12">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:f1ex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload A PDF</NavLink>
            <PlanBadge />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </SignedIn>
        <SignedOut>
          <NavLink href="/sign-in">Sign In</NavLink>
        </SignedOut>
      </div>
    </nav>
  )
}
