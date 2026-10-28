import { createFileRoute } from "@tanstack/react-router";
import ServicesList from "@/pages/ServicesList";
import { servicesListHead } from "@/lib/seo";

export const Route = createFileRoute("/uslugi/")({
  head: () => servicesListHead(),
  component: ServicesList,
});
