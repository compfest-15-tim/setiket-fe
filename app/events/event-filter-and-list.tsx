"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrencyIDR } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  location: string;
  capacity: number;
  status: "verified" | "pending" | "rejected";
  category: string;
  price: number;
}

// Fetch all datas
const initialEvents: Event[] = [
  {
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-15",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
    location: "San Francisco, USA",
    capacity: 1200,
    status: "verified",
    category: "SEMINARS",
    price: 100000,
  },
  {
    id: "f9a32b8d-25d5-4a35-a3d1-28c53c9f5e81",
    title: "Music Festival 2023",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-25",
    images: ["/4.jpg", "/3.jpg", "/1.jpg", "/2.jpg"],
    location: "New York City, USA",
    capacity: 8000,
    status: "verified",
    category: "MUSIC",
    price: 7500,
  },
  {
    id: "cb7e0c73-49fe-4f32-8ce3-96e3cfe8ac2b",
    title: "Theater Play: Mystery in the Mansion",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-10-10",
    images: ["/2.jpg", "/4.jpg", "/1.jpg", "/3.jpg"],
    location: "London, UK",
    capacity: 300,
    status: "pending",
    category: "THEATER",
    price: 500,
  },
  {
    id: "6d7a92e0-2c9a-4e6a-b57c-1c1b576f9f4d",
    title: "Sports Championship",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-03",
    images: ["/3.jpg", "/2.jpg", "/1.jpg", "/4.jpg"],
    location: "Tokyo, Japan",
    capacity: 5000,
    status: "verified",
    category: "SPORTS",
    price: 2000,
  },
  {
    id: "aeb28d01-71f0-4db7-92a0-df3a5d85320e",
    title: "Art Exhibition: Modern Expressions",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-18",
    images: ["/1.jpg", "/3.jpg", "/2.jpg", "/4.jpg"],
    location: "Paris, France",
    capacity: 150,
    status: "verified",
    category: "EXHIBITIONS",
    price: 300,
  },
  {
    id: "9f7e8d6c-5b4a-32f1-1e0c-d9b8a7c6e5f4",
    title: "Seminar: Future of AI",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-30",
    images: ["/4.jpg", "/1.jpg", "/2.jpg", "/3.jpg"],
    location: "San Francisco, USA",
    capacity: 200,
    status: "rejected",
    category: "SEMINARS",
    price: 50,
  },
  {
    id: "0be5e826-9c4f-45c1-a832-8690c80a30b0",
    title: "Outdoor Festival: Adventure Awaits",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-12",
    images: ["/2.jpg", "/1.jpg", "/4.jpg", "/3.jpg"],
    location: "Denver, USA",
    capacity: 3000,
    status: "verified",
    category: "FESTIVALS",
    price: 150,
  },
  {
    id: "c1e47d7e-6420-495a-930c-aa62cf43452e",
    title: "Dance Performance: Rhythms of the World",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-20",
    images: ["/4.jpg", "/3.jpg", "/2.jpg", "/1.jpg"],
    location: "Rio de Janeiro, Brazil",
    capacity: 500,
    status: "verified",
    category: "MUSIC",
    price: 800,
  },
  {
    id: "e5d1f4e4-6cfb-42dd-97c5-96e22ddc7a3c",
    title: "Fitness Workshop: Healthy Habits",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-28",
    images: ["/3.jpg", "/1.jpg", "/4.jpg", "/2.jpg"],
    location: "Sydney, Australia",
    capacity: 100,
    status: "pending",
    category: "SEMINARS",
    price: 30,
  },
  {
    id: "2dab90b7-5960-49b6-8cc1-ff96a9f5d174",
    title: "Theater Play: Shakespearean Tales",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-10",
    images: ["/2.jpg", "/4.jpg", "/3.jpg", "/1.jpg"],
    location: "New York City, USA",
    capacity: 400,
    status: "verified",
    category: "THEATER",
    price: 600,
  },
  {
    id: "d617578e-485f-4f39-9ec5-14e8f6a12d2c",
    title: "Exhibition: Evolution of Art",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-22",
    images: ["/1.jpg", "/2.jpg", "/4.jpg", "/3.jpg"],
    location: "London, UK",
    capacity: 200,
    status: "rejected",
    category: "EXHIBITIONS",
    price: 100,
  },
  {
    id: "871f7d33-268a-4314-9e6d-b2c579c57e45",
    title: "Sports Match: Football Showdown",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-05",
    images: ["/3.jpg", "/1.jpg", "/4.jpg", "/2.jpg"],
    location: "Madrid, Spain",
    capacity: 60000,
    status: "verified",
    category: "SPORTS",
    price: 1500,
  },
  {
    id: "f8a5ed9c-25e0-4d8f-9a8c-c9b409581db0",
    title: "Music Concert: Melodies of the Sea",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-30",
    images: ["/2.jpg", "/1.jpg", "/4.jpg", "/3.jpg"],
    location: "Miami, USA",
    capacity: 2500,
    status: "verified",
    category: "MUSIC",
    price: 120,
  },
  {
    id: "f6d5b4c3-2a1f-4e0c-9b8e-7d6c5a4f3e2d",
    title: "Workshop: Digital Marketing Masterclass",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-25",
    images: ["/4.jpg", "/2.jpg", "/3.jpg", "/1.jpg"],
    location: "Singapore",
    capacity: 80,
    status: "pending",
    category: "SEMINARS",
    price: 80,
  },
  {
    id: "b9a8c7d6-e5f4-4d3b-2a1f-1e0c9b8a7c6",
    title: "Theater Performance: Classic Revival",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-12",
    images: ["/1.jpg", "/3.jpg", "/4.jpg", "/2.jpg"],
    location: "Paris, France",
    capacity: 400,
    status: "verified",
    category: "THEATER",
    price: 700,
  },
  {
    id: "3c4d5e6f-7a8b-9c0d-1e2f-3a4b5c6d7e8f",
    title: "Festival: Cultural Celebration",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-08-20",
    images: ["/3.jpg", "/1.jpg", "/2.jpg", "/4.jpg"],
    location: "Berlin, Germany",
    capacity: 3000,
    status: "verified",
    category: "FESTIVALS",
    price: 250,
  },
  {
    id: "b3e2d1c0-9a8b-7c6d-5e4f-3a2b1f0e",
    title: "Art Exhibition: Nature's Canvas",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-08",
    images: ["/2.jpg", "/4.jpg", "/3.jpg", "/1.jpg"],
    location: "Tokyo, Japan",
    capacity: 200,
    status: "rejected",
    category: "EXHIBITIONS",
    price: 150,
  },
];

