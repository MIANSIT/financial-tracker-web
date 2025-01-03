"use client"
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
import { DashboardShell } from "@/components/dashboard/shell";
import { UserInfo } from "@/components/user/user-info";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { 

  UserPlus ,
} from "lucide-react"


export default function UserPage() {

  const router = useRouter();

  const handleAddUserClick = () => {
    router.push("/dashboard/users/create"); // Navigate to the desired route
  };
  
  return (
    <DashboardShell>
    <div className="flex ">
      <button   onClick={handleAddUserClick} className="ml-auto border bg-black  text-muted-foreground px-4 py-2 rounded text-sm font-medium hover:text-primary ">
        <UserPlus className=" text-muted-foreground inline-block pb-1" /> {/* Icon */}
        <span >Add User</span> {/* Text */}
      </button>
    </div>
      <div className="grid gap-4 ">
        <div className="col-span-4">
          <Suspense fallback={<CardSkeleton />}>
            <UserInfo />
          </Suspense>
        </div>
      </div>
    </DashboardShell>
  );
}
