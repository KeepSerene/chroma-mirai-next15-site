import type { Metadata } from "next";
import Image from "next/image";
import AuthPageImg from "@/public/Abstract Curves and Colors.jpeg";
import Logo from "@/components/Logo";
import AuthForm from "@/components/authentication/AuthForm";

export const metadata: Metadata = {
  title: "Onboarding",
};

function SignInPage() {
  return (
    <main className="w-vw h-dvh grid grid-cols-2 relative">
      <div className="w-full bg-muted text-foreground p-10 flex flex-col relative">
        {/* Logo overlay */}
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute left-0 top-0 z-10" />

        <Image
          src={AuthPageImg}
          alt=""
          fill
          className="size-full object-cover"
        />

        <div className="relative z-20">
          <Logo />
        </div>

        {/* Block-quote overlay */}
        <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10" />

        <blockquote className="space-y-2 mt-auto relative z-20">
          <p className="text-lg">
            "ChromaMirai is a game changer for me. I have been able to generate
            high quality professional headshots within minutes. It has saved me
            countless hours of work and cost as well."
          </p>

          <footer className="text-sm text-end">&mdash; David S.</footer>
        </blockquote>
      </div>

      <div className="w-full h-full p-8 flex flex-col justify-center items-center relative">
        <div className="w-[350px] max-w-xl mx-auto">
          <AuthForm />
        </div>
      </div>
    </main>
  );
}

export default SignInPage;
