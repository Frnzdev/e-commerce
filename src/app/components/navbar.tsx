import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src="/frnz.png" alt="logo" width={100} height={100} />
      </Link>
      <div className="flex items-center gap-8">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-slate-600 hover:bg-slate-50 hover:text-black duration-300">
              Fazer Login
            </Button>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
