"use client";

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Type definitions for chart data
interface IndexData {
  name: string;
  color: string;
  value: number;
  change: number;
  percentChange: number;
  dataPoints: { timestamp: string; value: number }[];
}

interface NewsItem {
  heading: string;
  source: string;
  date: string;
}

interface HeatMapItem {
  symbol: string;
  name: string;
  value: number;
  percentChange: number;
  marketCap: number;
}

interface SectorData {
  name: string;
  items: HeatMapItem[];
}

// IndexChart Component with Recharts
const IndexChart = ({ data }: { data: IndexData[] }) => {
  // Format data for Recharts
  const formatChartData = () => {
    // If no data or no data points, return empty array
    if (!data.length || !data[0].dataPoints.length) return [];
    
    // Create a time-aligned dataset
    const indexNames = data.map(index => index.name);
    
    // Get all unique timestamps across all indices
    const allTimestamps = [...new Set(
      data.flatMap(index => index.dataPoints.map(point => point.timestamp))
    )].sort();
    
    // Create an array of data points with all indices for each timestamp
    return allTimestamps.map(timestamp => {
      // Parse YYYYMMDD integer format to Date object
      const formatDate = (dateInt: number) => {
        const dateStr = dateInt.toString();
        const year = parseInt(dateStr.substring(0, 4));
        const month = parseInt(dateStr.substring(4, 6)) - 1; // JS months are 0-indexed
        const day = parseInt(dateStr.substring(6, 8));
        return new Date(year, month, day);
      };
      
      // Try to parse the timestamp either as ISO string or as integer
      const date = timestamp.includes('-') 
        ? new Date(timestamp)
        : formatDate(parseInt(timestamp));
      
      const dataPoint: { [key: string]: any } = {
        timestamp,
        date: date.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}),
        rawDate: date
      };
      
      // Add value for each index at this timestamp
      indexNames.forEach(indexName => {
        const index = data.find(idx => idx.name === indexName);
        if (!index) return;
        
        const point = index.dataPoints.find(p => p.timestamp === timestamp);
        if (point) {
          dataPoint[indexName] = point.value;
        }
      });
      
      return dataPoint;
    });
  };

  const chartData = formatChartData();
  
  // Find min/max to set domain for YAxis
  const allValues = chartData.flatMap(point => 
    data.map(index => point[index.name]).filter(Boolean)
  );
  
  const minValue = Math.min(...allValues) * 0.995; // Add small buffer
  const maxValue = Math.max(...allValues) * 1.005; // Add small buffer

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Index Chart</h3>
      
      {/* Index information */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((index, i) => (
          <div key={i} className="bg-gray-50 p-2 rounded">
            <span className="font-medium" style={{ color: index.color }}>{index.name}</span>
            <div className="text-sm">{index.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className={`text-${index.percentChange >= 0 ? 'green' : 'red'}-500 text-xs`}>
              {index.change >= 0 ? '+' : ''}{index.change.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {index.percentChange >= 0 ? '+' : ''}{index.percentChange.toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
      
      {/* Chart using Recharts */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value}
            />
            <YAxis 
              domain={[minValue, maxValue]}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            />
            <Tooltip 
              formatter={(value: number) => [
                value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
              ]}
              labelFormatter={(label) => label}
            />
            <Legend />
            {data.map((index, i) => (
              <Line
                key={i}
                type="monotone"
                dataKey={index.name}
                stroke={index.color}
                dot={false}
                activeDot={{ r: 8 }}
                strokeWidth={1.5}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// News Component (unchanged)
const NewsSection = ({ news }: { news: NewsItem[] }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">News</h3>
      <div className="overflow-y-auto h-64">
        {news.map((item, index) => (
          <div key={index} className="mb-4 pb-3 border-b border-gray-200">
            <h4 className="font-medium">{item.heading}</h4>
            <div className="text-xs text-gray-500">{item.source} · {item.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// HeatMap Component - We can use a library like treemap-js or d3-treemap for this
// For now, we'll use a simplified grid approach
const HeatMap = ({ 
  sectors, 
  selectedIndustry, 
  setSelectedIndustry 
}: { 
  sectors: SectorData[],
  selectedIndustry: string,
  setSelectedIndustry: (industry: string) => void
}) => {
  return (
    <div className="mt-4 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Heat Map</h3>
        <div className="relative">
          <select 
            className="bg-gray-100 border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            <option value="all">All Industries</option>
            {sectors.map((sector, index) => (
              <option key={index} value={sector.name}>{sector.name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        {/* Navigation buttons */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Display sectors based on selection */}
        <div className="flex flex-wrap h-80">
          {sectors
            .filter(sector => selectedIndustry === "all" || sector.name === selectedIndustry)
            .map((sector, sectorIndex) => (
              <div key={sectorIndex} className="p-2" style={{ flexBasis: '33.333%', minWidth: '300px' }}>
                <div className="text-xs font-medium mb-1">{sector.name}</div>
                <div className="grid grid-cols-6 gap-2 h-full">
                  {sector.items.map((item, itemIndex) => {
                    // Determine size based on market cap
                    const maxMarketCap = Math.max(...sector.items.map(i => i.marketCap));
                    const minMarketCap = Math.min(...sector.items.map(i => i.marketCap));
                    const range = maxMarketCap - minMarketCap;
                    
                    // Calculate tile size (1-6)
                    const size = range === 0 
                      ? 2 
                      : Math.max(1, Math.min(6, Math.ceil(((item.marketCap - minMarketCap) / range) * 5) + 1));
                    
                  // Define color based on percent change
                  const getColor = (percent: number) => {
                    if (percent > 0) {
                      // Positive - green shade from light green to #108c5c (dark green)
                      // Convert #108c5c to RGB: rgb(16, 140, 92)
                      
                      // Based on the image, use a palette of solid green colors
                      const greenPalette = [
                        '#a8e2c9', // Very light green (small positive change)
                        '#92dcba', // Light green
                        '#7cd6ab', // Medium-light green
                        '#65cf9c', // Medium green
                        '#4ec98d', // Medium-dark green
                        '#37c37e', // Dark green
                        '#20bd6f', // Darker green
                        '#108c5c'  // Darkest green (large positive change)
                      ];
                      
                      // Determine which color to use based on the percentage
                      const index = Math.min(Math.floor(percent * 3), greenPalette.length - 1);
                      return greenPalette[index];
                    } else {
                      // Negative - red shade
                      // Based on the image, use a palette of solid red colors
                      const redPalette = [
                        '#f5c8c8', // Very light red (small negative change)
                        '#f1b4b4', // Light red
                        '#eda0a0', // Medium-light red
                        '#e98c8c', // Medium red
                        '#e57878', // Medium-dark red
                        '#e16464', // Dark red
                        '#dd5050', // Darker red
                        '#d93c3c'  // Darkest red (large negative change)
                      ];
                      
                      // Determine which color to use based on the percentage
                      const index = Math.min(Math.floor(Math.abs(percent) * 3), redPalette.length - 1);
                      return redPalette[index];
                    }
                  };
                    
                    const bgColor = getColor(item.percentChange);
                    
                    // Use grid-column and grid-row spans for sizing
                    const style = {
                      gridColumn: `span ${size <= 3 ? size : 3}`,
                      gridRow: `span ${size > 3 ? 3 : size}`,
                      backgroundColor: bgColor,
                    };
                    
                    return (
                      <div 
                        key={itemIndex} 
                        style={style}
                        className="flex items-center justify-center text-white p-2 rounded"
                        title={`${item.name} (${item.symbol}): ${item.percentChange >= 0 ? '+' : ''}${item.percentChange.toFixed(2)}%`}
                      >
                        <div className="text-center">
                          <div className="text-sm font-bold">{item.symbol}</div>
                          <div className="text-xs">{item.percentChange >= 0 ? '+' : ''}{item.percentChange.toFixed(1)}%</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const MarketsPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [indexData, setIndexData] = useState<IndexData[]>([]);
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [sectorData, setSectorData] = useState<SectorData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the data.json file as text
        const response = await fetch('/data.json');
        const textData = await response.text();
        
        // Replace NaN with null in the text data before parsing as JSON
        const jsonData = JSON.parse(textData.replace(/NaN/g, 'null'));
        
        // Process the data into the format we need
        const processedData: IndexData[] = [];
        
        // Get the dates array from the data
        const dates = jsonData.dates || [];
        
        // Process NASDAQ data
        const nasdaqDataPoints = jsonData.bbg_PX_NASDAQ_CLOSE
          .map((value: number | null, i: number) => {
            if (value === null) return null;
            return {
              timestamp: dates[i]?.toString() || i.toString(),
              value: value * 1000 // Scale the value
            };
          })
          .filter((point: any) => point !== null) as { timestamp: string; value: number }[];
        
        // Process S&P 500 data
        const spDataPoints = jsonData.close_SPX
          .map((value: number | null, i: number) => {
            if (value === null) return null;
            return {
              timestamp: dates[i]?.toString() || i.toString(),
              value
            };
          })
          .filter((point: any) => point !== null) as { timestamp: string; value: number }[];
        
        // Process Dow Jones data
        const dowDataPoints = jsonData.fred_DJIA
          .map((value: number | null, i: number) => {
            if (value === null) return null;
            return {
              timestamp: dates[i]?.toString() || i.toString(),
              value
            };
          })
          .filter((point: any) => point !== null) as { timestamp: string; value: number }[];
        
        // Find last valid values for each index and calculate changes
        const findLastValidValues = (arr: (number | null)[]) => {
          let lastValue: number | null = null;
          let prevValue: number | null = null;
          
          // Start from the end and find the last two valid values
          for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] !== null) {
              if (lastValue === null) {
                lastValue = arr[i] as number;
              } else if (prevValue === null) {
                prevValue = arr[i] as number;
                break;
              }
            }
          }
          
          return { lastValue, prevValue };
        };
        
        // Get latest values for NASDAQ
        const { lastValue: lastNasdaqRaw, prevValue: prevNasdaqRaw } = findLastValidValues(jsonData.bbg_PX_NASDAQ_CLOSE);
        const lastNasdaqValue = lastNasdaqRaw !== null ? lastNasdaqRaw * 1000 : 0;
        const prevNasdaqValue = prevNasdaqRaw !== null ? prevNasdaqRaw * 1000 : 0;
        const nasdaqChange = lastNasdaqValue - prevNasdaqValue;
        const nasdaqPercentChange = prevNasdaqValue !== 0 ? (nasdaqChange / prevNasdaqValue) * 100 : 0;
        
        // Get latest values for S&P 500
        const { lastValue: lastSPValue, prevValue: prevSPValue } = findLastValidValues(jsonData.close_SPX);
        const spChange = (lastSPValue ?? 0) - (prevSPValue ?? 0);
        const spPercentChange = prevSPValue !== null && prevSPValue !== 0 ? (spChange / prevSPValue) * 100 : 0;
        
        // Get latest values for Dow Jones
        const { lastValue: lastDowValue, prevValue: prevDowValue } = findLastValidValues(jsonData.fred_DJIA);
        const dowChange = (lastDowValue ?? 0) - (prevDowValue ?? 0);
        const dowPercentChange = prevDowValue !== null && prevDowValue !== 0 ? (dowChange / prevDowValue) * 100 : 0;
        
        // Create the final IndexData objects
        processedData.push({
          name: "NASDAQ",
          color: "#FF0000", // Red
          value: lastNasdaqValue,
          change: nasdaqChange,
          percentChange: nasdaqPercentChange,
          dataPoints: nasdaqDataPoints
        });
        
        processedData.push({
          name: "S&P 500",
          color: "#FF1493", // Deep Pink
          value: lastSPValue ?? 0,
          change: spChange,
          percentChange: spPercentChange,
          dataPoints: spDataPoints
        });
        
        processedData.push({
          name: "Dow Jones",
          color: "#0000FF", // Blue
          value: lastDowValue ?? 0,
          change: dowChange,
          percentChange: dowPercentChange,
          dataPoints: dowDataPoints
        });
        
        // Sample news data - unchanged
        const sampleNewsData: NewsItem[] = [
          { heading: "Fed Signals Rate Cut Path as Inflation Slows", source: "CNBC", date: "17.03.25" },
          { heading: "Nvidia Earnings Beat Expectations, Stock Soars", source: "Bloomberg", date: "16.03.25" },
          { heading: "Treasury Yields Fall Ahead of Inflation Data", source: "Reuters", date: "15.03.25" },
          { heading: "Oil Prices Rise Amid Middle East Tensions", source: "WSJ", date: "15.03.25" },
          { heading: "Tech Stocks Rally on AI Optimism", source: "Financial Times", date: "14.03.25" },
        ];
        
        // Sample sector data - unchanged
        const sampleSectorData: SectorData[] = [
          {
            name: "Semiconductors & Semiconductor Equipment",
            items: [
              { symbol: "NVDA", name: "NVIDIA Corporation", value: 876.35, percentChange: 2.34, marketCap: 2160000000000 },
              { symbol: "AVGO", name: "Broadcom Inc.", value: 1325.17, percentChange: 1.56, marketCap: 615000000000 },
              { symbol: "TSM", name: "Taiwan Semiconductor", value: 139.33, percentChange: 0.88, marketCap: 723000000000 },
              { symbol: "AMD", name: "Advanced Micro Devices", value: 169.27, percentChange: 2.14, marketCap: 273000000000 },
              { symbol: "INTC", name: "Intel Corporation", value: 37.64, percentChange: -0.45, marketCap: 158000000000 },
              { symbol: "KLAC", name: "KLA Corporation", value: 670.87, percentChange: 1.21, marketCap: 90000000000 },
              { symbol: "LRCX", name: "Lam Research", value: 938.98, percentChange: 1.45, marketCap: 122000000000 },
              { symbol: "QCOM", name: "Qualcomm Inc.", value: 164.09, percentChange: 0.93, marketCap: 183000000000 }
            ]
          },
          {
            name: "Automobiles & Automobiles Equipment",
            items: [
              { symbol: "TSLA", name: "Tesla, Inc.", value: 178.02, percentChange: 1.24, marketCap: 566000000000 },
              { symbol: "TM", name: "Toyota Motor Corp.", value: 231.17, percentChange: 0.34, marketCap: 309000000000 },
              { symbol: "RACE", name: "Ferrari N.V.", value: 412.50, percentChange: 0.78, marketCap: 74000000000 },
              { symbol: "GM", name: "General Motors", value: 43.65, percentChange: 0.56, marketCap: 49000000000 }
            ]
          },
          {
            name: "Pharmaceuticals",
            items: [
              { symbol: "LLY", name: "Eli Lilly and Company", value: 765.20, percentChange: 2.36, marketCap: 727000000000 },
              { symbol: "NVO", name: "Novo Nordisk A/S", value: 128.30, percentChange: 1.47, marketCap: 570000000000 }
            ]
          }
        ];
        
        setIndexData(processedData);
        setNewsData(sampleNewsData);
        setSectorData(sampleSectorData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error processing market data:", error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Market" />
        
        <h2 className="text-center text-xl font-bold py-4">
          COMP 4981 - WIL 2 - ADVANCED TIME SERIES FORECASTING
        </h2>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <IndexChart data={indexData} />
              <NewsSection news={newsData} />
            </div>
            
            <HeatMap 
              sectors={sectorData} 
              selectedIndustry={selectedIndustry} 
              setSelectedIndustry={setSelectedIndustry} 
            />
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default MarketsPage;