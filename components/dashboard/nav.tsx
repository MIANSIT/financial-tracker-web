"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  CreditCard,
  Settings,
  UserPlus ,
} from "lucide-react"

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
 
  // {
  //   title: "Settings",
  //   href: "/settings",
  //   icon: Settings,
  // },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
             pathname.includes(item.href)
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          {item.title}
        </Link>
      ))}
    </nav>
  )
}