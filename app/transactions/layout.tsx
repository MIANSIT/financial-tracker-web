import { redirect } from "next/navigation";
import { DashboardNav } from "@/components/dashboard/nav";
import { UserNav } from "@/components/dashboard/user-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect("/login")
  // }

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 items-center px-4'>
          <div className='mr-4 flex'>
            <a className='mr-6 flex items-center space-x-2' href='/dashboard'>
              <span className='font-bold inline-block'>MIANS</span>
            </a>
          </div>
          <div className='flex flex-1 items-center space-x-2 justify-between'>
            <DashboardNav />
            {/* <UserNav user={session.user} /> */}
          </div>
        </div>
      </header>
      <div className='flex-1 space-y-4 p-8 pt-6'>{children}</div>
    </div>
  );
}
