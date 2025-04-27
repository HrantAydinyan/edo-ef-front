import { fetchBlogs } from "@/actions";
import { EventsBlogs } from "@/components";
import { EVENTS } from "@/constants/events";

export default async function Blogs() {
  const blogs = await fetchBlogs();

  return (
    <div className="events_container">
      <EventsBlogs
        title={EVENTS.blog_title}
        description={EVENTS.description}
        data={blogs}
        path="blog"
      />
    </div>
  );
}
