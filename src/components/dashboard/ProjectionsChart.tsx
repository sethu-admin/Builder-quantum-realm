import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { month: "Jan", projections: 60, actuals: 45 },
  { month: "Feb", projections: 80, actuals: 65 },
  { month: "Mar", projections: 95, actuals: 85 },
  { month: "Apr", projections: 90, actuals: 80 },
  { month: "May", projections: 75, actuals: 60 },
  { month: "Jun", projections: 100, actuals: 85 },
  { month: "Jul", projections: 65, actuals: 45 },
  { month: "Aug", projections: 55, actuals: 40 },
  { month: "Sep", projections: 85, actuals: 70 },
  { month: "Oct", projections: 75, actuals: 60 },
  { month: "Nov", projections: 90, actuals: 75 },
  { month: "Dec", projections: 95, actuals: 80 },
];

export const ProjectionsChart: React.FC = () => {
  return (
    <Card className="mt-6 rounded-3xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium text-gray-700">
          PROJECTIONS VS ACTUALS
        </CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6B7280" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Bar
                dataKey="projections"
                fill="#E5E7EB"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey="actuals"
                fill="#6366F1"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
