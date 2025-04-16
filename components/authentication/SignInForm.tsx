"use client";

import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long!",
  }),
});

function SignInForm({ classNameStr }: { classNameStr?: string }) {
  useEffect(() => {
    document.querySelector<HTMLInputElement>("[data-email-input]")!.focus();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className={cn(classNameStr)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input
                    type="email"
                    data-email-input
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  Fill out your registered email address.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Set password"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  Choose a strong password, at least 8 characters long.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignInForm;
