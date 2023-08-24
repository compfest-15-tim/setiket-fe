import { type Metadata } from "next";
import EventFilterAndList from "./event-filter-and-list";

export const metadata: Metadata = {
  title: "Events | SeTiket",
  description: "Events Page.",
};

const EventsPage = () => {
  return (
    <main className="flex flex-auto justify-center bg-muted p-5 sm:p-8">
      {/* Event filter and list client component */}
      <EventFilterAndList />
    </main>
  );
};

export default EventsPage;
