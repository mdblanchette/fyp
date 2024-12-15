import React from "react";
import Link from "next/link";
import { verifyPartytownSetup } from "next/dist/lib/verify-partytown-setup";
import inputGroup from "@/components/FormElements/InputGroup";
import { fetchCSSFromGoogleFonts } from "next/dist/compiled/@next/font/dist/google/fetch-css-from-google-fonts";

interface Product {
  brand: string;
  description: string;
  quantity: number;
  pricePerUnit: number;
  total: number;
}

const productList: Product[] = [
  {
    brand: "Techno",
    description: "Kemon 24 smart phone",
    quantity: 1,
    pricePerUnit: 200,
    total: 200,
  },
  {
    brand: "Vivo",
    description: "Vivo 32 smart phone",
    quantity: 3,
    pricePerUnit: 300,
    total: 900,
  },
  {
    brand: "Samsung",
    description: "S23 Ultra",
    quantity: 1,
    pricePerUnit: 1300,
    total: 1300,
  },
  {
    brand: "Apple",
    description: "iPhone 15Pro Max",
    quantity: 2,
    pricePerUnit: 1200,
    total: 2400,
  },
  {
    brand: "Oppo",
    description: "Fold X",
    quantity: 1,
    pricePerUnit: 900,
    total: 900,
  },
];

