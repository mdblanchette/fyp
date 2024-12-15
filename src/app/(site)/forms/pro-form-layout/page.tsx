import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import SelectOptionOne from "@/components/SelectOption/SelectOptionOne";
import SelectGroupThree from "@/components/FormElements/SelectGroup/SelectGroupThree";
import SelectOptionTwo from "@/components/SelectOption/SelectOptionTwo";
import SelectOptionThree from "@/components/SelectOption/SelectOptionThree";
import InputGroup from "@/components/FormElements/InputGroup";

export const metadata: Metadata = {
  title: "Next.js Pro Form Layout Page | NextAdmin - Next.js Dashboard Kit",
  description:
    "This is Next.js Pro Form Layout page for NextAdmin Dashboard Kit",
};

const ProFormLayout = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Pro Form Layout" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form 2 --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Contact Form 2
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-5 flex flex-col gap-6 xl:flex-row">
                  <InputGroup
                    label="First name"
                    type="text"
                    placeholder="Jhon"
                    customClasses="w-full xl:w-1/2"
                  />

                  <InputGroup
                    label="Last name"
                    type="text"
                    placeholder="Devine"
                    customClasses="w-full xl:w-1/2"
                  />
                </div>

                <div className="mb-5.5 flex flex-col gap-6 xl:flex-row">
                  <InputGroup
                    label="Email"
                    type="email"
                    placeholder="yourmail@gmail.com"
                    customClasses="w-full xl:w-1/2"
                  />

                  <InputGroup
                    label="Phone"
                    type="text"
                    placeholder="(321) 5555-0115"
                    customClasses="w-full xl:w-1/2"
                  />
                </div>

                <SelectOptionOne />

                <div className="mb-6">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* <!-- Survey Form --> */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Survey Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <InputGroup
                  label="Name"
                  type="text"
                  placeholder="Enter your full name"
                  customClasses="mb-5"
                />

                <InputGroup
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                  customClasses="mb-5"
                />

                <InputGroup
                  label="Age"
                  type="text"
                  placeholder="Enter your age"
                  customClasses="mb-5"
                />

                <SelectGroupThree />

                <SelectOptionTwo />

                <SelectOptionThree />

                <div className="mb-5.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Any comments or suggestions?
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 text-dark outline-none transition placeholder:text-dark-6 focus:border-primary active:border-primary disabled:cursor-default dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProFormLayout;
