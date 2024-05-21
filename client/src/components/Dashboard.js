import React, { useEffect, useState } from "react";
import Graph from "./Graph";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [range, setRange] = useState("1h");

  const fetchData = async (range, setData) => {
    try {
      const response = await fetch(`/api/data?range=${range}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(range, setData);
    const interval = setInterval(() => fetchData(range, setData), 10000);
    return () => clearInterval(interval);
  }, [range]);

  return (
    <div>
      <h1>Network Monitoring Dashboard</h1>
      <select value={range} onChange={(e) => setRange(e.target.value)}>
        <option value="1h">1 Hour</option>
        <option value="24h">24 Hours</option>
        <option value="7d">7 Days</option>
      </select>
      <Graph data={data} />
    </div>
  );
};

export default Dashboard;
