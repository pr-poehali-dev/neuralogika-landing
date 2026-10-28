import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "НейроЛогика — ИИ для бизнеса",
      description:
        "Внедрение технологий искусственного интеллекта и автоматизация бизнес-процессов для малого и среднего бизнеса",
      path: "/",
    }),
  component: Index,
});
