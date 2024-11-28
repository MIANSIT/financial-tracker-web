import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='flex h-14 items-center w-full px-4'>
          <div className=' flex'>
            <a className='flex items-center space-x-2' href='/'>
              <span className='font-bold inline-block'>MIANS</span>
            </a>
          </div>
          <div className='flex flex-1 items-center justify-end'>
            <Link href='/dashboard'>
              <Button>Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='space-y-6 flex justify-center items-center h-screen'>
          <div className='flex max-w-[64rem] flex-col items-center gap-4 text-center'>
            <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              MIANS Financial Tracker
            </h1>
            <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              Track your company's finances, manage clients, and monitor
              transactions all in one place.
            </p>
            <div className='space-x-4'>
              <Link href='/dashboard'>
                <Button size='lg'>Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
