import React, { useState, useEffect } from "react";
import DropdownDefault from "@/components/Dropdowns/DropdownDefault";

interface StockData {
  symbol: string;
  prediction: string;
}

interface TickerNameMap {
  [key: string]: string;
}

const Positions = () => {
  const [dataList, setDataList] = useState<StockData[]>([]);
  const [currentModel, setCurrentModel] = useState("model1");
  const [tickerMap, setTickerMap] = useState<TickerNameMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to load ticker name mapping
    const loadTickerMap = async () => {
      try {
        const response = await fetch("/tickerNameMap_100.json");
        const data = await response.json();
        setTickerMap(data);
      } catch (error) {
        console.error("Error loading ticker map:", error);
      }
    };

    loadTickerMap();
  }, []);

  // Effect to listen for model changes
  useEffect(() => {
    // Create an event listener for model changes
    const handleModelChange = (event: CustomEvent) => {
      if (event.detail && event.detail.model) {
        setCurrentModel(event.detail.model);
      }
    };

    // Add event listener
    window.addEventListener('modelChanged', handleModelChange as EventListener);

    // Clean up
    return () => {
      window.removeEventListener('modelChanged', handleModelChange as EventListener);
    };
  }, []);

  // Effect to load predictions when model changes or ticker map loads
  useEffect(() => {
    const loadPredictions = async () => {
      if (Object.keys(tickerMap).length === 0) return;

      setLoading(true);
      try {
        const response = await fetch(`/${currentModel}.json`);
        const data = await response.json();

        if (data.predictions && Array.isArray(data.predictions)) {
          // Get the latest predictions (last column for each stock)
          const latestPredictions = data.predictions.map(stockPredictions => {
            return stockPredictions[stockPredictions.length - 1];
          });

          // Create position data using ticker map for all 100 stocks
          const newPositions: StockData[] = Object.keys(tickerMap)
            .map(index => ({
              symbol: tickerMap[index],
              prediction: latestPredictions[parseInt(index)] > 0 
                ? "Buy" 
                : latestPredictions[parseInt(index)] < 0 
                  ? "Sell" 
                  : "Hold"
            }));

          setDataList(newPositions);
        }
      } catch (error) {
        console.error(`Error loading ${currentModel} data:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadPredictions();
  }, [currentModel, tickerMap]);

  return (
    <>
      <div className="col-span-4 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="flex items-center justify-between px-4 pb-6 pt-7.5 sm:px-6 xl:px-7.5">
          <div>
            <h3 className="text-body-2xlg font-bold text-dark dark:text-white">
              Positions
            </h3>
          </div>
          <div>
            <DropdownDefault />
          </div>
        </div>

        <div className="px-4 sm:px-6 xl:px-7.5">
          {/* Table with fixed header and scrollable body */}
          <div className="rounded-md border border-stroke dark:border-dark-3">
            {/* Fixed header */}
            <div className="grid grid-cols-2 border-b border-stroke bg-gray-2 dark:border-dark-3 dark:bg-meta-4">
              <div className="border-r border-stroke px-4 py-3 dark:border-dark-3">
                <h5 className="font-medium text-dark dark:text-white">Symbol</h5>
              </div>
              <div className="px-4 py-3">
                <h5 className="font-medium text-dark dark:text-white">Recommendation</h5>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="max-h-[400px] overflow-y-auto">
              {loading ? (
                <div className="py-8 text-center">
                  <p className="text-gray-600 dark:text-gray-400">Loading positions...</p>
                </div>
              ) : (
                dataList.map((item, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-2 border-b border-stroke dark:border-dark-3 last:border-b-0 hover:bg-gray-1 dark:hover:bg-meta-3"
                  >
                    <div className="border-r border-stroke px-4 py-3 dark:border-dark-3">
                      <p className="font-medium text-dark dark:text-white">
                        {item.symbol}
                      </p>
                    </div>
                    <div className="px-4 py-3">
                      <p className={`font-medium ${
                        item.prediction === "Buy" 
                          ? "text-green-500" 
                          : item.prediction === "Sell" 
                            ? "text-red-500" 
                            : "text-dark dark:text-white"
                      }`}>
                        {item.prediction}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Positions;