import Link from "next/link";
import { Sparkles } from "lucide-react";

function Logo() {
  return (
    <Link href="/" className="w-max flex items-center gap-2">
      <Sparkles strokeWidth={1.5} className="size-8" />
      <span className="text-lg font-semibold">ChromaMirai</span>
    </Link>
  );
}

export default Logo;
