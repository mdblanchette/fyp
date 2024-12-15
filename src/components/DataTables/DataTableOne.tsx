import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  Column,
} from "react-table";
import { FilterProps } from "react-table";
import ColumnFilter from "./ColumnFilter";

interface Employee {
  id: string;
  name: string;
  position: string;
  duration: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  status: string;
}

// tables data
const dataOne: Employee[] = [
  {
    id: "155",
    name: "Brielle Kuphal",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1977",
    email: "Brielle45@gmail.com",
    phone: "+323(29)-232-44-74",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "156",
    name: "Barney Murray",
    position: "Developer",
    duration: "3 years",
    birthDate: "25 Nov, 1966",
    email: "Barney@gmail.com",
    phone: "+323(29)-232-75-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "157",
    name: "Ressie Ruecker",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1955",
    email: "Ressie@gmail.com",
    phone: "+323(29)-785-44-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "158",
    name: "Teresa Mertz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Teresa@gmail.com",
    phone: "+323(29)-232-15-44",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1969",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-232-56-89",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-789-42-23",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Oleta@gmail.com",
    phone: "+323(29)-852-63-95",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "162",
    name: "Bette Haag",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1979",
    email: "Bette@gmail.com",
    phone: "+323(29)-852-23-01",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Meda@gmail.com",
    phone: "+323(29)-232-15-23",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 2000",
    email: "Elissa@gmail.com",
    phone: "+323(29)-756-25-63",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1999",
    email: "Sid@gmail.com",
    phone: "+323(29)-859-52-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1965",
    email: "Madonna@gmail.com",
    phone: "+323(29)-896-52-13",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1975",
    email: "Waylon@gmail.com",
    phone: "+323(29)-420-45-65",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-45-89",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Lenora@gmail.com",
    phone: "+323(29)-789-12-75",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "159",
    name: "Chelsey Hackett",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1968",
    email: "Chelsey@gmail.com",
    phone: "+323(29)-963-14-52",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "160",
    name: "Tatyana Metz",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1984",
    email: "Tatyana@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "161",
    name: "Oleta Harvey",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Oleta@gmail.com",
    phone: "+323(29)-963-15-95",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "163",
    name: "Meda Ebert",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1988",
    email: "Meda@gmail.com",
    phone: "+323(29)-258-62-32",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "164",
    name: "Elissa Stroman",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1998",
    email: "Elissa@gmail.com",
    phone: "+323(29)-856-41-44",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "165",
    name: "Sid Swaniawski",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1997",
    email: "Sid@gmail.com",
    phone: "+323(29)-147-75-56",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "166",
    name: "Madonna Hahn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1964",
    email: "Madonna@gmail.com",
    phone: "+323(29)-863-25-13",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "167",
    name: "Waylon Kihn",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1945",
    email: "Waylon@gmail.com",
    phone: "+323(29)-896-75-25",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
  {
    id: "168",
    name: "Jaunita Lindgren",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1989",
    email: "Jaunita@gmail.com",
    phone: "+323(29)-789-12-45",
    address: "Block A, Demo Park",
    status: "Full-time",
  },
  {
    id: "169",
    name: "Lenora MacGyver",
    position: "Designer",
    duration: "3 years",
    birthDate: "25 Nov, 1985",
    email: "Lenora@gmail.com",
    phone: "+323(29)-856-75-12",
    address: "Block A, Demo Park",
    status: "Part-time",
  },
];

// table header
const columns: Column<Employee>[] = [
  {
    Header: "Name/Id",
    accessor: "name",
  },
  {
    Header: "Position",
    accessor: "position",
  },
  {
    Header: "BDay",
    accessor: "birthDate",
  },
  {
    Header: "Email/Phone",
    accessor: "email",
  },
  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DataTableOne = () => {
  const data = useMemo(() => dataOne, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter as React.FC<FilterProps<Employee>>,
    };
  }, []);

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <section className="data-table-common rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between px-7.5 py-4.5">
        <div className="relative z-20 w-full max-w-[414px]">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-[7px] border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
            placeholder="Search here..."
          />

          <button className="absolute right-0 top-0 flex h-11.5 w-11.5 items-center justify-center rounded-r-md bg-primary text-white">
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
                d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.958 11.957C12.2508 11.6641 12.7257 11.6641 13.0186 11.957L16.2811 15.2195C16.574 15.5124 16.574 15.9872 16.2811 16.2801C15.9882 16.573 15.5133 16.573 15.2205 16.2801L11.958 13.0176C11.6651 12.7247 11.6651 12.2499 11.958 11.957Z"
                fill=""
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center font-medium">
          <p className="pl-2 font-medium text-dark dark:text-white">
            Per Page:
          </p>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="bg-transparent pl-2.5"
          >
            {[5, 10, 20, 50].map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table
        {...getTableProps()}
        className="datatable-table datatable-one w-full table-auto !border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead className="border-separate px-4">
          {headerGroups.map((headerGroup, key) => (
            <tr
              className="border-t border-stroke dark:border-dark-3"
              {...headerGroup.getHeaderGroupProps()}
              key={key}
            >
              {headerGroup.headers.map((column, key) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={key}
                >
                  <div className="flex items-center">
                    <span> {column.render("Header")}</span>

                    <div className="ml-2 inline-flex flex-col space-y-[2px]">
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 0L0 5H10L5 0Z" fill="" />
                        </svg>
                      </span>
                      <span className="inline-block">
                        <svg
                          className="fill-current"
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                            fill=""
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {column.canFilter ? column.render("Filter") : null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                className="border-t border-stroke dark:border-dark-3"
                {...row.getRowProps()}
                key={key}
              >
                {row.cells.map((cell, key) => {
                  return (
                    <td {...cell.getCellProps()} key={key}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between px-7.5 py-7">
        <div className="flex items-center">
          <button
            className="flex cursor-pointer items-center justify-center rounded-[3px] p-[7px] px-[7px] hover:bg-primary hover:text-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1158C12.009 16.1158 11.8402 16.0596 11.7277 15.9189L5.37148 9.45019C5.11836 9.19707 5.11836 8.80332 5.37148 8.5502L11.7277 2.08145C11.9809 1.82832 12.3746 1.82832 12.6277 2.08145C12.8809 2.33457 12.8809 2.72832 12.6277 2.98145L6.72148 9.0002L12.6559 15.0189C12.909 15.2721 12.909 15.6658 12.6559 15.9189C12.4871 16.0314 12.3465 16.1158 12.1777 16.1158Z"
                fill=""
              />
            </svg>
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={index}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${
                pageIndex === index && "bg-primary text-white"
              } mx-1 flex cursor-pointer items-center justify-center rounded-[3px] p-1.5 px-[15px] font-medium hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex cursor-pointer items-center justify-center rounded-[3px] p-[7px] px-[7px] hover:bg-primary hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1158C5.65273 16.1158 5.51211 16.0596 5.37148 15.9471C5.11836 15.6939 5.11836 15.3002 5.37148 15.0471L11.2777 9.0002L5.37148 2.98145C5.11836 2.72832 5.11836 2.33457 5.37148 2.08145C5.62461 1.82832 6.01836 1.82832 6.27148 2.08145L12.6277 8.5502C12.8809 8.80332 12.8809 9.19707 12.6277 9.45019L6.27148 15.9189C6.15898 16.0314 5.99023 16.1158 5.82148 16.1158Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <p className="font-medium">
          Showing {pageIndex + 1} 0f {pageOptions.length} pages
        </p>
      </div>
    </section>
  );
};

export default DataTableOne;
