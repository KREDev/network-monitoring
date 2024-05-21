import React from "react";

const GrafanaDashboard = () => {
  const grafanaUrl =
    "http://localhost:3000/d/your_dashboard_uid/your_dashboard_name";

  return (
    <div>
      <iframe
        src={grafanaUrl}
        width="100%"
        height="800"
        frameBorder="0"
        title="Grafana Dashboard"
      ></iframe>
    </div>
  );
};

export default GrafanaDashboard;
