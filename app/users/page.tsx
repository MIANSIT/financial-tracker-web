
import { CardSkeleton } from "@/components/dashboard/card-skeleton"
import { DashboardShell } from "@/components/dashboard/shell"
import { UserInfo } from "@/components/user/user-info"
import { Suspense } from "react"


export default function UserPage() {
  return (
    
     <DashboardShell>
         
         
          <div className="grid gap-4 ">
            <div className="col-span-4">
              <Suspense fallback={<CardSkeleton />}>
                <UserInfo />
              </Suspense>
            </div>
          </div>
        </DashboardShell>
    
  )
}