import type { ServiceDetail } from '@/data/services';
import { services } from '@/data/services';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  jsonLd?: object | object[];
}

const DEFAULT_IMAGE = "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/bucket/2452d262-46c1-426c-981d-cba515e6ed2b.png";
const SITE_URL = "https://nl-ai.ru";

// Builds the head() object of a route (title, meta, canonical, JSON-LD) —
// the same tags the old <SeoHead> rendered through react-helmet-async.
export function seoHead({ title, description, path, image = DEFAULT_IMAGE, jsonLd }: SeoHeadProps) {
  const url = `${SITE_URL}${path}`;
  const jsonLdList = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:site_name", content: "НейроЛогика" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLdList.map((item) => ({
      type: "application/ld+json",
      children: JSON.stringify(item),
    })),
  };
}

export function servicesListHead() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": s.title,
      "url": `https://nl-ai.ru/uslugi/${s.slug}`,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nl-ai.ru/" },
      { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://nl-ai.ru/uslugi" },
    ],
  };

  return seoHead({
    title: "Услуги внедрения ИИ для бизнеса — НейроЛогика",
    description: "AI-чат-боты, анализ данных и прогнозирование, автоматизация документооборота, рекомендательные системы и кастомные ИИ-решения для бизнеса.",
    path: "/uslugi",
    jsonLd: [itemListJsonLd, breadcrumbJsonLd],
  });
}

export function serviceDetailHead(service: ServiceDetail) {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.seoDescription,
    "url": `https://nl-ai.ru/uslugi/${service.slug}`,
    "provider": {
      "@type": "ProfessionalService",
      "name": "НейроЛогика",
      "url": "https://nl-ai.ru/",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Россия",
    },
    "serviceType": service.title,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nl-ai.ru/" },
      { "@type": "ListItem", "position": 2, "name": "Услуги", "item": "https://nl-ai.ru/uslugi" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://nl-ai.ru/uslugi/${service.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  return seoHead({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/uslugi/${service.slug}`,
    jsonLd: [serviceJsonLd, breadcrumbJsonLd, faqJsonLd],
  });
}
