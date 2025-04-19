"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "@/lib/actions/auth.actions";
import { toast } from "sonner";
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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long!",
  }),
});

function SignInForm({ classNameStr }: { classNameStr?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    const signInActionPromise = signInAction(formData);

    toast.promise(signInActionPromise, {
      loading: "Please wait...",
      success: (response) => {
        if (response.success) {
          return "Signed in successfully! Happy exploring...";
        } else {
          throw new Error(response.errMsg);
        }
      },
      error: (err) => {
        return err?.message ?? "Failed to sign in!";
      },
    });

    signInActionPromise.then((response) => {
      if (response.success) {
        setIsLoading(false);
        router.push("/dashboard");
      } else {
        setIsLoading(false);
      }
    });

    // console.log(values);
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
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  Fill out the password associated with this account.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center gap-2 disabled:opacity-70"
          >
            <>{isLoading && <Loader2 className="size-4 animate-spin" />}</>

            <span>{isLoading ? "Signing in..." : "Sign in"}</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignInForm;
