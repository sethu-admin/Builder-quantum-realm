import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Search,
  ArrowLeftRight,
  Calendar,
  CreditCard,
  MapPin,
  Utensils,
  Clock,
  HelpCircle,
  User,
  List,
  CheckCircle,
  Ticket,
  Train,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const [fromCity, setFromCity] = useState("New Delhi");
  const [toCity, setToCity] = useState("New York");
  const [selectedDate, setSelectedDate] = useState("");
  const [freeCancellation, setFreeCancellation] = useState(true);

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = () => {
    if (!fromCity || !toCity || !selectedDate) {
      alert("Please fill in all required fields");
      return;
    }

    // Here you would typically navigate to search results
    console.log(
      "Searching buses from",
      fromCity,
      "to",
      toCity,
      "on",
      selectedDate,
    );
    alert(`Searching buses from ${fromCity} to ${toCity} on ${selectedDate}`);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const featureCards = [
    {
      icon: <List className="h-6 w-6" />,
      title: "Check PNR status",
      color: "bg-blue-500",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Live train status",
      color: "bg-green-500",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Order Food",
      color: "bg-orange-500",
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Rail Madad",
      color: "bg-purple-500",
    },
  ];

  const whyBookFeatures = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "redRoute confirm",
      description: "Confirm ticket on waitlisted trains",
    },
    {
      icon: <Ticket className="h-8 w-8 text-blue-500" />,
      title: "Seat Guarantee",
      description: "on waitlisted tickets or 3X refund",
    },
    {
      icon: <Train className="h-8 w-8 text-purple-500" />,
      title: "Connecting trains",
      description: "Connecting trains option available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">redRoute</div>
              <div className="text-sm text-gray-500">-- across the limit</div>
            </div>

            {/* Account Button */}
            <Button variant="outline" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Train Animation Section */}
      <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Animated Train */}
        <div className="relative z-10 h-full flex items-center">
          <div className="animate-train">
            <div className="flex items-center">
              {/* Train Engine */}
              <div className="relative">
                <Train className="h-12 w-12 text-white" />
                {/* Smoke animation */}
                <div className="absolute -top-2 left-8">
                  <div className="animate-smoke-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
                <div className="absolute -top-1 left-10">
                  <div className="animate-smoke-2 w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
                </div>
                <div className="absolute -top-3 left-12">
                  <div className="animate-smoke-3 w-1 h-1 bg-white rounded-full opacity-30"></div>
                </div>
              </div>

              {/* Train Cars */}
              <div className="flex ml-2 space-x-1">
                <div className="w-8 h-6 bg-white bg-opacity-80 rounded-sm"></div>
                <div className="w-8 h-6 bg-white bg-opacity-70 rounded-sm"></div>
                <div className="w-8 h-6 bg-white bg-opacity-60 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Railway Track */}
        <div className="absolute bottom-4 left-0 right-0 h-1">
          <div className="w-full h-0.5 bg-white bg-opacity-30"></div>
          <div className="flex justify-between mt-1">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="w-2 h-1 bg-white bg-opacity-40"></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes trainMove {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes smoke1 {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0;
          }
        }

        @keyframes smoke2 {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translateY(-25px) scale(1.8);
            opacity: 0;
          }
        }

        @keyframes smoke3 {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-30px) scale(2);
            opacity: 0;
          }
        }

        .animate-train {
          animation: trainMove 8s linear infinite;
        }

        .animate-smoke-1 {
          animation: smoke1 1s ease-out infinite;
        }

        .animate-smoke-2 {
          animation: smoke2 1.2s ease-out infinite 0.2s;
        }

        .animate-smoke-3 {
          animation: smoke3 1.4s ease-out infinite 0.4s;
        }
      `}</style>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">REDROUTE</h1>
          <p className="text-lg text-gray-600">
            Bookings open for summer holidays
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 p-6 shadow-lg rounded-3xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
              {/* From */}
              <div className="space-y-2">
                <Label htmlFor="from" className="text-sm font-medium">
                  From
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="from"
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={swapCities}
                  className="rounded-full h-10 w-10 p-0"
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>

              {/* To */}
              <div className="space-y-2">
                <Label htmlFor="to" className="text-sm font-medium">
                  To
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="to"
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Date of Journey
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 h-12 text-lg rounded-2xl"
                    placeholder="Select date"
                    min={today}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-1">
                <Button
                  onClick={handleSearch}
                  className="w-full h-12 text-lg bg-red-600 hover:bg-red-700 rounded-2xl"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Search bus
                </Button>
              </div>
            </div>

            {/* Free Cancellation */}
            <div className="flex items-center justify-between mt-6 p-4 bg-green-50 rounded-2xl">
              <div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="free-cancellation"
                    checked={freeCancellation}
                    onCheckedChange={setFreeCancellation}
                  />
                  <Label htmlFor="free-cancellation" className="font-medium">
                    Free Cancellation
                  </Label>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  ₹0 cancellation fee
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featureCards.map((feature, index) => (
            <Card
              key={index}
              className="p-4 text-center hover:shadow-lg transition-shadow cursor-pointer rounded-2xl"
            >
              <CardContent className="p-0">
                <div
                  className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl ${feature.color} text-white mb-3 mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-sm font-medium">{feature.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Book With redRoute Section */}
        <Card className="mb-8 p-6 rounded-3xl">
          <CardContent className="p-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Why Book With redRoute</h2>
              <Button variant="outline" className="rounded-2xl">
                View All
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyBookFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Offers Section */}
        <Card className="p-6 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-3xl">
          <CardContent className="p-0 text-center">
            <h2 className="text-3xl font-bold mb-2">HAPPY JOURNEY !!</h2>
            <p className="text-lg opacity-90">
              Special offers and deals available for your next trip
            </p>
            <Button className="mt-4 bg-white text-orange-500 hover:bg-gray-100 rounded-2xl">
              View Offers
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
