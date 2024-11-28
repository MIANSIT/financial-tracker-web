import { Suspense } from "react"
import { DashboardHeader } from "@/components/dashboard/header"
import { DashboardShell } from "@/components/dashboard/shell"
import { DashboardCards } from "@/components/dashboard/cards"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { CardSkeleton } from "@/components/dashboard/card-skeleton"

export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Dashboard"
        text="Overview of your financial data"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton />}>
          <DashboardCards />
        </Suspense>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Suspense fallback={<CardSkeleton />}>
            <RecentTransactions />
          </Suspense>
        </div>
      </div>
    </DashboardShell>
  )
}