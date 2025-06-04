import React from "react";
import { MetricCard } from "./MetricCard";
import { Users, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";

interface MetricData {
  title: string;
  value: string | number;
  changePercentage: number;
  timePeriod: string;
  icon: React.ReactNode;
}

export const Dashboard: React.FC = () => {
  const metrics: MetricData[] = [
    {
      title: "Customers",
      value: "36,254",
      changePercentage: 5.27,
      timePeriod: "Since last month",
      icon: <Users className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Orders",
      value: "5,543",
      changePercentage: -1.08,
      timePeriod: "Since last month",
      icon: <ShoppingCart className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Revenue",
      value: "$6,254",
      changePercentage: -7.0,
      timePeriod: "Since last month",
      icon: <DollarSign className="h-5 w-5 text-blue-600" />,
    },
    {
      title: "Growth",
      value: "+30.56%",
      changePercentage: 4.87,
      timePeriod: "Since last month",
      icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              changePercentage={metric.changePercentage}
              timePeriod={metric.timePeriod}
              icon={metric.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
