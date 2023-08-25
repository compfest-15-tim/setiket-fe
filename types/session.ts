export interface Session {
  id: string;
  email: string;
  confirmed_at: string;
  user_metadata: {
    full_name: string;
    email: string;
    role: "CUSTOMER" | "ADMIN" | "EVENT_ORGANIZER";
  };
}
