import React from "react";

const pricingPlans = [
  {
    type: "Starter",
    subTitle: "Lorem Ipsum simply dummy text of the printing.",
    price: 9.99,
    features: [
      "Application UI Components",
      "Use on Unlimited Projects",
      "Personal & Commercial Use",
      "Use on Unlimited Projects",
      "Downloadable Offline Files",
      "Figma Source File",
    ],
    button: {
      text: "Buy Now",
    },
  },
  {
    popular: true,
    type: "Professional",
    subTitle: "Lorem Ipsum simply dummy text of the printing.",
    price: 29.99,
    features: [
      "Application UI Components",
      "Use on Unlimited Projects",
      "Personal & Commercial Use",
      "Use on Unlimited Projects",
      "Downloadable Offline Files",
      "Figma Source File",
    ],
    button: {
      text: "Buy Now",
    },
  },
  {
    type: "Premium",
    subTitle: "Lorem Ipsum simply dummy text of the printing.",
    price: 99.99,
    features: [
      "Application UI Components",
      "Use on Unlimited Projects",
      "Personal & Commercial Use",
      "Use on Unlimited Projects",
      "Downloadable Offline Files",
      "Figma Source File",
    ],
    button: {
      text: "Buy Now",
    },
  },
];

const PricingTableOne: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-[10px] bg-white px-5 py-11 text-center shadow-1 dark:bg-gray-dark dark:shadow-card md:px-9 xl:px-12.5"
        >
          {plan.popular && (
            <p className="absolute -right-9 top-5 inline-flex rotate-45 bg-primary px-12 py-2 text-base font-medium text-white">
              Popular
            </p>
          )}

          <div className="mb-7.5 border-b border-stroke pb-7.5 dark:border-dark-3">
            <span className="mb-3 block text-heading-6 font-bold text-dark dark:text-white">
              {plan.type}
            </span>
            <p className="mx-auto max-w-[210px] font-medium">{plan.subTitle}</p>
          </div>

          <ul className="mb-9 flex flex-col gap-3.5">
            {plan.features.map((feature, featureIndex) => (
              <li
                key={featureIndex}
                className="font-medium text-dark dark:text-white"
              >
                {feature}
              </li>
            ))}
          </ul>

          <h2 className="mb-6 text-4xl font-bold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
            <sup className="-right-2 -top-4.5 text-xl font-medium">$</sup>
            <span> {plan.price} </span>
            <span className="text-base font-medium">/month</span>
          </h2>

          <button
            className={`mt-6 flex w-full justify-center rounded-[7px] border border-primary px-[35px] py-[11px] font-bold text-primary hover:bg-primary hover:text-white ${plan.popular ? "bg-primary text-white" : ""}`}
          >
            {plan.button.text}
          </button>

          <p className="mt-3 font-medium">1 month free trial</p>
        </div>
      ))}
    </div>
  );
};

export default PricingTableOne;
