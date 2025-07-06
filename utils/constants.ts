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
      : "",
    priceId: isDev ? "price_1RhsLwQsFwFzpuNyJ6jhGcT7" : "",
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
      : "",
    priceId: isDev ? "price_1RhsNvQsFwFzpuNyCxsf1Q6Y" : "",
  },
]
