"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "User",
    href: "/dashboard/users",
    icon: UserPlus,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FileText,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
];

export function DashboardNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Hamburger menu button */}
      <div className="lg:hidden flex items-center justify-end p-4">
        <button
          onClick={toggleMenu}
          className="p-2 text-muted-foreground hover:text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navigation menu */}
      <nav
        className={cn(
          "lg:flex lg:items-center lg:space-x-6",
          isOpen ? "block absolute top-12 left-0 w-100vh  bg-background shadow-md p-4 z-50" : "hidden"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary mb-4 lg:mb-0",
              pathname.includes(item.href) ? "text-primary" : "text-muted-foreground"
            )}
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
