import { Pizza } from "lucide-react"
import { SummaryViewer } from "../summaries/summary-viewer"
import { MotionDiv, MotionH3 } from "../common/motion-wrapper"

const DEMO_SUMMARY = `
 # 🚀 Top Tech Talent Alert! 🚀
💖 Unlocking a world of problem-solving prowess and development excellence!
🚀 This candidate is a coding powerhouse ready to elevate your team.

# Document Details
• ✉️ Type: Job Application/Cover Letter
• 👥 For: Hiring Teams/Recruiters

# Key Highlights
• 💡 Solved 1000+ DSA problems with top competitive programming ranks.
• 🚀 Built responsive web pages and implemented security features at ITJOBXS.
• 💫 Boosted user engagement by 20% and reduced bugs by 40% at Edfora Infotech.

# Why It Matters
• 📈 This document showcases a highly skilled individual with a proven track record in both fundamental computer science (DSA) and practical, impactful software development. Their experience in diverse environments (startup and product-based) and commitment to clean, reusable code makes them a strong contender for any tech role, promising immediate value and innovation.

# Main Points
• 🎯 Strong foundation in Data Structures & Algorithms (DSA) with competitive programming achievements.
• 💪 Hands-on experience in full-stack development, including front-end, authentication, and security.
• 🔥 Demonstrated ability to improve performance, increase engagement, and reduce bugs in real-world applications.

# Pro Tips
• ⭐ Check out the candidate's GitHub for impressive code contributions and engagement trophies.
• 💎 Review the portfolio to see live projects and design capabilities.
• 💥 Schedule an interview to dive deeper into their problem-solving approach and product thinking.

# Key Terms to Know
• 📚 DSA (Data Structures and Algorithms): Fundamental concepts for efficient problem-solving in computer science.
• 🔍 Responsive Web Pages: Websites that adapt their layout and content to different screen sizes (desktops, tablets, mobiles).

# Bottom Line
• 💡 This candidate is a well-rounded, high-achieving developer ready to make a significant imp
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
