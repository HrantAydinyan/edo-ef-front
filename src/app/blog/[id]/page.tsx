import { fetchBlogById, fetchEventById } from "@/actions";
import { BlogDetails } from "@/components";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = await fetchBlogById(resolvedParams?.id);

  return (
    <div className="events_container">
      <div className="container">
        <div className="container_header">
          <h1 className="title">{event.title}</h1>
        </div>
      </div>
      <BlogDetails {...event} />
    </div>
  );
}
