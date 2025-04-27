import { fetchEvents } from "@/actions";
import { EventsBlogs } from "@/components";
import { EVENTS } from "@/constants/events";

export default async function Events() {
  const events = await fetchEvents();

  return (
    <div className="events_container">
      <EventsBlogs
        title={EVENTS.title}
        description={EVENTS.description}
        data={events}
        path="events"
      />
    </div>
  );
}
