import { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCards from "@/components/event-cards";

export const metadata: Metadata = {
  title: "Home | SeTiket",
};

export default function Home() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <main className="flex flex-auto flex-col justify-center bg-gray-100 bg-[url('/homepage-2.jpg')] bg-cover p-5 text-center text-white md:p-12">
      <div>
        <h1 className="text-5xl font-bold lg:text-6xl">
          Welcome to{" "}
          <span className="font-extrabold text-primary">SeTiket!</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl">
          Welcome to <span className="font-bold text-primary">SeTiket</span>,
          where you can find & buy awesome events's ticket!
        </p>

        <Link
          href="/events"
          className="mt-10 block font-semibold text-primary hover:underline"
        >
          <Button className="inline-flex gap-1" size="lg">
            See all events here
            <MoveRight />
          </Button>
        </Link>
      </div>

      <div className="mt-32">
        <h2 className="text-4xl font-bold lg:text-5xl">
          Latest <span className="text-primary">Events</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <EventCards />
        </div>
      </div>
    </main>
  );
}
