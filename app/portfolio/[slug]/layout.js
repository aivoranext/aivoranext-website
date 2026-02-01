import { portfolioPageContent } from "@/lib/content";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioPageContent.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Aivoranext Case Study`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function CaseStudyLayout({ children }) {
  return children;
}
