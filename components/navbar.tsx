"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useEffect, type SetStateAction, type Dispatch } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BASE_URL } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = ({
  navBarExpanded,
  setNavBarExpanded,
  session,
}: {
  navBarExpanded: boolean;
  setNavBarExpanded: Dispatch<SetStateAction<boolean>>;
  session: Object | null;
}) => {
  // Router
  const router = useRouter();

  // List of paths
  const paths = [
    {
      name: "Events",
      url: "/events/",
    },
  ];

  // Get pathname
  const pathname = usePathname();

  // Side Bar background ref
  const sideBarBgRef = useRef<HTMLDivElement>(null);

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setNavBarExpanded(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNavBarExpanded]);

  const onSignOut = () => {
    // Sign out
    fetch(`${BASE_URL}/api/sign-out`, {
      method: "get",
      credentials: "include",
    }).then(() => {
      router.push("/");
      router.refresh();
    });
  };

  return (
    <nav className="sticky left-0 right-0 top-0 z-40 flex h-20 w-full flex-row items-center justify-between border-b-2 border-b-border bg-background px-7 lg:px-16 xl:h-[90px]">
      {/* Logo Icon */}
      <Link href="/" className="text-3xl font-bold text-primary">
        SeTiket
      </Link>

      {/* Menu Icon Button */}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Menu"
        className="flex items-center justify-center lg:hidden"
        onClick={() => setNavBarExpanded(!navBarExpanded)}
      >
        <Menu size={36} className="stroke-foreground" />
      </Button>

      <div
        className={`fixed right-0 top-0 z-10 flex h-full w-[230px] flex-col gap-6 border-l-2 border-l-border bg-background p-6 font-inter text-base duration-300 ease-in-out lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:flex-row-reverse lg:items-center lg:gap-12 lg:border-none lg:bg-transparent lg:p-0 lg:dark:bg-transparent xl:text-lg ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-row items-center justify-between">
          {/* Get Session null or no. If null, render sign in only if in lg viewport. If not null, render avatar */}
          {session ? (
            <div className="flex flex-row gap-3 lg:gap-5">
              {/* Notification */}
              <Link href="/notification">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Menu"
                  className="flex items-center justify-center"
                >
                  <Bell size={25} className="stroke-foreground" />
                </Button>
              </Link>

              {/* Avatar & Dropwdown */}
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="url" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <Link href="/dashboard/my-account">
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  {/* Add more if needed */}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="flex flex-row gap-2 text-destructive focus:text-destructive"
                    onClick={onSignOut}
                  >
                    <LogOut className="stroke-destructive" size={16} />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            // Sign in button for desktop/tablet
            <Link href="/sign-in">
              <Button
                variant="default"
                size="lg"
                className="hidden font-semibold lg:block"
              >
                Sign In
              </Button>
            </Link>
          )}

          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close NavBar"
            className="flex items-center justify-center lg:hidden"
            onClick={() => setNavBarExpanded(!navBarExpanded)}
          >
            <X size={36} className="stroke-foreground" />
          </Button>
        </div>

        {/* Path lists */}
        <ul className="flex flex-col lg:flex-row lg:gap-12">
          {paths.map((path, index) => {
            return (
              <Link key={index} href={path.url}>
                <li
                  className={`py-2 ${
                    pathname.startsWith(path.url)
                      ? "font-semibold text-foreground"
                      : "font-medium text-muted-foreground xl:hover:text-foreground"
                  }`}
                >
                  {path.name}
                </li>
              </Link>
            );
          })}
        </ul>

        {/* Sign In Button for mobile */}
        {/* Get Session null or no. If null, render sign in button. If not null, don't render sign in button */}
        {!session && (
          <div className="flex items-center justify-center lg:hidden">
            <Link href="/sign-in">
              <Button variant="default" size="lg" className="font-semibold">
                Sign In
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Side bar opaque background */}
      {navBarExpanded && (
        <div
          ref={sideBarBgRef}
          className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
        />
      )}
    </nav>
  );
};

export default NavBar;
