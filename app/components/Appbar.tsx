"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import PrimaryButton from "./Button";

function Appbar() {
  const session = useSession();
  return (
    <div className="border-b px-2 py-2 flex justify-between">
      <div>VaultX</div>
      <div>
        {session.data?.user ? (
          <PrimaryButton
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </PrimaryButton>
        ) : (
          <PrimaryButton
            onClick={() => {
              signIn();
            }}
          >
            SignIn
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}

export default Appbar;
