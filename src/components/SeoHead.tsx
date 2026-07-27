import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

const DEFAULT_IMAGE = "https://cdn.poehali.dev/projects/610fe54d-520f-45a9-a3a6-51d41a25ad48/bucket/2452d262-46c1-426c-981d-cba515e6ed2b.png";
const SITE_URL = "https://nl-ai.ru";

export default function SeoHead({ title, description, path, image = DEFAULT_IMAGE }: SeoHeadProps) {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:site_name" content="НейроЛогика" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
