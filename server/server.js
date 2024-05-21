const express = require("express");
const { InfluxDB, Point } = require("@influxdata/influxdb-client");

const app = express();
const port = process.env.PORT || 5000;

// Підключення до бази даних InfluxDB
const influxDB_URL = "http://localhost:8086";
const token = "your-influxdb-token";
const org = "your-org";
const bucket = "your-bucket";
const client = new InfluxDB({ url: influxDB_URL, token });

// Маршрут для збереження метрик
app.post("/api/metrics", async (req, res) => {
  try {
    const writeAPI = client.getWriteApi(org, bucket);
    const point = new Point("network_metrics")
      .tag("device", "router")
      .floatField("network_load", Math.random() * 100) // Штучні дані
      .floatField("network_latency", Math.random() * 50) // Штучні дані
      .floatField("packet_loss", Math.random() * 5); // Штучні дані
    writeAPI.writePoint(point);
    await writeAPI.close();
    res.sendStatus(200);
  } catch (error) {
    console.error("Error saving metrics:", error);
    res.status(500).send(error.toString());
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
