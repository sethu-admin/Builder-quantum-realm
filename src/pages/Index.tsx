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
  Bus,
} from "lucide-react";

const Index = () => {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-red-600">redRoute</div>
              <div className="text-sm text-gray-500">-- across the limit</div>
            </div>

            <Button
              variant="outline"
              className="flex items-center space-x-2 rounded-lg"
            >
              <User className="h-4 w-4" />
              <span>Account</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Integrated Booking Form */}
      <div className="relative">
        {/* Background Landscape */}
        <div className="relative h-80 bg-gradient-to-r from-slate-700 via-blue-700 to-purple-600 overflow-hidden">
          {/* Hills Background */}
          <div className="absolute bottom-0 left-0 right-0">
            {/* Back Hills */}
            <svg
              className="absolute bottom-0 w-full h-48"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              <path
                d="M0,200 L0,80 Q300,30 600,60 T1200,70 L1200,200 Z"
                fill="rgba(34, 197, 94, 0.3)"
              />
            </svg>

            {/* Front Hills */}
            <svg
              className="absolute bottom-0 w-full h-32"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,120 L0,50 Q400,20 800,40 T1200,35 L1200,120 Z"
                fill="rgba(34, 197, 94, 0.5)"
              />
            </svg>

            {/* Road */}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-800"></div>
            <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-yellow-300"></div>
          </div>

          {/* Trees */}
          <div className="absolute bottom-6 left-32">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568" />
              <circle cx="20" cy="35" r="12" fill="#22C55E" />
            </svg>
          </div>

          <div className="absolute bottom-6 left-60">
            <svg className="w-6 h-10" viewBox="0 0 30 50">
              <rect x="13" y="35" width="4" height="15" fill="#4A5568" />
              <circle cx="15" cy="25" r="10" fill="#16A34A" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-48">
            <svg className="w-8 h-12" viewBox="0 0 40 60">
              <rect x="18" y="45" width="4" height="15" fill="#4A5568" />
              <circle cx="20" cy="35" r="12" fill="#22C55E" />
            </svg>
          </div>

          <div className="absolute bottom-6 right-72">
            <svg className="w-7 h-11" viewBox="0 0 35 55">
              <rect x="15" y="40" width="4" height="15" fill="#4A5568" />
              <circle cx="17" cy="30" r="11" fill="#16A34A" />
            </svg>
          </div>

          {/* Modern Volvo-Style Bus */}
          <div className="absolute bottom-6 right-20">
            <svg className="w-48 h-28" viewBox="0 0 240 140">
              {/* Bus Shadow */}
              <ellipse
                cx="120"
                cy="130"
                rx="110"
                ry="8"
                fill="rgba(0,0,0,0.3)"
              />

              {/* Bus Body - Sleek Modern Design */}
              <defs>
                <linearGradient
                  id="busGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#F8FAFC" />
                  <stop offset="50%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>
                <linearGradient
                  id="windowGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#DBEAFE" />
                  <stop offset="100%" stopColor="#93C5FD" />
                </linearGradient>
              </defs>

              {/* Main Bus Body */}
              <rect
                x="8"
                y="25"
                width="180"
                height="70"
                rx="18"
                fill="url(#busGradient)"
                stroke="#94A3B8"
                strokeWidth="1"
              />

              {/* Lower Body Panel */}
              <rect
                x="12"
                y="75"
                width="172"
                height="20"
                rx="8"
                fill="#475569"
              />

              {/* Sleek Window Strip */}
              <rect
                x="25"
                y="35"
                width="140"
                height="25"
                rx="8"
                fill="url(#windowGradient)"
                stroke="#1E293B"
                strokeWidth="1"
              />

              {/* Individual Window Segments */}
              <rect
                x="30"
                y="38"
                width="22"
                height="19"
                rx="2"
                fill="#DBEAFE"
                opacity="0.9"
              />
              <rect
                x="55"
                y="38"
                width="22"
                height="19"
                rx="2"
                fill="#DBEAFE"
                opacity="0.9"
              />
              <rect
                x="80"
                y="38"
                width="22"
                height="19"
                rx="2"
                fill="#DBEAFE"
                opacity="0.9"
              />
              <rect
                x="105"
                y="38"
                width="22"
                height="19"
                rx="2"
                fill="#DBEAFE"
                opacity="0.9"
              />
              <rect
                x="130"
                y="38"
                width="22"
                height="19"
                rx="2"
                fill="#DBEAFE"
                opacity="0.9"
              />

              {/* Front Section - Modern Design */}
              <path
                d="M 188 25 Q 215 25 225 50 L 225 85 Q 215 95 188 95 Z"
                fill="url(#busGradient)"
                stroke="#94A3B8"
                strokeWidth="1"
              />

              {/* Front Windshield */}
              <path
                d="M 188 35 Q 210 35 218 50 L 218 75 Q 210 85 188 85 Z"
                fill="#BFDBFE"
                stroke="#1E293B"
                strokeWidth="1"
              />

              {/* Modern Headlights */}
              <ellipse
                cx="220"
                cy="45"
                rx="8"
                ry="6"
                fill="#FEF3C7"
                stroke="#F59E0B"
                strokeWidth="1"
              />
              <ellipse
                cx="220"
                cy="65"
                rx="8"
                ry="6"
                fill="#FDE68A"
                stroke="#F59E0B"
                strokeWidth="1"
              />

              {/* LED Strip Lights */}
              <rect x="218" y="52" width="6" height="8" rx="3" fill="#60A5FA" />

              {/* Modern Wheels */}
              <circle cx="40" cy="110" r="20" fill="#1F2937" />
              <circle cx="40" cy="110" r="16" fill="#374151" />
              <circle cx="40" cy="110" r="10" fill="#6B7280" />
              <circle cx="40" cy="110" r="6" fill="#9CA3AF" />

              <circle cx="165" cy="110" r="20" fill="#1F2937" />
              <circle cx="165" cy="110" r="16" fill="#374151" />
              <circle cx="165" cy="110" r="10" fill="#6B7280" />
              <circle cx="165" cy="110" r="6" fill="#9CA3AF" />

              {/* Modern Alloy Rims */}
              <g stroke="#E5E7EB" strokeWidth="1" fill="none">
                <circle cx="40" cy="110" r="12" />
                <circle cx="165" cy="110" r="12" />
                <path
                  d="M 34 104 L 46 116 M 46 104 L 34 116"
                  stroke="#E5E7EB"
                />
                <path
                  d="M 159 104 L 171 116 M 171 104 L 159 116"
                  stroke="#E5E7EB"
                />
              </g>

              {/* Side Door - Modern Style */}
              <rect
                x="20"
                y="62"
                width="18"
                height="30"
                rx="4"
                fill="#334155"
                stroke="#1E293B"
                strokeWidth="1"
              />
              <rect x="22" y="78" width="4" height="10" rx="1" fill="#94A3B8" />

              {/* Side Panel Accents */}
              <rect
                x="15"
                y="68"
                width="165"
                height="3"
                rx="1"
                fill="#0EA5E9"
              />
              <rect
                x="15"
                y="85"
                width="165"
                height="2"
                rx="1"
                fill="#64748B"
              />

              {/* Modern Grille */}
              <rect
                x="210"
                y="50"
                width="12"
                height="25"
                rx="6"
                fill="#1E293B"
              />
              <rect x="212" y="53" width="8" height="3" rx="1" fill="#64748B" />
              <rect x="212" y="58" width="8" height="3" rx="1" fill="#64748B" />
              <rect x="212" y="63" width="8" height="3" rx="1" fill="#64748B" />
              <rect x="212" y="68" width="8" height="3" rx="1" fill="#64748B" />

              {/* Volvo Logo Area */}
              <circle cx="215" cy="40" r="6" fill="#0EA5E9" />
              <text
                x="215"
                y="43"
                textAnchor="middle"
                fill="#FFF"
                fontSize="4"
                fontFamily="Arial, sans-serif"
                fontWeight="bold"
              >
                V
              </text>

              {/* Modern LED Destination Display */}
              <rect
                x="50"
                y="20"
                width="100"
                height="10"
                rx="5"
                fill="#1F2937"
              />
              <text
                x="100"
                y="27"
                textAnchor="middle"
                fill="#0EA5E9"
                fontSize="6"
                fontFamily="Arial, sans-serif"
              >
                redRoute Express
              </text>

              {/* Side Mirror - Modern */}
              <ellipse
                cx="228"
                cy="55"
                rx="3"
                ry="6"
                fill="#374151"
                stroke="#1E293B"
                strokeWidth="1"
              />

              {/* Door Step */}
              <rect x="18" y="92" width="22" height="4" rx="2" fill="#64748B" />

              {/* Window Reflections */}
              <rect
                x="32"
                y="40"
                width="18"
                height="6"
                rx="1"
                fill="#F1F5F9"
                opacity="0.6"
              />
              <rect
                x="57"
                y="40"
                width="18"
                height="6"
                rx="1"
                fill="#F1F5F9"
                opacity="0.6"
              />
              <rect
                x="82"
                y="40"
                width="18"
                height="6"
                rx="1"
                fill="#F1F5F9"
                opacity="0.6"
              />
              <rect
                x="107"
                y="40"
                width="18"
                height="6"
                rx="1"
                fill="#F1F5F9"
                opacity="0.6"
              />
              <rect
                x="132"
                y="40"
                width="18"
                height="6"
                rx="1"
                fill="#F1F5F9"
                opacity="0.6"
              />
            </svg>
          </div>
          {/* Hero Text */}
          <div className="absolute top-12 left-8 text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
              India's No.1 online
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              bus ticket booking site
            </h2>
          </div>
        </div>

        {/* Integrated Booking Form */}
        <div className="relative z-10 -mt-20">
          <div className="max-w-5xl mx-auto px-8">
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                {/* Input Fields Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* From */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      From
                    </Label>
                    <div className="relative">
                      <Bus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        value={fromCity}
                        onChange={(e) => setFromCity(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        placeholder="From"
                      />
                    </div>
                  </div>

                  {/* To */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      To
                    </Label>
                    <div className="relative">
                      <Bus className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        value={toCity}
                        onChange={(e) => setToCity(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        placeholder="To"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-600">
                      Date of Journey
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="pl-10 h-14 text-lg rounded-2xl border-gray-200"
                        min={today}
                      />
                    </div>
                  </div>
                </div>

                {/* Search Button and Booking Options Row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Search Button */}
                  <div className="w-full md:w-auto">
                    <Button
                      onClick={handleSearch}
                      className="w-full md:w-auto h-14 px-12 text-lg bg-red-600 hover:bg-red-700 rounded-2xl"
                    >
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                  </div>

                  {/* Booking for women toggle */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <User className="h-5 w-5 text-pink-600" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        Booking for women
                      </div>
                      <div className="text-xs text-blue-600 cursor-pointer">
                        Know more
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
