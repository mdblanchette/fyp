"use client";
import { SessionProvider } from "next-auth/react";
import ToastContext from "../context/ToastContext";
import React from "react";
import { useSession } from "next-auth/react";
import Signin from "@/components/Auth/Signin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { data: session } = useSession();

  return (
    <>
      <SessionProvider>
        <ToastContext />
        {/*{session?.user ? children : <Signin />}*/}
        {children}
      </SessionProvider>
    </>
  );
}
