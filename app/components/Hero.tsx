"use client";

import { useRouter } from "next/navigation";
import { GoogleButton } from "./Button";
import { signIn, useSession } from "next-auth/react";

function Hero() {
  const session = useSession();
  const router = useRouter();
  return (
    <div>
      <div className="text-5xl font-bold">
        <span>The Indian Crytocurrency</span>
        <span className="text-blue-600 pl-1">,Revolution</span>
      </div>
      <div className="flex justify-center pt-4 text-2xl text-slate-500">
        Create a frictionless wallet from INDIA with just a Google Account
      </div>
      <div className="flex justify-center pt-2 text-2xl text-slate-500 ">
        Convert yur INR into cryptocurrency
      </div>
      <div className="pt-8 flex justify-center">
        {session.data?.user ? (
          <GoogleButton
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Go to dashboard
          </GoogleButton>
        ) : (
          <GoogleButton
            onClick={() => {
              signIn("google");
            }}
          >
            Login With google
          </GoogleButton>
        )}
      </div>
    </div>
  );
}

export default Hero;