const EventFilterAndList = () => {
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);
  const [inputValue, setInputValue] = useState("");
  const [categoryValue, setCategoryValue] = useState<string | undefined>();
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  const onClickSearch = () => {
    const filtered = initialEvents.filter((event) => {
      const isTitleMatched = event.title
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const isLocationMatched = event.location
        .toLowerCase()
        .includes(inputValue.toLowerCase());
      const isCategoryMatched = event.category
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      return isTitleMatched || isLocationMatched || isCategoryMatched;
    });

    setFilteredEvents(filtered);
  };

  const onClickReset = () => {
    setInputValue("");
    setCategoryValue(undefined);
    setDateRange(undefined);
    setFilteredEvents(initialEvents);
  };

  const onSelectCategory = (newValue: string) => {
    // Update category value
    setCategoryValue(newValue);

    // Filter events
    const filtered = initialEvents.filter((event) => {
      const isCategoryMatched = event.category
        .toLowerCase()
        .includes(newValue.toLowerCase());

      return isCategoryMatched;
    });

    setFilteredEvents(filtered);
  };

  const onSelectDateRange = (newValue: DateRange | undefined) => {
    // Update daterange value
    setDateRange(newValue);

    const filtered = initialEvents.filter((event) => {
      // If empty
      if (!newValue || !newValue.from || !newValue.to) return;

      // If not empty
      const eventTime = new Date(event.date).getTime();
      const fromTime = newValue.from.getTime();
      const toTime = newValue.to.getTime();
      const isDateInRange = eventTime >= fromTime && eventTime <= toTime;

      return isDateInRange;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="flex w-full max-w-7xl flex-col gap-6">
      {/* Filter Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Find event to attend!</CardTitle>
            <CardDescription>
              You can filter from title, date, location, and category
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-between gap-3 lg:flex-row">
              {/* Search Filter */}
              <div className="flex flex-row gap-3">
                <Input
                  className="w-full lg:w-[450px]"
                  placeholder="Find events / location..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />

                {/* Find Button */}
                <Button
                  size="icon"
                  onClick={onClickSearch}
                  className="flex-none"
                >
                  <Search className="h-5 w-5" />
                </Button>

                {/* Reset Button */}
                {(inputValue || categoryValue || dateRange) && (
                  <Button
                    size="icon"
                    variant="secondary"
                    onClick={onClickReset}
                    className="flex-none"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Date range picker */}
                <DatePickerWithRange
                  dateRange={dateRange}
                  onSelectDateRange={onSelectDateRange}
                />

                {/* Select Value */}
                <Select
                  key={categoryValue}
                  value={categoryValue}
                  onValueChange={onSelectCategory}
                >
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Category</SelectLabel>
                      <SelectItem value="music">Music</SelectItem>
                      <SelectItem value="theater">Theater</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                      <SelectItem value="seminars">Seminars</SelectItem>
                      <SelectItem value="exhibitions">Exhibitions</SelectItem>
                      <SelectItem value="festivals">Festivals</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* List Section */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredEvents.map((event) => {
          return (
            <Link href={`/events/${event.id}`} key={event.id}>
              <Card className="flex h-[375px] flex-col gap-2 overflow-hidden p-0">
                <CardHeader className="flex flex-col gap-2 p-0">
                  <Image
                    alt={event.title}
                    src={event.images[0]}
                    width={100}
                    height={100}
                    className="h-44 w-full object-cover object-center"
                  />
                  <CardTitle className="px-4">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-auto flex-col justify-between px-4 pb-4">
                  <div>
                    <p>{event.location}</p>
                    <p>{event.date}</p>
                    <p>{event.category}</p>
                  </div>
                  <p className="text-lg font-bold text-red-500">
                    {getCurrencyIDR(event.price)}
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default EventFilterAndList;
