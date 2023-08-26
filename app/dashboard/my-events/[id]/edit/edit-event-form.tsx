"use client";

import Image from "next/image";
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
import { useToast } from "@/components/ui/use-toast";
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
import Link from "next/link";

const EditEventForm = () => {
  // Toast hook
  const { toast } = useToast();

  // Fetch data
  // Get current value (se as form default value)
  const event = {
    id: "7b92a264-5ff2-4ea1-b5ef-62c2b9cda87a",
    title: "Tech Conference 2023",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "2023-09-15",
    images: ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"],
    location: "San Francisco, USA",
    capacity: 1200,
    status: "verified",
    price: 100000,
  };

  // Images
  const MAX_IMAGE_SIZE = 5242880; // 5 MB
  const ALLOWED_IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/jpg",
  ];

  // Form Schema Validation
  // Current images store links in string format meanwhile
  // New images store image files in FileList format
  // Mechanism:
  // 1. Send Current Images & New Images when updating
  // 2. For changes in current images, delete unused image
  // 3. For new images, upload to storage and save the link to database
  const formSchema = z
    .object({
      title: z.string(),
      description: z.string(),
      currentImages: z.string().array(),
      newImages: z
        .custom<FileList>((val) => val instanceof FileList, "Required")
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
    })
    // Trigger error in new images if current images is empty and new images is empty
    .refine(
      (schema) => {
        if (schema.currentImages.length === 0) {
          return schema.newImages.length > 0;
        } else {
          return true;
        }
      },
      {
        message: "At least one image is required.",
        path: ["newImages"],
      }
    )
    // Trigger error in current images if images exceed 5 quantity
    .refine(
      (schema) => schema.currentImages.length + schema.newImages.length <= 5,
      {
        message: "Maximum of 5 images are allowed.",
        path: ["currentImages"],
      }
    )
    // Trigger error in current images if images exceed 5 quantity
    .refine(
      (schema) => schema.currentImages.length + schema.newImages.length <= 5,
      {
        message: "Maximum of 5 images are allowed.",
        path: ["newImages"],
      }
    );

  // Form Hook
  // Uses current value for default value
  const EmptyFileList = new DataTransfer().files;
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: event.title,
      description: event.description,
      currentImages: event.images,
      newImages: EmptyFileList,
      date: new Date(event.date),
      location: event.location,
      capacity: event.capacity,
      price: event.price,
    },
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
      description: "Event has been edited.",
    });

    // Revalidate page data
    // revalidatePath("/dashboard/event-organizer-verification");
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

          {/* Current Images (Delete Only) */}
          <FormField
            control={form.control}
            name="currentImages"
            render={({ field: { onChange } }) => {
              const currentImages = form.watch("currentImages");

              return (
                <FormItem>
                  <FormLabel>Current Images</FormLabel>
                  <div className="flex flex-row flex-wrap items-center gap-4">
                    {currentImages.map((images) => {
                      return (
                        <div key={images} className="group relative">
                          {/* Delete Button */}
                          <Button
                            variant="destructive"
                            size="icon"
                            className={`absolute right-0 top-0 h-7 w-7 transition duration-300 ${
                              form.formState.isSubmitting
                                ? "hidden"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                            disabled={form.formState.isSubmitting}
                            onClick={() => {
                              // Filter out the image that will be deleted
                              const newImages = currentImages.filter(
                                (imageFilter) => imageFilter !== images
                              );

                              // Validate and update removed file
                              onChange(newImages);
                            }}
                          >
                            <XCircle className="h-5 w-5" />
                          </Button>

                          {/* Image */}
                          <Image
                            width={150}
                            height={150}
                            alt={images}
                            src={images}
                            className="aspect-square w-24 rounded-lg object-cover object-center lg:w-36"
                          />
                        </div>
                      );
                    })}
                  </div>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          {/* New Uploaded Images List (Delete and Add) */}
          <FormField
            control={form.control}
            name="newImages"
            render={({ field: { onChange }, ...field }) => {
              // Get current images value (always watched/updated)
              const newImages = form.watch("newImages");

              return (
                <FormItem>
                  <FormLabel>New Images</FormLabel>
                  <div className="flex flex-row flex-wrap items-center gap-4">
                    {Array.from(newImages).map((image, mapIndex) => {
                      // Get image title and url
                      const url = URL.createObjectURL(image);
                      const title = image.name;

                      return (
                        <div key={url} className="group relative">
                          {/* Delete Button */}
                          <Button
                            variant="destructive"
                            size="icon"
                            className={`absolute right-0 top-0 h-7 w-7 transition duration-300 ${
                              form.formState.isSubmitting
                                ? "hidden group-hover:cursor-not-allowed"
                                : "opacity-0 group-hover:opacity-100"
                            }`}
                            disabled={form.formState.isSubmitting}
                            onClick={() => {
                              // Filter out the image that will be deleted
                              // FileList is immutable, so we need to create a new one
                              const dataTransfer = new DataTransfer();
                              Array.from(newImages).forEach(
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
                        if (newImages) {
                          Array.from(newImages).forEach((image) =>
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
                        variant="outline"
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
            <Link
              href="/dashboard/my-events"
              className={`w-full ${
                form.formState.isSubmitting
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }`}
            >
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
              disabled={form.formState.isSubmitting || !form.formState.isDirty}
            >
              {form.formState.isSubmitting && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              Update Event
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default EditEventForm;
