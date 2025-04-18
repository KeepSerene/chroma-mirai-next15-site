"use client";

import { useEffect, useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpAction } from "@/lib/actions/auth.actions";
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
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const validPasswordRegEx = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const formSchema = z
  .object({
    fullName: z.string().min(3, {
      message: "Name must be at least 3 characters long!",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z
      .string({
        required_error: "Password is required!",
      })
      .min(8, {
        message: "Password must be at least 8 characters long!",
      })
      .regex(validPasswordRegEx, {
        message:
          "Password must include at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (e.g., !@#$%^&*).",
      }),
    confirmedPassword: z.string({
      required_error: "Please confirm your password.",
    }),
  })
  .refine(
    (formFieldVals) =>
      formFieldVals.password === formFieldVals.confirmedPassword,
    {
      message: "Both passwords must match!",
      path: ["confirmedPassword"],
    }
  );

function SignUpForm({ classNameStr }: { classNameStr?: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    document.querySelector<HTMLInputElement>("[data-name-input]")!.focus();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmedPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append("fullName", values.fullName);
    formData.append("email", values.email);
    formData.append("password", values.password);

    const signUpActionPromise = signUpAction(formData);

    toast.promise(signUpActionPromise, {
      loading: "Please wait...",
      success: (response) => {
        if (response.success) {
          return "Account created successfully! Please verify your email address to sign in.";
        } else {
          throw new Error(response.errMsg);
        }
      },
      error: (err) => {
        return err?.message ?? "Failed to sign up!";
      },
    });

    signUpActionPromise.then((response) => {
      if (response.success) {
        setIsLoading(false);
        router.push("/sign-in");
      } else {
        setIsLoading(false);
      }
    });

    // console.log(values);
  };

  return (
    <div className={cn(classNameStr)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Name field */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">Full name</FormLabel>

                <FormControl>
                  <Input
                    type="text"
                    data-name-input
                    placeholder="John Doe"
                    {...field}
                  />
                </FormControl>

                <FormDescription>Fill out your full name.</FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

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
                    placeholder="email@example.com"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  Fill out your active email address.
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

          {/* Confirmed password field */}
          <FormField
            control={form.control}
            name="confirmedPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="capitalize">Confirm password</FormLabel>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Re-enter password"
                    {...field}
                  />
                </FormControl>

                <FormDescription>
                  Confirm the password you set above.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <>{isLoading && <Loader2 className="size-4 animate-spin" />}</>

            <span>{isLoading ? "Signing up..." : "Sign up"}</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignUpForm;
