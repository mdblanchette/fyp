import algoliasearch from "algoliasearch";
import React, { useEffect } from "react";
import { Hits, InstantSearch, Configure } from "react-instantsearch-dom";
import CustomHits from "./CustomHits";
import SearchBox from "./CustomSearchBox";
import EmptyState from "./EmptyState";

const appID = process.env.NEXT_PUBLIC_ALGOLIA_PROJECT_ID as string;
const apiKEY = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY as string;
const INDEX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string;

const algoliaClient = algoliasearch(appID, apiKEY);

type Props = {
  searchModalOpen: boolean;
  setSearchModalOpen: (value: boolean) => void;
};

const GlobalSearchModal = (props: Props) => {
  const { searchModalOpen, setSearchModalOpen } = props;

  useEffect(() => {
    // closing modal while clicking outside
    function handleClickOutside(event: any) {
      if (!event.target.closest(".modal-content")) {
        setSearchModalOpen(false);
      }
    }

    if (searchModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchModalOpen, setSearchModalOpen]);

  return (
    <>
      {searchModalOpen && (
        <div className="fixed left-0 top-0 z-[99999] flex h-full min-h-screen w-full justify-center bg-[rgba(94,93,93,0.25)] px-4 py-8 backdrop-blur-sm xl:py-20">
          <div className="modal-content relative w-full max-w-[600px] rounded-xl bg-white shadow-lg dark:bg-dark">
            <button
              onClick={() => setSearchModalOpen(false)}
              className="absolute -right-6 -top-6 z-[999999] flex h-11 w-11 items-center justify-center rounded-full border-2 border-stroke bg-white hover:text-dark dark:border-dark-3 dark:bg-dark-2 dark:hover:text-white"
            >
              <svg
                className="fill-current"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9983 10.586L17.9483 5.63603L19.3623 7.05003L14.4123 12L19.3623 16.95L17.9483 18.364L12.9983 13.414L8.04828 18.364L6.63428 16.95L11.5843 12L6.63428 7.05003L8.04828 5.63603L12.9983 10.586Z"
                  fill=""
                ></path>
              </svg>
            </button>

            <div className="relative">
              <InstantSearch
                // @ts-ignore
                insights={false}
                searchClient={algoliaClient}
                indexName={INDEX}
              >
                <Configure hitsPerPage={10} />
                <SearchBox />
                <EmptyState />

                <Hits
                  hitComponent={(props) => (
                    <CustomHits
                      {...props}
                      setSearchModalOpen={setSearchModalOpen}
                    />
                  )}
                />
              </InstantSearch>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GlobalSearchModal;
