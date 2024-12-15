import React from "react";
import Link from "next/link";

interface Row {
  title: string;
  limits?: string[];
  icons?: ("check" | "close")[];
}

const pricingCards = [
  {
    title: "Starter",
    price: 59,
    description: "Best suited for freelancers who work individually.",
    button: {
      color: "bg-primary",
      text: "Purchase Now",
      link: "#",
    },
  },
  {
    title: "Agency",
    price: 99,
    description: "Best suited for agencies and small businesses.",
    button: {
      color: "bg-[#13C296]",
      text: "Purchase Now",
      link: "#",
    },
  },
  {
    title: "Extended",
    price: 149,
    description: "Best suited for agencies and large businesses.",
    button: {
      color: "bg-primary",
      text: "Purchase Now",
      link: "#",
    },
  },
];

const featureRows: Row[] = [
  {
    title: "Seats",
    limits: ["1 Developer", "5 Developers", "20 Developers"],
  },
  {
    title: "Domains/Products",
    limits: ["5 Products", "5 Products", "5 Products"],
  },
  {
    title: "Email Support",
    limits: ["6 Months", "6 Months", "6 Months"],
  },
  {
    title: "All Pro Components",
    icons: ["check", "check", "check"],
  },
  {
    title: "Design Source Files",
    icons: ["close", "check", "check"],
  },
];

