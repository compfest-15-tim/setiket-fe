import { type Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Notification from "./notification";

export const metadata: Metadata = {
  title: "Notification | SeTiket",
};

const NotificationPage = () => {
  // Protected route: Get session and check if user is authenticated

  // Get all notifications from db
  const notifications = [
    {
      id: "1",
      title: "New Event Organizer Signed Up",
      description:
        "Please review their profile and approve them if they are eligible to be an event organizer.",
      isSeen: false,
      date: new Date(2023, 7, 16, 5, 33),
      redirectLink: "/verify-eo",
    },
    {
      id: "2",
      title: "New Event Proposed",
      description:
        "Please review the event and approve it if it is eligible to be published.",
      isSeen: false,
      date: new Date(2023, 7, 15, 10, 33),
      redirectLink: "/verify-event",
    },
    {
      id: "3",
      title: "Event Sold",
      description: "Please check your dashboard.",
      isSeen: true,
      date: new Date(2023, 7, 7, 10, 33),
      redirectLink: "/dashboard",
    },
    {
      id: "4",
      title: "New Event Available",
      description: "Please check it out.",
      isSeen: true,
      date: new Date(2022, 5, 7, 10, 33),
      redirectLink: "/event/1",
    },
  ];

  //

  return (
    <main className="flex flex-auto justify-center bg-muted p-5 lg:p-10">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Notification</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-2">
            {notifications.map((notification) => {
              return <Notification key={notification.id} {...notification} />;
            })}
          </ul>
        </CardContent>
      </Card>
    </main>
  );
};

export default NotificationPage;
