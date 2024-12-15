"use client";
import React, { useState } from "react";

interface Language {
  id: string;
  name: string;
}

const languages: Language[] = [
  { id: "C", name: "C" },
  { id: "C++", name: "C++" },
  { id: "Java", name: "Java" },
  { id: "Python", name: "Python" },
  { id: "JavaScript", name: "JavaScript" },
  { id: "React", name: "React" },
  { id: "Angular", name: "Angular" },
];

const CheckboxInputGroup: React.FC<{
  id: string;
  isChecked: boolean;
  onChange: () => void;
}> = ({ id, isChecked, onChange }) => (
  <div>
    <label className="relative flex cursor-pointer select-none items-center gap-2 text-body-sm font-medium text-dark dark:text-white">
      <input
        className="sr-only"
        type="checkbox"
        name="roleSelect"
        id={id}
        checked={isChecked}
        onChange={onChange}
      />
      <span
        className={`flex h-5 w-5 items-center justify-center overflow-hidden rounded-md border ${
          isChecked
            ? "border-primary bg-primary dark:border-primary"
            : "border-gray-4 dark:border-dark-3"
        }`}
      >
        <span className={`rounded-md ${isChecked ? "flex" : "hidden"}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="2"
              y="2.00006"
              width="20"
              height="20"
              rx="6"
              fill="#5750F1"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.7064 8.79285C16.8939 8.98038 16.9992 9.23468 16.9992 9.49985C16.9992 9.76501 16.8939 10.0193 16.7064 10.2068L11.7064 15.2068C11.5189 15.3943 11.2646 15.4996 10.9994 15.4996C10.7343 15.4996 10.48 15.3943 10.2924 15.2068L7.29243 12.2068C7.11027 12.0182 7.00948 11.7656 7.01176 11.5034C7.01403 11.2412 7.1192 10.9904 7.30461 10.805C7.49002 10.6196 7.74083 10.5145 8.00303 10.5122C8.26523 10.5099 8.51783 10.6107 8.70643 10.7928L10.9994 13.0858L15.2924 8.79285C15.48 8.60538 15.7343 8.50006 15.9994 8.50006C16.2646 8.50006 16.5189 8.60538 16.7064 8.79285Z"
              fill="white"
            />
          </svg>
        </span>
      </span>
      {id}
    </label>
  </div>
);

const SelectOptionThree: React.FC = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleLanguageChange = (id: string) => {
    setSelectedLanguages((prevSelectedLanguages) => {
      if (prevSelectedLanguages.includes(id)) {
        // Deselect the language if it's already selected
        return prevSelectedLanguages.filter((lang) => lang !== id);
      } else {
        // Select the language if it's not selected
        return [...prevSelectedLanguages, id];
      }
    });
  };

  return (
    <div className="mb-6">
      <label className="mb-4.5 block text-sm font-medium text-black dark:text-white">
        Which languages & frameworks you know?
      </label>

      <div className="flex flex-col gap-2.5">
        {languages.map((language) => (
          <CheckboxInputGroup
            key={language.id}
            id={language.id}
            isChecked={selectedLanguages.includes(language.id)}
            onChange={() => handleLanguageChange(language.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectOptionThree;
