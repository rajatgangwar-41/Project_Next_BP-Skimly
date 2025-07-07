import { Pizza } from "lucide-react"
import { SummaryViewer } from "../summaries/summary-viewer"
import { MotionDiv, MotionH3 } from "../common/motion-wrapper"

const DEMO_SUMMARY = `
# Quick Overview: Rajat's Resume
. 💖 Unlocking the future of web development with cutting-edge frontend expertise and a passion for scalable solutions.
. 🚀 A proven track record of building robust, user-centric applications and optimizing performance.

# Document Details
. 📄 Developer Portfolio Snapshot
. 👥 For: Tech Recruiters & Hiring Managers seeking top-tier talent.

# Key Highlights
. 💡 Master of Modern Frontend Stacks: React, Next.js, Redux, TailwindCSS, and more.
. 🚀 Impactful Project Builder: Developed diverse applications from food delivery to video calls with real-world impact.
. 🏆 Elite Problem Solver: 6-Star Codechef competitive programmer with 500+ DSA problems conquered.

# Why It Matters
. 📈 Rajat's blend of advanced technical skills, practical project experience, and exceptional problem-solving abilities translates directly into high-performing, user-friendly, and secure applications. He doesn't just build; he optimizes, secures, and innovates, driving tangible improvements in user engagement and system efficiency.

# Main Points
. 🎯 Full-Stack Ready Frontend Expertise: Proficient in modern frontend frameworks with strong core CS fundamentals.
. 💪 Performance & Security Focused: Consistently optimizes load times, enhances user experience, and implements robust security measures.
. 🔥 Proven Impact & Leadership: Delivered measurable results in internships and mentored aspiring developers.

# Pro Tips
. ⭐ Master Your Stack: Dive deep into frameworks like React/Next.js and state management tools like Redux or Zustand.
. 💎 Build Diverse Projects: Showcase different facets of development, from e-commerce to real-time communication.
. 💥 Conquer DSA: Strong Data Structures & Algorithms skills are key for competitive programming and complex problem-solving.

# Key Terms to Know
. 📚 Redux Toolkit: A powerful library for predictable state management in JavaScript applications, simplifying state logic.
. 🔍 Zod: A TypeScript-first schema declaration and validation library, essential for robust and error-free form handling.

# Bottom Line
. 💡 Rajat is a highly skilled, impact-driven software engineer ready to innovate and excel in any challenging frontend role.
`

export default function DemoSection() {
  return (
    <section className="relative" id="watch-demo">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%,85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%.74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-br from-emerald-500 via-teal-500 to-cyan-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="flex flex-col items-center  text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-gray-100/80 backdrop-blur-xs border border-gray-500/20 mb-4">
            <Pizza className="w-6 h-6 text-rose-500" />
          </div>
          <div className="text-center mb-16">
            <MotionH3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-bold text-3xl max-2xl mx-auto px-4 sm:px-6"
            >
              Watch how Skimly transforms the{" "}
              <span className="bg-linear-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
                Resume PDF file
              </span>{" "}
              into an easy-to-read summary!
            </MotionH3>
          </div>
        </div>

        <div className="flex justify-center items-center px-2 sm:px-4 lg:px-6">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <SummaryViewer summary={DEMO_SUMMARY} />
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
