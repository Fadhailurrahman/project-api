import { customersData } from "../data/customersData.js";

export const getAnalyticsSummary = (req, res) => {
  if (customersData.length === 0) {
    return res.json({
      status: "error",
      message: "Customer data not loaded yet"
    });
  }

  const totalCustomers = customersData.length;

  const avgSpend =
    customersData.reduce((sum, c) => sum + Number(c.monthly_spend || 0), 0) /
    totalCustomers;

  const avgDataUsage =
    customersData.reduce((sum, c) => sum + Number(c.avg_data_usage_gb || 0), 0) /
    totalCustomers;

  const totalComplaints = customersData.reduce(
    (sum, c) => sum + Number(c.complaint_count || 0),
    0
  );

  const brandCount = {};
  customersData.forEach((c) => {
    brandCount[c.device_brand] = (brandCount[c.device_brand] || 0) + 1;
  });

  const topDeviceBrand = Object.entries(brandCount).sort((a, b) => b[1] - a[1])[0][0];

  res.json({
    status: "success",
    message: "Analytics summary loaded",
    data: {
      total_customers: totalCustomers,
      avg_spend: Math.round(avgSpend),
      avg_data_usage: Number(avgDataUsage.toFixed(2)),
      top_device_brand: topDeviceBrand,
      total_complaints: totalComplaints
    }
  });
};
