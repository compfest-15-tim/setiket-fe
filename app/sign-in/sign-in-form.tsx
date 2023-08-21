"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SignInForm = () => {
  // Toast hook
  const { toast } = useToast();

  // Form Schema Validation
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
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
      description: "Sign in success, welcome!",
    });
  };

  return (
    <div className="flex flex-col gap-5 xl:gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 xl:gap-5"
        >
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
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
            className="flex w-full flex-row items-center gap-2"
            size="lg"
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>

          {/* Sign Up */}
          <p className="text-center font-inter text-sm font-medium text-secondary-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up">
              <Button variant="link" className="h-fit w-fit p-0">
                Sign Up
              </Button>
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
