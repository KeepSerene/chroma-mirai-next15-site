import type { Metadata } from "next";
import Image from "next/image";
import AuthPageImg from "@/public/Abstract Curves and Colors.jpeg";

export const metadata: Metadata = {
  title: "Sign in",
};

function SignInPage() {
  return (
    <main className="w-dvw h-dvh grid grid-cols-2 relative">
      <div className="w-full bg-muted text-foreground p-10 flex flex-col relative">
        <Image
          src={AuthPageImg}
          alt=""
          fill
          className="size-full object-cover"
        />
      </div>

      <div className="">Login form</div>
    </main>
  );
}

export default SignInPage;
