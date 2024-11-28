"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // try {
    //   const res = await signIn("credentials", {
    //     email: formData.get("email") as string,
    //     password: formData.get("password") as string,
    //     redirect: false,
    //   });

    //   if (res?.error) {
    //     setError("Invalid credentials");
    //     return;
    //   }

    //   router.push("/dashboard");
    //   router.refresh();
    // } catch (error) {
    //   setError("Something went wrong");
    // }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-background'>
      <Card className='w-[400px]'>
        <CardHeader>
          <CardTitle>Login to MIANS Financial Tracker</CardTitle>
          <CardDescription>
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='space-y-2'>
              <Input type='email' name='email' placeholder='Email' required />
            </div>
            <div className='space-y-2'>
              <Input
                type='password'
                name='password'
                placeholder='Password'
                required
              />
            </div>
            {error && <div className='text-sm text-red-500'>{error}</div>}
            <Button type='submit' className='w-full'>
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
