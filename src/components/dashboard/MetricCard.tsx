import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  changePercentage: number;
  timePeriod: string;
  icon: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  changePercentage,
  timePeriod,
  icon,
}) => {
  const isPositive = changePercentage >= 0;
  const changeColor = isPositive ? "text-emerald-600" : "text-red-500";
  const changeIcon = isPositive ? "↗" : "↘";

  return (
    <Card className="relative overflow-hidden bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="flex items-center space-x-1 text-sm">
          <span className={cn("font-medium", changeColor)}>
            {changeIcon} {Math.abs(changePercentage).toFixed(2)}%
          </span>
          <span className="text-gray-500">{timePeriod}</span>
        </div>
      </CardContent>
    </Card>
  );
};
