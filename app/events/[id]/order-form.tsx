"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Event {
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

const OrderForm = ({
  event,
  totalSold,
}: {
  event: Event;
  totalSold: number;
}) => {
  const FormSchema = z.object({
    quantity: z.coerce
      .number({ invalid_type_error: "Required" })
      .gt(0, {
        message: "Quantity must be at least 1.",
      })
      .lte(event.capacity - totalSold, {
        message: "Quantity must be less than or equal to remaining ticket.",
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    // Intialize loading state
    toast({
      variant: "default",
      title: "Loading",
      description: "Please wait...",
      duration: Infinity,
    });

    // Try catch to handle network error from fetch()
    try {
      console.log(values);
      const res = await fetch(
        "https://random-data-api.com/api/users/random_user"
      );
      await fetch("https://random-data-api.com/api/users/random_user");
      await fetch("https://random-data-api.com/api/users/random_user");
      await fetch("https://random-data-api.com/api/users/random_user");
      const resJSON = await res.json();

      // API error, Throw error message
      if (!res.ok) {
        throw new Error(resJSON.message);
      }
    } catch (e) {
      // Error
      const error = e as Error;
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
      return;
    }

    // Success
    toast({
      variant: "success",
      title: "Success",
      description:
        "Ticket order success! You can check your ticket on My Orders page",
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  placeholder="Quantity..."
                  className="w-full max-w-xs"
                  type="number"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-full self-center px-10 sm:w-fit"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Order Ticket
        </Button>
      </form>
    </Form>
  );
};

export default OrderForm;
