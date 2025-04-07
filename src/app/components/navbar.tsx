import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store";

const Navbar = () => {
  //const useStore = useCartStore();

  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src="/frnz.png" alt="logo" width={100} height={100} />
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex items-center cursor-pointer relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            viewBox="0 0 24 24"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.38-7.39H6" />
          </svg>

          <span className="absolute left-4 bottom-4 bg-teal-600 text-sm font-bold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
        </div>
        <div>
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
      </div>
    </nav>
  );
};

export default Navbar;
