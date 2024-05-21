import React, { useState, useEffect } from "react";
import axios from "axios";

const MetricDisplay = () => {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    // Отримати метрики з сервера при завантаженні компонента
    axios
      .get("http://localhost:5000/api/metrics")
      .then((response) => {
        setMetrics(response.data);
      })
      .catch((error) => {
        console.error("Error fetching metrics:", error);
      });
  }, []);

  return (
    <div>
      <h2>Network Metrics</h2>
      <ul>
        {metrics.map((metric, index) => (
          <li key={index}>
            Load: {metric.network_load}, Latency: {metric.network_latency},
            Packet Loss: {metric.packet_loss}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricDisplay;
