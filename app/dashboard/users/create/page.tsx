"use client";
import { CardSkeleton } from "@/components/dashboard/card-skeleton";
import { DashboardShell } from "@/components/dashboard/shell";
import CreateUser from "@/components/user/create-user";
import { Suspense } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleSuccess = () => {
    // Redirect to /dashboard/users after successful form submission
    router.push("/dashboard/users");
  };

  return (
    <DashboardShell>
      <div className="grid gap-4">
        <div className="col-span-4">
          <Suspense fallback={<CardSkeleton />}>
            <CreateUser onSuccess={handleSuccess} />
          </Suspense>
        </div>
      </div>
    </DashboardShell>
  );
}
