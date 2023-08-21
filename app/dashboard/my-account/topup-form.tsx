"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { revalidatePath } from "next/cache";

export default function TopUpForm() {
  // Toast hook
  const { toast } = useToast();

  // Router hook
  const router = useRouter();

  // Form Schema Validation
  const formSchema = z.object({
    amount: z.coerce.number({ invalid_type_error: "Required" }).gt(0),
  });

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Form Submit Handler (After validated with zod)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
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
      description: "Top up success!.",
    });
    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 xl:gap-5"
      >
        {/* balance */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="number"
                  placeholder="How much?"
                  disabled={form.formState.isSubmitting}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button
          variant="default"
          size="lg"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          )}
          Top up
        </Button>
      </form>
    </Form>
  );
}
