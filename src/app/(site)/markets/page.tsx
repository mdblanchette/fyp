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
const IndexChart = ({ data, visibleIndices, toggleIndex }: { 
  data: IndexData[], 
  visibleIndices: { [key: string]: boolean },
  toggleIndex: (name: string) => void
}) => {
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
  
  // Find min/max to set domain for YAxis - only for visible indices
  const allValues = chartData.flatMap(point => 
    data
      .filter(index => visibleIndices[index.name])
      .map(index => point[index.name])
      .filter(Boolean)
  );
  
  const minValue = allValues.length > 0 ? Math.min(...allValues) * 0.995 : 0; // Add small buffer
  const maxValue = allValues.length > 0 ? Math.max(...allValues) * 1.005 : 0; // Add small buffer

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Index Chart</h3>
      
      {/* Index information */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((index, i) => (
          <div 
            key={i} 
            className={`bg-gray-50 p-2 rounded cursor-pointer transition-opacity duration-300 ${visibleIndices[index.name] ? 'opacity-100' : 'opacity-60'}`}
            onClick={() => toggleIndex(index.name)}
          >
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
              visibleIndices[index.name] && (
                <Line
                  key={i}
                  type="monotone"
                  dataKey={index.name}
                  stroke={index.color}
                  dot={false}
                  activeDot={{ r: 8 }}
                  strokeWidth={1.5}
                />
              )
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
  
  // New state to track which indices are visible on the chart
  const [visibleIndices, setVisibleIndices] = useState<{ [key: string]: boolean }>({
    "NASDAQ": true,
    "S&P 500": true,
    "Dow Jones": true
  });
  
  // Function to toggle visibility of an index
  const toggleIndex = (indexName: string) => {
    setVisibleIndices(prev => ({
      ...prev,
      [indexName]: !prev[indexName]
    }));
  };
  
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
          { heading: "Fed Maintains Interest Rates Amid Strong Job Market", source: "CNBC", date: "26.04.25" },
          { heading: "Apple's Q1 Results Exceed Expectations on AI Integration", source: "Bloomberg", date: "25.04.25" },
          { heading: "Treasury Yields Rise as Inflation Concerns Persist", source: "Reuters", date: "24.04.25" },
          { heading: "Oil Prices Stabilize Following Production Agreement", source: "WSJ", date: "23.04.25" },
          { heading: "Tech Sector Leads Market Rally on Robust Earnings", source: "Financial Times", date: "22.04.25" },
        ];
        
        // Sample sector data - unchanged
// Updated sample sector data with more industries and April 26, 2025 prices
        const sampleSectorData: SectorData[] = [
          {
            name: "Technology",
            items: [
              { symbol: "AAPL", name: "Apple Inc.", value: 238.76, percentChange: 1.32, marketCap: 3740000000000 },
              { symbol: "MSFT", name: "Microsoft Corporation", value: 492.15, percentChange: 0.87, marketCap: 3660000000000 },
              { symbol: "GOOGL", name: "Alphabet Inc.", value: 213.42, percentChange: 1.15, marketCap: 2620000000000 },
              { symbol: "AMZN", name: "Amazon.com Inc.", value: 245.73, percentChange: 2.05, marketCap: 2580000000000 },
              { symbol: "META", name: "Meta Platforms Inc.", value: 587.23, percentChange: 1.67, marketCap: 1480000000000 },
              { symbol: "CRM", name: "Salesforce Inc.", value: 352.18, percentChange: 0.76, marketCap: 326000000000 },
              { symbol: "ADBE", name: "Adobe Inc.", value: 582.40, percentChange: -0.32, marketCap: 254000000000 }
            ]
          },
          {
            name: "Semiconductors & Semiconductor Equipment",
            items: [
              { symbol: "NVDA", name: "NVIDIA Corporation", value: 1042.87, percentChange: 2.54, marketCap: 2570000000000 },
              { symbol: "AVGO", name: "Broadcom Inc.", value: 1486.32, percentChange: 1.21, marketCap: 688000000000 },
              { symbol: "TSM", name: "Taiwan Semiconductor", value: 172.58, percentChange: 1.76, marketCap: 895000000000 },
              { symbol: "AMD", name: "Advanced Micro Devices", value: 212.45, percentChange: 2.23, marketCap: 343000000000 },
              { symbol: "INTC", name: "Intel Corporation", value: 41.25, percentChange: -0.87, marketCap: 174000000000 },
              { symbol: "KLAC", name: "KLA Corporation", value: 782.35, percentChange: 0.91, marketCap: 105000000000 },
              { symbol: "LRCX", name: "Lam Research", value: 1023.76, percentChange: 1.35, marketCap: 134000000000 },
              { symbol: "QCOM", name: "Qualcomm Inc.", value: 204.83, percentChange: 1.42, marketCap: 228000000000 }
            ]
          },
          {
            name: "Automobiles & Automobiles Equipment",
            items: [
              { symbol: "TSLA", name: "Tesla, Inc.", value: 225.63, percentChange: 3.74, marketCap: 718000000000 },
              { symbol: "TM", name: "Toyota Motor Corp.", value: 258.42, percentChange: 0.62, marketCap: 345000000000 },
              { symbol: "RIVN", name: "Rivian Automotive", value: 35.47, percentChange: 4.23, marketCap: 34200000000 },
              { symbol: "F", name: "Ford Motor Company", value: 18.74, percentChange: 0.32, marketCap: 75000000000 },
              { symbol: "GM", name: "General Motors", value: 51.28, percentChange: 0.85, marketCap: 58000000000 },
              { symbol: "LCID", name: "Lucid Group, Inc.", value: 7.82, percentChange: -2.25, marketCap: 18500000000 },
              { symbol: "RACE", name: "Ferrari N.V.", value: 456.79, percentChange: 1.18, marketCap: 82000000000 }
            ]
          },
          {
            name: "Pharmaceuticals & Biotechnology",
            items: [
              { symbol: "LLY", name: "Eli Lilly and Company", value: 892.47, percentChange: 1.86, marketCap: 847000000000 },
              { symbol: "NVO", name: "Novo Nordisk A/S", value: 154.26, percentChange: 2.13, marketCap: 685000000000 },
              { symbol: "JNJ", name: "Johnson & Johnson", value: 178.53, percentChange: 0.42, marketCap: 429000000000 },
              { symbol: "PFE", name: "Pfizer Inc.", value: 32.87, percentChange: -0.76, marketCap: 186000000000 },
              { symbol: "MRNA", name: "Moderna, Inc.", value: 125.42, percentChange: 2.87, marketCap: 48000000000 },
              { symbol: "BNTX", name: "BioNTech SE", value: 112.35, percentChange: 1.25, marketCap: 27500000000 },
              { symbol: "BIIB", name: "Biogen Inc.", value: 278.65, percentChange: -0.42, marketCap: 40800000000 }
            ]
          },
          {
            name: "Energy",
            items: [
              { symbol: "XOM", name: "Exxon Mobil Corp.", value: 127.82, percentChange: 0.82, marketCap: 513000000000 },
              { symbol: "CVX", name: "Chevron Corporation", value: 183.24, percentChange: 0.68, marketCap: 342000000000 },
              { symbol: "SHEL", name: "Shell plc", value: 76.42, percentChange: 1.13, marketCap: 251000000000 },
              { symbol: "BP", name: "BP p.l.c.", value: 43.87, percentChange: 0.92, marketCap: 123000000000 },
              { symbol: "SLB", name: "Schlumberger Limited", value: 65.23, percentChange: -0.35, marketCap: 93200000000 },
              { symbol: "COP", name: "ConocoPhillips", value: 142.37, percentChange: 1.25, marketCap: 165000000000 }
            ]
          },
          {
            name: "Financial Services",
            items: [
              { symbol: "JPM", name: "JPMorgan Chase & Co.", value: 248.76, percentChange: 0.57, marketCap: 714000000000 },
              { symbol: "BAC", name: "Bank of America Corp.", value: 52.38, percentChange: 0.23, marketCap: 412000000000 },
      { symbol: "WFC", name: "Wells Fargo & Company", value: 78.25, percentChange: 0.41, marketCap: 276000000000 },
      { symbol: "V", name: "Visa Inc.", value: 312.47, percentChange: 0.92, marketCap: 622000000000 },
      { symbol: "MA", name: "Mastercard Incorporated", value: 532.18, percentChange: 0.75, marketCap: 493000000000 },
      { symbol: "GS", name: "The Goldman Sachs Group", value: 542.36, percentChange: 1.12, marketCap: 175000000000 },
      { symbol: "BRK.B", name: "Berkshire Hathaway", value: 487.25, percentChange: 0.35, marketCap: 708000000000 },
      { symbol: "AXP", name: "American Express Company", value: 267.83, percentChange: -0.27, marketCap: 192000000000 }
    ]
  },
  {
    name: "Consumer Staples",
    items: [
      { symbol: "PG", name: "The Procter & Gamble Company", value: 198.42, percentChange: 0.23, marketCap: 468000000000 },
      { symbol: "KO", name: "The Coca-Cola Company", value: 78.35, percentChange: 0.45, marketCap: 338000000000 },
      { symbol: "PEP", name: "PepsiCo, Inc.", value: 214.76, percentChange: 0.37, marketCap: 295000000000 },
      { symbol: "COST", name: "Costco Wholesale Corporation", value: 892.53, percentChange: 1.23, marketCap: 395000000000 },
      { symbol: "WMT", name: "Walmart Inc.", value: 112.43, percentChange: 0.56, marketCap: 302000000000 },
      { symbol: "MDLZ", name: "Mondelez International", value: 87.25, percentChange: -0.32, marketCap: 117000000000 }
    ]
  },
  {
    name: "Communication Services",
    items: [
      { symbol: "NFLX", name: "Netflix, Inc.", value: 752.36, percentChange: 1.87, marketCap: 327000000000 },
      { symbol: "DIS", name: "The Walt Disney Company", value: 146.82, percentChange: 0.73, marketCap: 268000000000 },
      { symbol: "CMCSA", name: "Comcast Corporation", value: 56.47, percentChange: -0.52, marketCap: 224000000000 },
      { symbol: "TMUS", name: "T-Mobile US, Inc.", value: 187.25, percentChange: 0.63, marketCap: 218000000000 },
      { symbol: "VZ", name: "Verizon Communications", value: 47.82, percentChange: 0.15, marketCap: 201000000000 },
      { symbol: "T", name: "AT&T Inc.", value: 25.43, percentChange: -0.38, marketCap: 182000000000 }
    ]
  },
  {
    name: "Healthcare Equipment & Services",
    items: [
      { symbol: "UNH", name: "UnitedHealth Group Incorporated", value: 642.75, percentChange: 0.87, marketCap: 592000000000 },
      { symbol: "CVS", name: "CVS Health Corporation", value: 92.47, percentChange: 0.53, marketCap: 118000000000 },
      { symbol: "ISRG", name: "Intuitive Surgical, Inc.", value: 523.18, percentChange: 1.45, marketCap: 185000000000 },
      { symbol: "ABT", name: "Abbott Laboratories", value: 142.36, percentChange: 0.75, marketCap: 247000000000 },
      { symbol: "TMO", name: "Thermo Fisher Scientific", value: 674.83, percentChange: 0.92, marketCap: 258000000000 },
      { symbol: "DHR", name: "Danaher Corporation", value: 324.57, percentChange: 0.63, marketCap: 240000000000 }
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
              <IndexChart 
                data={indexData} 
                visibleIndices={visibleIndices} 
                toggleIndex={toggleIndex} 
              />
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