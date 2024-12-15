import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Team {
  image: string;
  name: string;
  position: string;
  subtitle: string;
}

const teamItems: Team[] = [
  {
    image: "/images/team/team-05.png",
    name: "Jackie Sanders",
    position: "CONTENT WRITER",
    subtitle: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    image: "/images/team/team-06.png",
    name: "Adveen Desuza",
    position: "Graphics Designer",
    subtitle: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    image: "/images/team/team-07.png",
    name: "Adveen Desuza",
    position: "SEO Expert",
    subtitle: "Fermentum massa justo sit amet risus morbi leo.",
  },
  {
    image: "/images/team/team-08.png",
    name: "Adveen Desuza",
    position: "Video Editor",
    subtitle: "Fermentum massa justo sit amet risus morbi leo.",
  },
];

const TeamTwo: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-[1170px]">
      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 xl:grid-cols-4">
        {teamItems.map((item, index) => (
          <div
            key={index}
            className="rounded-lg border border-stroke p-4 dark:border-dark-3 sm:p-6 xl:p-7.5"
          >
            <div className="h-20 w-full max-w-20 overflow-hidden rounded-[5px]">
              <Image
                width={120}
                height={120}
                className="rounded-[5px]"
                src={item.image}
                alt="team"
              />
            </div>

            <div className="mb-7 mt-5.5">
              <h4 className="mb-0.5 text-lg font-bold text-dark dark:text-white">
                {item.name}
              </h4>
              <p className="mb-3 text-body-xs font-medium text-dark-4 dark:text-dark-6">
                {item.position}
              </p>
              <p className="text-body-sm">{item.subtitle}</p>
            </div>

            <div className="flex items-center gap-5.5">
              <Link href="#" className="text-gray-5 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3328 7.25625H11.7578H11.1953V6.69375V4.95V4.3875H11.7578H12.9391C13.2484 4.3875 13.5016 4.1625 13.5016 3.825V0.84375C13.5016 0.534375 13.2766 0.28125 12.9391 0.28125H10.8859C8.66406 0.28125 7.11719 1.85625 7.11719 4.19062V6.6375V7.2H6.55469H4.64219C4.24844 7.2 3.88281 7.50937 3.88281 7.95937V9.98438C3.88281 10.3781 4.19219 10.7438 4.64219 10.7438H6.49844H7.06094V11.3063V16.9594C7.06094 17.3531 7.37031 17.7188 7.82031 17.7188H10.4641C10.6328 17.7188 10.7734 17.6344 10.8859 17.5219C10.9984 17.4094 11.0828 17.2125 11.0828 17.0437V11.3344V10.7719H11.6734H12.9391C13.3047 10.7719 13.5859 10.5469 13.6422 10.2094V10.1813V10.1531L14.0359 8.2125C14.0641 8.01562 14.0359 7.79063 13.8672 7.56562C13.8109 7.425 13.5578 7.28437 13.3328 7.25625Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link href="#" className="text-gray-5 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.6894 16.5L7.90566 11.1069L3.16898 16.5H1.16504L7.01663 9.83938L1.16504 1.5H6.31001L9.8761 6.58297L14.3443 1.5H16.3482L10.7681 7.85216L16.8343 16.5H11.6894ZM13.921 14.9795H12.5719L4.03435 3.02047H5.38366L8.80301 7.809L9.39426 8.63994L13.921 14.9795Z"
                    fill=""
                  />
                </svg>
              </Link>

              <Link href="#" className="text-gray-5 hover:text-primary">
                <svg
                  className="fill-current"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.0252 11.8066C10.5752 11.8066 11.8317 10.5501 11.8317 9.00015C11.8317 7.45019 10.5752 6.1937 9.0252 6.1937C7.47524 6.1937 6.21875 7.45019 6.21875 9.00015C6.21875 10.5501 7.47524 11.8066 9.0252 11.8066Z"
                    fill=""
                  />
                  <path
                    d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                    fill=""
                  />
                  <path
                    d="M13.1119 4.06434C12.7974 4.06434 12.5312 4.33047 12.5312 4.64498C12.5312 4.9595 12.7974 5.22563 13.1119 5.22563C13.4264 5.22563 13.6925 4.9595 13.6925 4.64498C13.6925 4.33047 13.4506 4.06434 13.1119 4.06434Z"
                    fill=""
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamTwo;
