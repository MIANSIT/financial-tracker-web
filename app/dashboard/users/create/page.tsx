"use client"
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
import { DashboardCards } from "@/components/dashboard/cards";
import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import CreateUser from "@/components/user/create-user";
import { Suspense } from "react";


export default function DashboardPage() {
  return (
    <DashboardShell>
     
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <Suspense fallback={<CardSkeleton />}>
            <CreateUser />
          </Suspense>
        </div>
      </div>
    </DashboardShell>
  
  )
}