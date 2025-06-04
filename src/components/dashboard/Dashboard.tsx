import React from "react";
import { MetricCard } from "./MetricCard";
import { Navigation } from "./Navigation";
import { ProjectionsChart } from "./ProjectionsChart";
import {
  Users,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Calendar,
  Filter,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface MetricData {
  title: string;
  value: string | number;
  changePercentage: number;
  timePeriod: string;
  icon: React.ReactNode;
}

export const Dashboard: React.FC = () => {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">{currentDate}</span>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Calendar className="h-4 w-4 mr-1" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Download className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
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

          {/* Chart Section */}
          <ProjectionsChart />
        </div>
      </div>
    </div>
  );
};
