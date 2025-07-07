import { isDev } from "./helpers"

export const pricingPlans = [
  {
    name: "Basic",
    price: 499,
    description: "Perfect for occasional use",
    items: [
      "5 PDF summaries per month",
      "Standard processing speed",
      "Email support",
    ],
    id: "basic",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_bJebJ3bbU4rMa6NanP4gg00"
      : "https://buy.stripe.com/test_bJebJ3bbU4rMa6NanP4gg00",
    priceId: isDev
      ? "price_1RhsLwQsFwFzpuNyJ6jhGcT7"
      : "price_1RhsLwQsFwFzpuNyJ6jhGcT7",
  },
  {
    name: "Pro",
    price: 999,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority processing",
      "24/7 priority support",
      "Markdown Export",
    ],
    id: "pro",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_5kQaEZ7ZI0bwceV7bD4gg01"
      : "https://buy.stripe.com/test_5kQaEZ7ZI0bwceV7bD4gg01",
    priceId: isDev
      ? "price_1RhsNvQsFwFzpuNyCxsf1Q6Y"
      : "price_1RhsNvQsFwFzpuNyCxsf1Q6Y",
  },
]

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring" as "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.5,
    },
  },
}
