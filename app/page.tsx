import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-background text-foreground flex flex-col justify-center items-center gap-4">
      <p>Home Page</p>

      <Link href="/dashboard" className="text-primary hover:underline">
        Dashboard
      </Link>
    </div>
  );
}
