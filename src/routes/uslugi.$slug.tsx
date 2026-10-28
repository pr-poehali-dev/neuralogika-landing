import { createFileRoute, redirect } from "@tanstack/react-router";
import ServiceDetail from "@/pages/ServiceDetail";
import { serviceDetailHead } from "@/lib/seo";
import { getServiceBySlug } from "@/data/services";

export const Route = createFileRoute("/uslugi/$slug")({
  beforeLoad: ({ params }) => {
    // Unknown service: redirect to the list, as the old <Navigate to="/uslugi" replace /> did.
    if (!getServiceBySlug(params.slug)) {
      throw redirect({ to: "/uslugi", replace: true });
    }
  },
  head: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    return service ? serviceDetailHead(service) : {};
  },
  component: ServiceDetail,
});
