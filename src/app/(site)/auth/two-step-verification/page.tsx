import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Next.js Two Step Verification Page | NextAdmin - Next.js Dashboard Kit`,
  description: `This is Two Step Verification page for NextAdmin Dashboard Kit`,
};

const TwoStepVerification: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray-4 px-4 dark:bg-dark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="text-center">
              <div className="rounded-xl bg-white p-4 shadow-card-10 dark:bg-gray-dark lg:p-7.5 xl:p-12.5">
                <Link href="/" className="mx-auto mb-7.5 inline-flex">
                  <Image
                    width={176}
                    height={32}
                    src={"/images/logo/logo-dark.svg"}
                    alt="Logo"
                    priority
                    className="dark:hidden"
                  />
                  <Image
                    width={176}
                    height={32}
                    src={"/images/logo/logo.svg"}
                    alt="Logo"
                    priority
                    className="hidden dark:block"
                  />
                </Link>

                <h1 className="mb-2.5 text-3xl font-black leading-[48px] text-dark dark:text-white">
                  Verify Your Account
                </h1>

                <p className="mb-7.5 font-medium text-dark-4 dark:text-dark-6">
                  Enter the 4 digit code sent to the registered email id.
                </p>

                <form>
                  <div className="flex items-center gap-4.5">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        className="h-12.5 w-full rounded-md border-[1.5px] border-stroke bg-transparent px-5 py-1 text-center text-2xl text-dark outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                      />
                    ))}
                  </div>

                  <p className="mb-5 mt-4 text-left font-medium text-dark dark:text-white">
                    Did not receive a code?
                    <button className="text-primary"> Resend</button>
                  </p>

                  <button className="flex w-full justify-center rounded-lg bg-primary p-[13px] font-bold text-gray hover:bg-opacity-90">
                    Verify
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
