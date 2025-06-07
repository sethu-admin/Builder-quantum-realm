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

      {/* Realistic Bus Animation Section */}
      <div className="relative h-48 overflow-hidden">
        {/* Sky Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400 via-blue-400 to-green-300"></div>

        {/* Mountains/Hills Background */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Back Hills */}
          <svg
            className="absolute bottom-0 w-full h-32"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,200 L0,80 Q200,20 400,60 T800,40 Q1000,60 1200,80 L1200,200 Z"
              fill="rgba(139, 69, 19, 0.3)"
            />
          </svg>

          {/* Front Hills */}
          <svg
            className="absolute bottom-0 w-full h-24"
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 L0,60 Q300,20 600,50 T1200,40 L1200,150 Z"
              fill="rgba(34, 197, 94, 0.6)"
            />
          </svg>

          {/* Road */}
          <div className="absolute bottom-6 left-0 right-0 h-2 bg-gray-700"></div>
          <div className="absolute bottom-7 left-0 right-0 h-0.5">
            <div className="w-full h-full bg-yellow-300 opacity-80 animate-dash"></div>
          </div>
        </div>

        {/* Trees */}
        <div className="absolute bottom-12 left-20">
          <svg className="w-8 h-12 animate-sway-1" viewBox="0 0 40 60">
            <rect x="18" y="45" width="4" height="15" fill="#8B4513" />
            <circle cx="20" cy="35" r="12" fill="#22C55E" />
          </svg>
        </div>

        <div className="absolute bottom-12 left-40">
          <svg className="w-6 h-10 animate-sway-2" viewBox="0 0 30 50">
            <rect x="13" y="35" width="4" height="15" fill="#8B4513" />
            <circle cx="15" cy="25" r="10" fill="#16A34A" />
          </svg>
        </div>

        <div className="absolute bottom-12 right-32">
          <svg className="w-7 h-11 animate-sway-3" viewBox="0 0 35 55">
            <rect x="15" y="40" width="4" height="15" fill="#8B4513" />
            <circle cx="17" cy="30" r="11" fill="#22C55E" />
          </svg>
        </div>

        {/* Animated Bus */}
        <div className="relative z-10 h-full flex items-end pb-10">
          <div className="animate-bus-move">
            <svg className="w-16 h-10" viewBox="0 0 100 60">
              {/* Bus Body */}
              <rect x="5" y="15" width="80" height="35" rx="5" fill="#EC4899" />
              <rect
                x="10"
                y="20"
                width="70"
                height="20"
                rx="2"
                fill="#DB2777"
              />

              {/* Windows */}
              <rect x="15" y="22" width="12" height="8" rx="1" fill="#93C5FD" />
              <rect x="30" y="22" width="12" height="8" rx="1" fill="#93C5FD" />
              <rect x="45" y="22" width="12" height="8" rx="1" fill="#93C5FD" />
              <rect x="60" y="22" width="12" height="8" rx="1" fill="#93C5FD" />

              {/* Windshield */}
              <rect x="75" y="22" width="8" height="15" rx="1" fill="#DBEAFE" />

              {/* Wheels */}
              <circle cx="20" cy="47" r="8" fill="#374151" />
              <circle cx="70" cy="47" r="8" fill="#374151" />
              <circle cx="20" cy="47" r="5" fill="#9CA3AF" />
              <circle cx="70" cy="47" r="5" fill="#9CA3AF" />

              {/* Details */}
              <rect x="8" y="35" width="6" height="4" rx="1" fill="#FBBF24" />
              <rect x="85" y="35" width="6" height="4" rx="1" fill="#EF4444" />
            </svg>
          </div>
        </div>

        {/* Clouds */}
        <div className="absolute top-4 left-16 animate-cloud-1">
          <svg className="w-12 h-6" viewBox="0 0 60 30">
            <circle cx="15" cy="15" r="8" fill="rgba(255,255,255,0.8)" />
            <circle cx="25" cy="12" r="10" fill="rgba(255,255,255,0.8)" />
            <circle cx="35" cy="15" r="8" fill="rgba(255,255,255,0.8)" />
          </svg>
        </div>

        <div className="absolute top-8 right-24 animate-cloud-2">
          <svg className="w-10 h-5" viewBox="0 0 50 25">
            <circle cx="12" cy="12" r="6" fill="rgba(255,255,255,0.6)" />
            <circle cx="20" cy="10" r="8" fill="rgba(255,255,255,0.6)" />
            <circle cx="28" cy="12" r="6" fill="rgba(255,255,255,0.6)" />
          </svg>
        </div>

        {/* Hero Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
              India's No.1 online
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
              bus ticket booking site
            </h2>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes busMove {
          0% {
            transform: translateX(-120px);
          }
          100% {
            transform: translateX(calc(100vw + 120px));
          }
        }

        @keyframes cloud1 {
          0% {
            transform: translateX(-60px);
          }
          100% {
            transform: translateX(calc(100vw + 60px));
          }
        }

        @keyframes cloud2 {
          0% {
            transform: translateX(-50px);
          }
          100% {
            transform: translateX(calc(100vw + 50px));
          }
        }

        @keyframes sway1 {
          0%,
          100% {
            transform: rotate(-2deg);
          }
          50% {
            transform: rotate(2deg);
          }
        }

        @keyframes sway2 {
          0%,
          100% {
            transform: rotate(1deg);
          }
          50% {
            transform: rotate(-1deg);
          }
        }

        @keyframes sway3 {
          0%,
          100% {
            transform: rotate(-1deg);
          }
          50% {
            transform: rotate(1deg);
          }
        }

        @keyframes dash {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 0%;
          }
        }

        .animate-bus-move {
          animation: busMove 12s linear infinite;
        }

        .animate-cloud-1 {
          animation: cloud1 25s linear infinite;
        }

        .animate-cloud-2 {
          animation: cloud2 30s linear infinite 5s;
        }

        .animate-sway-1 {
          animation: sway1 3s ease-in-out infinite;
        }

        .animate-sway-2 {
          animation: sway2 4s ease-in-out infinite 1s;
        }

        .animate-sway-3 {
          animation: sway3 3.5s ease-in-out infinite 2s;
        }

        .animate-dash {
          background-image: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 10px,
            #fde047 10px,
            #fde047 20px
          );
          animation: dash 2s linear infinite;
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
