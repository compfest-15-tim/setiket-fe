import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EventList from "../event list/event-list";
import { Input } from "@/components/ui/input";

const EventListPage = () => {
  // Protected route: Get session and check if user is authenticated

  // Get all event from db
  const events = [
    {
      id: "1",
      date: new Date(2023, 10, 3),
      location: "Jakarta Pusat",
      title: "2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA",
      capacity: 1000,
      description:
        "FEARNOT Indonesia! LE SSERAFIM, girl group asal Korea Selatan akan datang ke Jakarta untuk pertama kalinya lewat tur yang bertajuk 2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA. Siapkan dirimu buat bernyanyi dan berdansa dengan Kim Chaewon, Sakura, Huh Yunjin, Kazuha, dan Hong Eunchae pada 3 Oktober 2023 di JIEXPO Hall B3, Jakarta! Beli tiketnya secara eksklusif di tiket.com sekarang!",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-high/events/2023/08/02/2367ee3d-5bd4-4667-a3a7-b21ba21d0c6f-1690966599553-f25ad11735cb32b08d0f47c8e56508c4.jpg",
      price: 1927500,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/le-sserafim-tour-flame-rises-in-jakarta",
    },
    {
      id: "2",
      date: new Date(2023, 9, 24),
      location: "Badung",
      title: "Resistance Bali 2023",
      capacity: 1000,
      description:
        "Resistance is coming back to Bali! Join us on 24-25 September 2023 at Locca Sea House for tasty beats and magical sunsets.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/29/1a04256b-e06a-4faf-a8c3-74aec8d54553-1688016175597-70613f3671b7b1df4167165ccc91c7c6.png",
      price: 625000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/resistance-bali-2023",
    },
    {
      id: "3",
      date: new Date(2023, 9, 20),
      location: "Badung",
      title: "Ultra Beach Bali 2023",
      capacity: 1000,
      description:
        "Ultra Beach Bali is back for its 5th edition! Get ready to soak up in the sun, dance to the beats and create unforgettable memories. Join us on tropical adventure like no other at Locca Sea House, Jimbaran, Bali on September 20-21, 2023.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/28/b6d538aa-b2bc-417f-b6cc-77d32401327c-1687971210808-f6c0f013cfbfaa7dd275854b28aac7b9.png",
      price: 1125000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/ultrabeachbali2023",
    },
    {
      id: "4",
      date: new Date(2023, 10, 3),
      location: "Jakarta Pusat",
      title: "2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA",
      capacity: 1000,
      description:
        "FEARNOT Indonesia! LE SSERAFIM, girl group asal Korea Selatan akan datang ke Jakarta untuk pertama kalinya lewat tur yang bertajuk 2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA. Siapkan dirimu buat bernyanyi dan berdansa dengan Kim Chaewon, Sakura, Huh Yunjin, Kazuha, dan Hong Eunchae pada 3 Oktober 2023 di JIEXPO Hall B3, Jakarta! Beli tiketnya secara eksklusif di tiket.com sekarang!",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-high/events/2023/08/02/2367ee3d-5bd4-4667-a3a7-b21ba21d0c6f-1690966599553-f25ad11735cb32b08d0f47c8e56508c4.jpg",
      price: 1927500,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/le-sserafim-tour-flame-rises-in-jakarta",
    },
    {
      id: "5",
      date: new Date(2023, 9, 24),
      location: "Badung",
      title: "Resistance Bali 2023",
      capacity: 1000,
      description:
        "Resistance is coming back to Bali! Join us on 24-25 September 2023 at Locca Sea House for tasty beats and magical sunsets.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/29/1a04256b-e06a-4faf-a8c3-74aec8d54553-1688016175597-70613f3671b7b1df4167165ccc91c7c6.png",
      price: 625000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/resistance-bali-2023",
    },
    {
      id: "6",
      date: new Date(2023, 9, 20),
      location: "Badung",
      title: "Ultra Beach Bali 2023",
      capacity: 1000,
      description:
        "Ultra Beach Bali is back for its 5th edition! Get ready to soak up in the sun, dance to the beats and create unforgettable memories. Join us on tropical adventure like no other at Locca Sea House, Jimbaran, Bali on September 20-21, 2023.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/28/b6d538aa-b2bc-417f-b6cc-77d32401327c-1687971210808-f6c0f013cfbfaa7dd275854b28aac7b9.png",
      price: 1125000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/ultrabeachbali2023",
    },
    {
      id: "7",
      date: new Date(2023, 10, 3),
      location: "Jakarta Pusat",
      title: "2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA",
      capacity: 1000,
      description:
        "FEARNOT Indonesia! LE SSERAFIM, girl group asal Korea Selatan akan datang ke Jakarta untuk pertama kalinya lewat tur yang bertajuk 2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA. Siapkan dirimu buat bernyanyi dan berdansa dengan Kim Chaewon, Sakura, Huh Yunjin, Kazuha, dan Hong Eunchae pada 3 Oktober 2023 di JIEXPO Hall B3, Jakarta! Beli tiketnya secara eksklusif di tiket.com sekarang!",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-high/events/2023/08/02/2367ee3d-5bd4-4667-a3a7-b21ba21d0c6f-1690966599553-f25ad11735cb32b08d0f47c8e56508c4.jpg",
      price: 1927500,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/le-sserafim-tour-flame-rises-in-jakarta",
    },
    {
      id: "8",
      date: new Date(2023, 9, 24),
      location: "Badung",
      title: "Resistance Bali 2023",
      capacity: 1000,
      description:
        "Resistance is coming back to Bali! Join us on 24-25 September 2023 at Locca Sea House for tasty beats and magical sunsets.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/29/1a04256b-e06a-4faf-a8c3-74aec8d54553-1688016175597-70613f3671b7b1df4167165ccc91c7c6.png",
      price: 625000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/resistance-bali-2023",
    },
    {
      id: "9",
      date: new Date(2023, 9, 20),
      location: "Badung",
      title: "Ultra Beach Bali 2023",
      capacity: 1000,
      description:
        "Ultra Beach Bali is back for its 5th edition! Get ready to soak up in the sun, dance to the beats and create unforgettable memories. Join us on tropical adventure like no other at Locca Sea House, Jimbaran, Bali on September 20-21, 2023.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/28/b6d538aa-b2bc-417f-b6cc-77d32401327c-1687971210808-f6c0f013cfbfaa7dd275854b28aac7b9.png",
      price: 1125000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/ultrabeachbali2023",
    },
    {
      id: "10",
      date: new Date(2023, 10, 3),
      location: "Jakarta Pusat",
      title: "2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA",
      capacity: 1000,
      description:
        "FEARNOT Indonesia! LE SSERAFIM, girl group asal Korea Selatan akan datang ke Jakarta untuk pertama kalinya lewat tur yang bertajuk 2023 LE SSERAFIM TOUR 'FLAME RISES' IN JAKARTA. Siapkan dirimu buat bernyanyi dan berdansa dengan Kim Chaewon, Sakura, Huh Yunjin, Kazuha, dan Hong Eunchae pada 3 Oktober 2023 di JIEXPO Hall B3, Jakarta! Beli tiketnya secara eksklusif di tiket.com sekarang!",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-high/events/2023/08/02/2367ee3d-5bd4-4667-a3a7-b21ba21d0c6f-1690966599553-f25ad11735cb32b08d0f47c8e56508c4.jpg",
      price: 1927500,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/le-sserafim-tour-flame-rises-in-jakarta",
    },
    {
      id: "11",
      date: new Date(2023, 9, 24),
      location: "Badung",
      title: "Resistance Bali 2023",
      capacity: 1000,
      description:
        "Resistance is coming back to Bali! Join us on 24-25 September 2023 at Locca Sea House for tasty beats and magical sunsets.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/29/1a04256b-e06a-4faf-a8c3-74aec8d54553-1688016175597-70613f3671b7b1df4167165ccc91c7c6.png",
      price: 625000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/resistance-bali-2023",
    },
    {
      id: "12",
      date: new Date(2023, 9, 20),
      location: "Badung",
      title: "Ultra Beach Bali 2023",
      capacity: 1000,
      description:
        "Ultra Beach Bali is back for its 5th edition! Get ready to soak up in the sun, dance to the beats and create unforgettable memories. Join us on tropical adventure like no other at Locca Sea House, Jimbaran, Bali on September 20-21, 2023.",
      image:
        "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/events/2023/06/28/b6d538aa-b2bc-417f-b6cc-77d32401327c-1687971210808-f6c0f013cfbfaa7dd275854b28aac7b9.png",
      price: 1125000,
      isVerified: false,
      createdAt: new Date(2023, 7, 16),
      eventOrganizerId: "",
      transactions: "",
      redirectLink: "/ultrabeachbali2023",
    },
  ];

  return (
    <main className="flex flex-auto justify-center bg-muted p-5 lg:p-10">
      <Card className="w-full">
        <CardHeader>
          <Input type="search" placeholder="Cari aktivitas" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {events.map((event) => {
              return <EventList key={event.id} {...event} />;
            })}
          </div>
        </CardContent>
      </Card>
    </main>
  );
  
};

export default EventListPage;