const InVoiceTwo: React.FC = () => {
  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center justify-end gap-3.5">
        <button className="inline-flex items-center gap-2.5 rounded bg-green-light-1 px-4 py-[7px] font-medium text-white hover:bg-opacity-90">
          <svg
            className="fill-current"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2298_21926)">
              <path
                d="M16.0383 5.00967V2.90029C16.0383 2.08467 15.3633 1.40967 14.5477 1.40967H4.78828C3.97266 1.40967 3.29766 2.08467 3.29766 2.90029V5.00967C2.51016 5.03779 1.86328 5.68467 1.86328 6.47217V10.5222C1.86328 11.3097 2.51016 11.9565 3.29766 11.9847V16.9628C3.29766 17.7784 3.97266 18.4534 4.78828 18.4534H14.5758C15.3914 18.4534 16.0664 17.7784 16.0664 16.9628V11.9847C16.8539 11.9565 17.5008 11.3097 17.5008 10.5222V6.47217C17.4727 5.68467 16.8258 5.03779 16.0383 5.00967ZM4.59141 2.90029C4.59141 2.78779 4.67578 2.67529 4.81641 2.67529H14.6039C14.7164 2.67529 14.8289 2.75967 14.8289 2.90029V5.00967H4.59141V2.90029ZM14.7727 16.9628C14.7727 17.0753 14.6883 17.1878 14.5477 17.1878H4.78828C4.67578 17.1878 4.56328 17.1034 4.56328 16.9628V11.9847H14.7727V16.9628ZM16.207 10.5222C16.207 10.6347 16.1227 10.7472 15.982 10.7472H3.35391C3.24141 10.7472 3.12891 10.6628 3.12891 10.5222V6.47217C3.12891 6.35967 3.21328 6.24717 3.35391 6.24717H15.982C16.0945 6.24717 16.207 6.33154 16.207 6.47217V10.5222Z"
                fill=""
              />
              <path
                d="M7.57266 14.1502H11.7914C12.1289 14.1502 12.4383 13.8689 12.4383 13.5033C12.4383 13.1377 12.157 12.8564 11.7914 12.8564H7.57266C7.23516 12.8564 6.92578 13.1377 6.92578 13.5033C6.92578 13.8689 7.23516 14.1502 7.57266 14.1502Z"
                fill=""
              />
              <path
                d="M14.7445 7.45654H12.6352C12.2977 7.45654 11.9883 7.73779 11.9883 8.10342C11.9883 8.46904 12.2695 8.75029 12.6352 8.75029H14.7445C15.082 8.75029 15.3914 8.46904 15.3914 8.10342C15.3914 7.73779 15.1102 7.45654 14.7445 7.45654Z"
                fill=""
              />
              <path
                d="M7.57266 16.2879H11.7914C12.1289 16.2879 12.4383 16.0066 12.4383 15.641C12.4383 15.2754 12.157 14.9941 11.7914 14.9941H7.57266C7.23516 14.9941 6.92578 15.2754 6.92578 15.641C6.92578 16.0066 7.23516 16.2879 7.57266 16.2879Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_2298_21926">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0.683594 0.931641)"
                />
              </clipPath>
            </defs>
          </svg>
          Print
        </button>

        <button className="inline-flex items-center gap-2.5 rounded bg-primary px-4 py-[7px] font-medium text-white hover:bg-opacity-90">
          <svg
            className="fill-current"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2298_21929)">
              <path
                d="M16.0235 5.60049L12.202 1.77549C11.9805 1.55049 11.6759 1.43799 11.3712 1.43799H4.72508C3.78355 1.43799 2.98047 2.22549 2.98047 3.20986V9.81924C2.98047 10.1567 3.25739 10.4661 3.61739 10.4661C3.97739 10.4661 4.25431 10.1849 4.25431 9.81924V3.18174C4.25431 2.90049 4.47585 2.67549 4.75278 2.67549H11.0112V6.27549C11.0112 6.61299 11.2882 6.92236 11.6482 6.92236H15.1651V9.65049C15.1651 9.98799 15.442 10.2974 15.802 10.2974C16.162 10.2974 16.4389 10.0161 16.4389 9.65049V6.44424C16.3559 6.13486 16.2451 5.82549 16.0235 5.60049ZM12.2297 3.57549L14.3066 5.65674H12.2297V3.57549Z"
                fill=""
              />
              <path
                d="M15.747 15.5005C15.4147 15.5005 15.11 15.7817 15.11 16.1474V16.7099C15.11 16.9911 14.8885 17.2161 14.6116 17.2161H4.72543C4.44851 17.2161 4.22697 16.9911 4.22697 16.7099V16.3161C4.22697 15.9786 3.95005 15.6692 3.59005 15.6692C3.23005 15.6692 2.95312 15.9505 2.95312 16.3161V16.6817C2.95312 17.638 3.72851 18.4536 4.69774 18.4536H14.5839C15.5254 18.4536 16.3285 17.6661 16.3285 16.6817V16.1192C16.3562 15.7817 16.0793 15.5005 15.747 15.5005Z"
                fill=""
              />
              <path
                d="M13.2831 11.6194H14.8061C15.1384 11.6194 15.4431 11.3382 15.4431 10.9726C15.4431 10.6069 15.1661 10.3257 14.8061 10.3257H13.2831C12.5354 10.3257 11.8984 10.9726 11.8984 11.7319V15.1351C11.8984 15.4726 12.1754 15.7819 12.5354 15.7819C12.8954 15.7819 13.1723 15.5007 13.1723 15.1351V13.3632H14.2246C14.5569 13.3632 14.8615 13.0819 14.8615 12.7163C14.8615 12.3507 14.5846 12.0694 14.2246 12.0694H13.1446V11.7038C13.1446 11.7038 13.2 11.6194 13.2831 11.6194Z"
                fill=""
              />
              <path
                d="M9.51624 15.8099C10.4855 15.8099 11.2885 14.9942 11.2885 13.9817V12.1255C11.2885 11.113 10.4855 10.2974 9.51624 10.2974H8.24239C7.91008 10.2974 7.60547 10.5786 7.60547 10.9442V15.1911C7.60547 15.5286 7.88239 15.838 8.24239 15.838H9.51624V15.8099ZM8.85162 11.563H9.48855C9.76547 11.563 10.0147 11.8161 10.0147 12.1255V13.9817C10.0147 14.2911 9.76547 14.5442 9.48855 14.5442H8.85162V11.563V11.563Z"
                fill=""
              />
              <path
                d="M4.5588 15.8101C4.89111 15.8101 5.19572 15.5288 5.19572 15.1632V13.4757H6.55264C6.88495 13.4757 7.18957 13.1944 7.18957 12.8288V10.9726C7.18957 10.6351 6.91264 10.3257 6.55264 10.3257H4.5588C4.22649 10.3257 3.92188 10.6069 3.92188 10.9726V15.1632C3.94957 15.5288 4.22649 15.8101 4.5588 15.8101ZM5.19572 11.6194H5.91572V12.2101H5.19572V11.6194Z"
                fill=""
              />
            </g>
            <defs>
              <clipPath id="clip0_2298_21929">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0.683594 0.931641)"
                />
              </clipPath>
            </defs>
          </svg>
          Save As PDF
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-5">
        <div>
          <p className="mb-1.5 font-medium text-dark dark:text-white">
            Billing From:
          </p>
          <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
            Super Technologies
          </h4>
          <Link href="#" className="block">
            <span className="font-medium text-dark dark:text-white">
              Email:{" "}
            </span>
            contact@example.com
          </Link>
          <span className="mt-1.5 block">
            <span className="font-medium text-dark dark:text-white">
              Address:{" "}
            </span>
            2972 Westheimer Rd. Santa Ana.
          </span>
        </div>

        <div>
          <p className="mb-1.5 font-medium text-dark dark:text-white">
            Billing To:
          </p>
          <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
            Devid wilium
          </h4>
          <Link href="#" className="block">
            <span className="font-medium text-dark dark:text-white">
              Email:{" "}
            </span>
            contact@example.com
          </Link>
          <span className="mt-1.5 block">
            <span className="font-medium text-dark dark:text-white">
              Address:{" "}
            </span>
            New York, USA 2707 Davis Anenue
          </span>
        </div>
      </div>

      <div className="my-7.5 grid grid-cols-1 border border-stroke dark:border-dark-3 xsm:grid-cols-2 sm:grid-cols-4">
        <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 sm:border-b-0">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Invoice ID :
          </h5>
          <span className="text-body-sm font-medium"> #STK83084398239 </span>
        </div>

        <div className="border-b border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 sm:border-b-0 sm:border-r">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Date Issued :
          </h5>
          <span className="text-body-sm font-medium"> 29, Nov 2027 </span>
        </div>

        <div className="border-b border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3 xsm:border-b-0">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Due Date :
          </h5>
          <span className="text-body-sm font-medium"> 29, Dec 2027 </span>
        </div>

        <div className="border-r border-stroke px-5 py-4 last:border-r-0 dark:border-dark-3">
          <h5 className="mb-1.5 font-bold text-dark dark:text-white">
            Due Amount :
          </h5>
          <span className="text-body-sm font-medium"> $2,578.90 </span>
        </div>
      </div>

      <div className="border border-stroke dark:border-dark-3">
        <div className="max-w-full overflow-x-auto">
          <div className="min-w-[670px]">
            {/* <!-- table header start --> */}
            <div className="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-dark-3">
              <div className="col-span-3">
                <h5 className="font-medium text-dark dark:text-white">
                  Brand name
                </h5>
              </div>

              <div className="col-span-4">
                <h5 className="font-medium text-dark dark:text-white">
                  Description
                </h5>
              </div>

              <div className="col-span-2">
                <h5 className="font-medium text-dark dark:text-white">
                  Quantity
                </h5>
              </div>

              <div className="col-span-2">
                <h5 className="font-medium text-dark dark:text-white">
                  Price Per Unit
                </h5>
              </div>

              <div className="col-span-1">
                <h5 className="text-right font-medium text-dark dark:text-white">
                  Total
                </h5>
              </div>
            </div>
            {/* <!-- table header end --> */}

            {productList.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-b border-stroke py-3.5 pl-5 pr-6 dark:border-dark-3"
              >
                <div className="col-span-3">
                  <p className="font-medium">{item.brand}</p>
                </div>

                <div className="col-span-4">
                  <p className="font-medium">{item.description}</p>
                </div>

                <div className="col-span-2">
                  <p className="font-medium">{item.quantity}</p>
                </div>

                <div className="col-span-2">
                  <p className="font-medium">${item.pricePerUnit}</p>
                </div>

                <div className="col-span-1">
                  <p className="text-right font-medium">${item.total}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* <!-- total price start --> */}
        <div className="flex justify-end p-6">
          <div className="w-full max-w-65">
            <div className="flex flex-col gap-4">
              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span> Subtotal </span>
                <span> $4700 </span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span> Shipping Cost (+) </span>
                <span> $10.00 </span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>
                  Coupon Discount
                  <span className="text-green-light-1">(10%)</span>
                </span>
                <span> $470 </span>
              </p>

              <p className="flex justify-between font-medium text-dark dark:text-white">
                <span>
                  {" "}
                  Vat <span className="text-[#FB5454]">(5%)</span>{" "}
                </span>
                <span> $235 </span>
              </p>
            </div>

            <p className="mt-4 flex justify-between border-t border-stroke pt-5 dark:border-dark-3">
              <span className="font-medium text-dark dark:text-white">
                Total
              </span>
              <span className="font-bold text-green-light-1"> $4475 </span>
            </p>

            <button className="float-right mt-10 inline-flex items-center gap-2.5 rounded bg-primary px-7.5 py-2.5 font-medium text-white hover:bg-opacity-90">
              Download
              <svg
                className="fill-current"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1878_13706)">
                  <path
                    d="M16.8754 12.375C16.5379 12.375 16.2285 12.6562 16.2285 13.0219V15.525C16.2285 15.7781 16.0316 15.975 15.7785 15.975H2.22227C1.96914 15.975 1.77227 15.7781 1.77227 15.525V13.0219C1.77227 12.6562 1.46289 12.375 1.12539 12.375C0.787891 12.375 0.478516 12.6562 0.478516 13.0219V15.525C0.478516 16.4812 1.23789 17.2406 2.19414 17.2406H15.7785C16.7348 17.2406 17.4941 16.4812 17.4941 15.525V13.0219C17.5223 12.6562 17.2129 12.375 16.8754 12.375Z"
                    fill=""
                  />
                  <path
                    d="M8.55055 13.078C8.66305 13.1905 8.8318 13.2468 9.00055 13.2468C9.1693 13.2468 9.30992 13.1905 9.45054 13.078L13.5287 9.1124C13.7818 8.85928 13.7818 8.46553 13.5287 8.2124C13.2755 7.95928 12.8818 7.95928 12.6287 8.2124L9.64742 11.1374V1.40615C9.64742 1.06865 9.36617 0.759277 9.00055 0.759277C8.66305 0.759277 8.35367 1.04053 8.35367 1.40615V11.1374L5.37242 8.2124C5.1193 7.95928 4.72555 7.9874 4.47242 8.2124C4.2193 8.46553 4.24742 8.85928 4.47242 9.1124L8.55055 13.078Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1878_13706">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- total price end --> */}
      </div>
    </div>
  );
};

export default InVoiceTwo;
