import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Menu, Sun } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`dark:bg-black bg-slate-100 md:px-12 px-4 ${
        scrolled && "fixed top-0 transition-all duration-300"
      } w-full shadow-lg z-50 border-b`}
    >
      <nav className="flex items-center justify-between py-1">
        <Link
          to="/"
          className="text-2xl font-bold flex items-center justify-start"
        >
          <img
            src="/logo.png"
            alt="Github Tracker"
            className="w-10 h-auto dark:invert mr-3"
          />
          Git<span className="text-blue-500">Monitor</span>
        </Link>
        <div className="flex items-center justify-end gap-4">
          <div className="md:flex items-center justify-end hidden">
            {links.map((link, idx) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100  text-sm font-medium flex items-center justify-center `}
              >
                <span
                  className={`hover:bg-slate-300 dark:hover:bg-slate-900 w-full h-full px-3 py-2 rounded-md transition-colors duration-300 ${
                    window.location.pathname === link.href &&
                    "bg-slate-300 dark:bg-slate-900"
                  }`}
                >
                  {link.label}
                </span>
                {idx !== links.length - 1 && (
                  <Separator orientation="vertical" className="mx-2 h-5" />
                )}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-3 ml-3">
              <Button variant={"outline"} className="px-3">
                <Sun />
              </Button>
              <Button
                variant={"outline"}
                className="px-5 bg-sky-700 hover:bg-sky-600 text-white"
              >
                <Link to={"/auth"}>Login</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:hidden items-center justify-end flex gap-3">
          <Sheet>
            <SheetTrigger className="flex items-center justify-center">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100  text-sm font-medium flex justify-start  hover:bg-slate-300 dark:hover:bg-slate-900 w-full h-full p-3 rounded-md transition-colors duration-300 ${
                      window.location.pathname === link.href &&
                      "bg-slate-300 dark:bg-slate-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Button variant={"outline"} className="px-3">
            <Sun />
          </Button>
          <Button
            variant={"outline"}
            className="px-5 bg-sky-700 hover:bg-sky-600"
          >
            Login
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

const links = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Contributors",
    href: "/contributors",
  },
];
