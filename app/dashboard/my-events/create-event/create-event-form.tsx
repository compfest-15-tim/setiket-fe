"use client";

import Link from "next/link";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CalendarIcon, Loader2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

const CreateEventForm = () => {
  // Images
  const MAX_IMAGE_SIZE = 5242880; // 5 MB
  const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  // Form Schema Validation
  const formSchema = z.object({
    title: z.string(),
    description: z.string(),
    images: z
      .custom<FileList>((val) => val instanceof FileList, "Required")
      .refine((files) => files.length > 0, `Required`)
      .refine((files) => files.length <= 5, `Maximum of 5 images are allowed.`)
      .refine(
        (files) =>
          Array.from(files).every((file) => file.size <= MAX_IMAGE_SIZE),
        `Each file size should be less than 5 MB.`
      )
      .refine(
        (files) =>
          Array.from(files).every((file) =>
            ALLOWED_IMAGE_TYPES.includes(file.type)
          ),
        "Only these types are allowed .jpg, .jpeg, .png and .webp"
      ),
    date: z.date(),
    location: z.string(),
    capacity: z.coerce.number({ invalid_type_error: "Required" }).gt(0),
    price: z.coerce.number({ invalid_type_error: "Required" }).gt(0),
  });

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  // Form Submit Handler (After validated with zod)
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // await fetch("https://random-data-api.com/api/users/random_user");
  };

  return (
    <section className="flex flex-col gap-5 xl:gap-6">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 xl:gap-5"
        >
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Title"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Images */}
          <FormField
            control={form.control}
            name="images"
            render={({ field: { onChange }, ...field }) => {
              // Get current images value (always watched updated)
              const images = form.watch("images");

              return (
                <FormItem>
                  <FormLabel>Images</FormLabel>
                  {/* Images List */}
                  {images && (
                    <div className="flex flex-row flex-wrap items-center gap-3">
                      {Array.from(images).map((image, mapIndex) => {
                        // Get image title and url
                        const url = URL.createObjectURL(image);
                        const title = image.name;

                        return (
                          <div key={url} className="group relative">
                            {/* Delete Button */}
                            <Button
                              variant="destructive"
                              size="icon"
                              className="absolute right-0 top-0 h-7 w-7 transition duration-300 xl:opacity-0 xl:group-hover:opacity-100"
                              onClick={() => {
                                // Filter out the image that will be deleted
                                // FileList is immutable, so we need to create a new one
                                const dataTransfer = new DataTransfer();
                                Array.from(images).forEach(
                                  (image, filterIdx) => {
                                    if (filterIdx !== mapIndex)
                                      return dataTransfer.items.add(image);
                                  }
                                );

                                // Validate and update removed file
                                const newFiles = dataTransfer.files;
                                onChange(newFiles);
                              }}
                            >
                              <XCircle className="h-5 w-5" />
                            </Button>

                            {/* Image */}
                            <Image
                              width={150}
                              height={150}
                              alt={title}
                              src={url}
                              className="aspect-square w-24 rounded-lg object-cover object-center lg:w-36"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* File Upload */}
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      multiple={true}
                      disabled={form.formState.isSubmitting}
                      {...field}
                      onChange={(event) => {
                        // Triggered when user uploaded a new file
                        // FileList is immutable, so we need to create a new one
                        const dataTransfer = new DataTransfer();

                        // Add old images
                        if (images) {
                          Array.from(images).forEach((image) =>
                            dataTransfer.items.add(image)
                          );
                        }

                        // Add newly uploaded images
                        Array.from(event.target.files!).forEach((image) =>
                          dataTransfer.items.add(image)
                        );

                        // Validate and update uploaded file
                        const newFiles = dataTransfer.files;
                        onChange(newFiles);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* Date */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        disabled={form.formState.isSubmitting}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Location"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Capacity */}
          <FormField
            control={form.control}
            name="capacity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Capacity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Capacity"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Price"
                    disabled={form.formState.isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col gap-5 sm:flex-row">
            {/* Cancel Button */}
            <Link href="/dashboard/my-events/" className="w-full">
              <Button
                variant="secondary"
                type="button"
                className="flex w-full flex-row items-center gap-2"
                size="lg"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="h-4 w-4 animate-spin" />
                )}
                Cancel
              </Button>
            </Link>

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
              Create Event
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default CreateEventForm;