const PricingTableTwo: React.FC = () => {
  return (
    <div className="relative z-10 overflow-hidden rounded-[10px] bg-white p-11 shadow-card-2 dark:bg-gray-dark">
      <div className="w-full overflow-x-auto">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="w-1/4 min-w-[200px] px-5"></th>
              {pricingCards.map((card, cardIndex) => (
                <th key={cardIndex} className="w-1/4 min-w-[200px] px-5">
                  <div className="mb-10 text-left">
                    <span className="mb-3.5 block text-xl font-bold text-dark dark:text-white">
                      {card.title}
                    </span>
                    <h4 className="mb-4">
                      <span className="text-[32px] font-bold leading-[43px] text-dark dark:text-white">
                        ${card.price}
                      </span>
                      <span className="font-medium">Per Month</span>
                    </h4>
                    <p className="mb-6 text-base font-medium">
                      {card.description}
                    </p>
                    <Link
                      href={card.button.link}
                      className={`${card.button.color} block w-full rounded-[5px] p-2.5 text-center font-medium text-white transition hover:bg-opacity-90`}
                    >
                      {card.button.text}
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t border-stroke px-7 py-5 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">
                  Key Features
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-dark-3">
                <h5 className="text-center font-medium text-dark dark:text-white">
                  Features Limits
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-dark-3">
                <h5 className="text-center font-medium text-dark dark:text-white">
                  Features Limits
                </h5>
              </td>
              <td className="border-t border-stroke px-7 py-5 dark:border-dark-3">
                <h5 className="text-center font-medium text-dark dark:text-white">
                  Features Limits
                </h5>
              </td>
            </tr>

            {featureRows.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="border-t border-stroke px-7 py-5 dark:border-dark-3">
                  <p className="font-medium">{feature.title}</p>
                </td>

                {feature.limits?.map((item: string, index: number) => (
                  <td
                    key={index}
                    className="border-t border-stroke px-7 py-5 dark:border-dark-3"
                  >
                    <p className="text-center font-medium">{item}</p>
                  </td>
                ))}

                {feature.icons?.map((item: string, index: number) => (
                  <td
                    key={index}
                    className="border-t border-stroke px-7 py-5 dark:border-dark-3"
                  >
                    <p className="flex justify-center text-center">
                      {item === "check" ? (
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_1689_13067)">
                            <path
                              d="M12.5 24.5312C5.85937 24.5312 0.507812 19.1406 0.507812 12.5C0.507812 5.85937 5.85937 0.507812 12.5 0.507812C19.1406 0.507812 24.5312 5.85937 24.5312 12.5C24.5312 19.1406 19.1406 24.5312 12.5 24.5312ZM12.5 1.875C6.64062 1.875 1.875 6.64062 1.875 12.5C1.875 18.3594 6.64062 23.1641 12.5 23.1641C18.3594 23.1641 23.1641 18.3594 23.1641 12.5C23.1641 6.64062 18.3594 1.875 12.5 1.875Z"
                              fill="#13C296"
                            />
                            <path
                              d="M11.1719 15.2344C10.8984 15.2344 10.6641 15.1562 10.4297 14.9609L7.85156 12.4609C7.57812 12.1875 7.57812 11.7578 7.85156 11.4844C8.125 11.2109 8.55469 11.2109 8.82813 11.4844L11.1719 13.7891L16.1719 8.94531C16.4453 8.67187 16.875 8.67187 17.1484 8.94531C17.4219 9.21875 17.4219 9.64844 17.1484 9.92188L11.9531 15C11.6797 15.1563 11.4063 15.2344 11.1719 15.2344Z"
                              fill="#13C296"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_1689_13067">
                              <rect width="25" height="25" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      ) : (
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.4797 0C5.56911 0 0 5.56911 0 12.4797C0 19.3902 5.56911 25 12.4797 25C19.3902 25 25 19.3902 25 12.4797C25 5.56911 19.3902 0 12.4797 0ZM12.4797 23.5772C6.38211 23.5772 1.42276 18.5772 1.42276 12.4797C1.42276 6.38211 6.38211 1.42276 12.4797 1.42276C18.5772 1.42276 23.5772 6.38211 23.5772 12.4797C23.5772 18.5772 18.5772 23.5772 12.4797 23.5772Z"
                            fill="#FF9494"
                          />
                          <path
                            d="M16.2204 8.73954C15.9359 8.45498 15.4887 8.45498 15.2042 8.73954L12.4806 11.4631L9.75702 8.73954C9.47247 8.45498 9.02531 8.45498 8.74076 8.73954C8.45621 9.02409 8.45621 9.47125 8.74076 9.7558L11.4643 12.4794L8.74076 15.203C8.45621 15.4875 8.45621 15.9347 8.74076 16.2192C8.86271 16.3412 9.06596 16.4225 9.22856 16.4225C9.39117 16.4225 9.59442 16.3412 9.71637 16.2192L12.4399 13.4956L15.1635 16.2192C15.2855 16.3412 15.4887 16.4225 15.6513 16.4225C15.8139 16.4225 16.0172 16.3412 16.1391 16.2192C16.4237 15.9347 16.4237 15.4875 16.1391 15.203L13.4969 12.4794L16.2204 9.7558C16.4643 9.47125 16.4643 9.02409 16.2204 8.73954Z"
                            fill="#FF9494"
                          />
                        </svg>
                      )}
                    </p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <span className="absolute left-0 top-0 -z-1">
          <svg
            width="213"
            height="188"
            viewBox="0 0 213 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="75" cy="50" r="138" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="75"
                y1="-88"
                x2="75"
                y2="188"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3056D3" stopOpacity="0.15" />
                <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        <span className="absolute left-11 top-30 -z-1">
          <svg
            width="50"
            height="109"
            viewBox="0 0 50 109"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="47.71"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 47.71 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 47.71 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 47.71 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 47.71 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 47.71 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 47.71 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 47.71 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="47.71"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 47.71 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 32.3877 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 32.3877 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 32.3877 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 32.3877 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 32.3877 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 32.3877 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 32.3877 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="32.3877"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 32.3877 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 17.0654 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 17.0654 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 17.0654 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 17.0654 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 17.0654 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 17.0654 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 17.0654 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="17.0654"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 17.0654 1.74121)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="107.259"
              r="1.74121"
              transform="rotate(180 1.74121 107.259)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="91.9355"
              r="1.74121"
              transform="rotate(180 1.74121 91.9355)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="76.6133"
              r="1.74121"
              transform="rotate(180 1.74121 76.6133)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="47.0132"
              r="1.74121"
              transform="rotate(180 1.74121 47.0132)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="16.7158"
              r="1.74121"
              transform="rotate(180 1.74121 16.7158)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="61.6392"
              r="1.74121"
              transform="rotate(180 1.74121 61.6392)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="32.0386"
              r="1.74121"
              transform="rotate(180 1.74121 32.0386)"
              fill="#3056D3"
            />
            <circle
              cx="1.74121"
              cy="1.74121"
              r="1.74121"
              transform="rotate(180 1.74121 1.74121)"
              fill="#3056D3"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default PricingTableTwo;
