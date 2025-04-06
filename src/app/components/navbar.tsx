import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src="/frnz.png" alt="logo" width={100} height={100} />
      </Link>
    </nav>
  );
};

export default Navbar;
